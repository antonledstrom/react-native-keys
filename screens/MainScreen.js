import React, { Component } from 'react'; 
import { View, Platform, Image } from 'react-native'; 
import { Divider } from 'react-native-elements'; 
import Expo from 'expo';
import icon from '../assets/digiicon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH, DIGI_COLORS } from '../constants';
import KeysButton from '../components/KeysButton';
import CapoButton from '../components/CapoButton';
import CapoKey from '../components/CapoKey';


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
            backgroundColor: DIGI_COLORS.defaultGreyBackground
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: DIGI_COLORS.defaultFont
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
        const { containerStyle, dividerStyle } = styles; 
        return (<View style={{ flex: 1, backgroundColor: '#ddd' }}> 
            <View style={containerStyle}>
                <KeysButton />
                <Divider style={dividerStyle} />
                <CapoButton />
                <Divider style={dividerStyle} />
                <CapoKey />
            </View>
        </View>);
    }
}

const styles = {
    imageStyle: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dividerStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: DIGI_COLORS.orange
    }
};

export default MainScreen; 
