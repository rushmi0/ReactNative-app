import { 
    View, 
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native'

import React, { 
    useState,
    useEffect
 } from 'react'

 import axios from 'axios'


//  https://jsonplaceholder.typicode.com/posts
//  https://randomuser.me/api/?results=15

const RandomUsersScreen = () => {

const [loading, setLoading] = useState(true);
const [user, setUsers] = useState( [] );

const fetchUser = async () => {
    try {
        // const response = await fetch('https://randomuser.me/api/?results=15')
        // const data = await response.json();
        // setUsers(data.results);

        const response = await axios.get('https://randomuser.me/api/?results=15');
        setUsers(response.data.reuslts);
        setLoading(false);
    
    } catch (error) {
        console.error('Error fetching users: ', error)
        setLoading(false);
    }
}

useEffect( () => {
    fetchUser();
}, []);

  return (
    <View style={ {flex: 1, marginLeft: 10, justifyContent: 'center'} }>
        {
            /* Conditonal Operator */
            loading? /* ถ้าเป็นจริง */ (
                <ActivityIndicator size='large' color='#0000ff'/>
            )
            : /* ถ้าเป็นเท็จ */ (
                <FlatList
                    data={user}
                    renderItem={ ( {item} ) =>  (
                        <view style={ {marginVertical: 10} }>
                            <Text>{`${item.name.firs} ${item.name.last} ${item.email}`}</Text>
                        </view>
                    ) }
                    
                    keyExtractor={ (index) => index.toString() }
                />
            )
        }
    </View>
  )
}

export default RandomUsersScreen