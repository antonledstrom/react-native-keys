import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Text, ButtonGroup } from 'react-native-elements'; 
import { connect } from 'react-redux'; 
import { selectKeyIndex } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

class KeysButton extends Component {
    render() {
        const { selectedValues: { selectedKeyIndex }, keys } = this.props;
        const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key]));
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = BUTTON_GROUP_STYLES;

        return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text h3>Key</Text>
            <Text h1 style={{ marginBottom: 2 }}>{keys[selectedKeyIndex].key}</Text>
            <ButtonGroup 
                onPress={index => this.props.selectKeyIndex(index)}
                buttons={keyButtons}
                containerStyle={containerStyle}
                buttonStyle={buttonStyle}
                selectedTextStyle={selectedTextStyle}
                selectedIndex={selectedKeyIndex}
            />
        </View>); 
    }
}

// reducers/index.js == theese args
const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });
// second arg = state ??, connect = redux connection 
export default connect(mapStateToProps, { selectKeyIndex })(KeysButton);
