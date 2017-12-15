import React, { Component } from 'react'; 
import { View, Platform, Image } from 'react-native'; 
import icon from '../assets/digiicon.png';
import STATUS_BAR_HEIGHT from '../constants';


class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Digi Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 74,
            backgroundColor: '#ece8e5'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: '#333'
        },
        headerLeft: (
        <Image
            source={icon}
            style={styles.imageStyle} 
        />)
    })

    render() {
        return (<View style={{ flex: 1, backgroundColor: '#ddd' }}>
        {/* Chord modal */}
        {/* Content */}
        </View>);
    }
}

const styles = {
    imageStyle: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40
    }
};

export default MainScreen; 
