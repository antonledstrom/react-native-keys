import React, { Component } from 'react'; 
import { View, Platform, Image } from 'react-native'; 
import Expo from 'expo';
import icon from '../assets/digiicon.png';
import STATUS_BAR_HEIGHT from '../constants';
import KeysButton from '../components/KeysButton';


const cacheImages = images => images.map((image) => {
    if (typeof image === 'string') return Image.prefetch(image); 
    return Expo.Asset.fromModule(image).downloadAsync();
}); 

// const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font)); 
  

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
    });

    state = {
        appIsReady: false 
    }

    componentWillMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([icon]); 
        await Promise.all([...imageAssets]);
        // after 'then'
        this.setState({
            appIsReady: true
        }); 
    }

    render() {
        return (<View style={{ flex: 1, backgroundColor: '#ddd' }}> 
            <KeysButton />
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
