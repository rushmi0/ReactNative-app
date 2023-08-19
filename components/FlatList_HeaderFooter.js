import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView
} from 'react-native'
import React, {useState} from 'react'



const FlatListHeaderFooter = () => {

    const [dataSource, setDataSource] = useState([
        {id: 1, title: 'Button'},
        {id: 2, title: 'Card'},
        {id: 3, title: 'Input'},
        {id: 4, title: 'Avatar'},
        {id: 5, title: 'CheckBox'},
        {id: 6, title: 'Header'},
        {id: 7, title: 'Icon'},
        {id: 8, title: 'Lists'},
        {id: 9, title: 'Rating'},
        {id: 10, title: 'Pricing'},
        {id: 11, title: 'Avatar'},
        {id: 12, title: 'CheckBox'},
        {id: 13, title: 'Header'},
        {id: 14, title: 'Icon'},
        {id: 15, title: 'Lists'}
    ]);
    
    
    
    const EmptyListMessage = ( {item} ) => {
        return (
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}
            >
                No Data Found
            </Text>
        );
    }

    const ListHeader = () => {
        // * View to set in Header
        return (
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    React Netive Component
                </Text>
            </View>
        )
    }


    const ListFooter = () => {
        // * View to set in Footer
        return (
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    อยากกลับบ้านแล้วครับ
                </Text>
            </View>
        )
    }



    const [listItems, setListItems] = useState(dataSource);

    const ItemView = ({item}) => {
        return (
            //flatlist item
            <View>
                <Text
                    style={styles.itemStyle}
                    onPress={() => getItem(item)}
                >
                    {item.id}
                    {". "}
                    {item.title.toUpperCase()}
                </Text>
            </View>
        );
    };


    const ItemSeparatorView = () => {
        return (
            //flatlist item separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        );
    };


    const getItem = (item) => {
        //function for click on item
        alert('Id: ' + item.id + ' Value: ' + item.title);

    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.textStyle}>
                <FlatList
                    data={listItems}
                    ItemSeparatorComponent={ItemSeparatorView}

                    ListFooterComponent={ListFooter}
                    ListHeaderComponent={ListHeader}

                    renderItem={ItemView}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={EmptyListMessage}
                />
            </View>
        </SafeAreaView>
    )
}


export default FlatListHeaderFooter


const styles = StyleSheet.create({

    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },

    itemStyle: {
        padding: 10,
        textAlign: "left"
    },

    headerFooterStyle: {
        width: '100%',
        height: 45,
        backgroundColor: '#606070',
    },

    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
});