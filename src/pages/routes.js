import React from 'react'

import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Image } from 'react-native'

import logo from './assets/logo.png'

import Feed from './pages/Feed'
import New from './pages/New'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions: {
            headerTitle: <Imag style={{ marginHorizontal: 20 }} source={logo} />,
            headerTintColor: '#000',
            headerBackTitle: null,
        },
        mode: 'modal'
    })
)