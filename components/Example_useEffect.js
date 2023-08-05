import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import axios from 'axios'


// https://jsonplaceholder.typicode.com/posts
// https://randomuser.me/api/?results=15


const Example_useEffect = () => {

  useEffect( () => {
    // * เรียกใช้ API โดย axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( (rawData) => {
          setData(rawData.data);
      } )
      
      .catch( () => {
          console.error('Response Error: ', error);
      })
  }, [])


  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Posts from API</Text>


      {/* รูปแบบการดึงค่าแสดงผลข้อมูลจาก API โดยใช้ map */}
      {
        data.map( (post) => (
            <View key={post.id} style={styles.post}>
                  <Text style={styles.postTitle}>{post.title}</Text>
            </View>
        ) )
      }

    </View>
  )
}

export default Example_useEffect

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