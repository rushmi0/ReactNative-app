import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    RefreshControl
} from 'react-native'
import React, { useState, useEffect } from 'react';



const FlastListApi = () => {

    const [refreshing, setrefreshing] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    // * รับข้อมูลจาก server และไปในส่วนการแสดงผล
    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then( (response) => response.json() )
            .then( (responseJson) => {
                setDataSource(responseJson)
                setrefreshing(false)
            } ).catch( (error) => {
                console.error(error);
            } );
    };
    
    
    const getItem = (item) => {
        // * Function for click on an item
        alert('Id : ' + item.id + 'Title : ' + item.title)
        
    };
    
    const ItemView = ( {item} ) => {
        return (
            <Text
                style={styles.itemStyle}
                onPress={ () => getItem(item) }
            >
                {item.title}
            </Text>
        )
    }


    useEffect( () => {
        getData();
    }, []);


    const ItemSeparatorView = () => {
        return (
            // * Flatlist item separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        );
    };
    
    const onRefresh = () => {
        // * Clear old data of the list
        setDataSource([]);
        
        // * Call the service to get the latest data
        getData()
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.container}>
                {refreshing ? <ActivityIndicator/> : null}
                <FlatList
                    data = {dataSource}
                    keyExtractor={(index) => index.toString()}
                    ItemSeparatorComponent={ ItemSeparatorView }
                    renderItem={ ItemView }
                    refreshControl={
                        <RefreshControl
                            refreshing = { refreshing }
                            onRefresh = { onRefresh }
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default FlastListApi

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
    },
    itemStyle: {
        fontSize: 20,
        padding: 10,
    },
});

