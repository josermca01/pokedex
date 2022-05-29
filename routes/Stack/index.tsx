import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

import Search from "../../screens/Search"
import Home from "../../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Search" component={Search} />
        </Navigator>
    )
}