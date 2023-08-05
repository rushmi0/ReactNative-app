import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList,
    ActivityIndicator
} from 'react-native'

import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UseEffectFlatList = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // * เรียกใช้ครั้งเดียว
    useEffect( () => {
        // * เรียกใช้ API โดย axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (rawData) => {
            setData(rawData.data);

            // * ดึงข้อมูลเสร็จหรือไม่สำเร็จให้ตัว Loading หยุดหมุน
            setIsLoading(false);
        } )
        
        .catch( () => {
            console.error('Response Error: ', error);
        })
    }, [])


    if (isLoading) {
        return (
            <View style={ {flex:1, justifyContent: 'center', } }>
                <ActivityIndicator size='large' color='#0000ff'/>
            </View>
        )
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
            UseEffectFlatList
      </Text>


      {/* รูปแบบการดึงค่าแสดงผลข้อมูลจาก API โดยใช้ FlatList */}
      <FlatList
            data={data}
            
            keyExtractor={ (item) => item.id.toString()}

            renderItem={ ( {item} ) => (
                <View key={item.id} style={styles.post}>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
      />
    </View>
  )
}

export default UseEffectFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    post: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc'
    },

    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
});