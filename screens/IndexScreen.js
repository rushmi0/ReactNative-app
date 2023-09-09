import {View, Text, Button} from 'react-native'
import React from 'react'

const IndexScreen = ({navigation, route}) => {

    // Post updated for send the post data to the server
    // React.useEffect( () => {
    //     if (route.params?.post) {
    //
    //     }
    // } , [route.params?.post])

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button
                title="Create Post"
                onPress={() => {
                    navigation.navigate({
                        name: "CreatePost",
                    });
                }}
            />

            <Text>
                {"\n"}Post: {route.params?.post}
            </Text>
        </View>
    );
}


export default IndexScreen