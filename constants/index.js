import { Constants } from 'expo'; 
import { Dimensions } from 'react-native'; 

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const DIGI_COLORS = {
    orange: '#ed652e',
    defaultFont: '#333',
    defaultGreyBackground: '#ece8e5',
    cta: '#ed652e'
};

export const BUTTON_GROUP_STYLES = {
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: 'white'
    },
    selectedTextStyle: {
        color: DIGI_COLORS.orange,
        fontWeight: '900'
    }
};

