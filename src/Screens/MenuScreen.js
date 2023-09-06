import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MenuStyles } from '../Styles/MenuStyles';

const MenuScreen = ({navigation}) => {

    return (
        <View style={MenuStyles.containerMaster}>
            <Image
                style={MenuStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <Image
                style={MenuStyles.logo}
                source={require('../Assets/logo.png')}
            />
        </View>
    );
};

export { MenuScreen };
