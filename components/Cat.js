// import { View, Text } from "react-native";
// import React from "react";
//
// const Cat = () => {
//     return (
//         <View>
//             <Text>Hello, I am your Cat!</Text>
//         </View>
//     );
// };
//
// export default Cat;

import {View, Text} from "react-native";
import React from "react";

const getFulTname = (Fn, Sn, Tn) => {
    return Fn + " " + Sn + " " + Tn;
};

const Cat = () => {
    return <Text>
                Hello, I am {getFulTname("Lily", "Louis", "Luca")}
            </Text>;
};

export default Cat;