import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Text } from 'react-native-elements'; 
import { connect } from 'react-redux'; 

class CapoKey extends Component {
    render() {
        return (
        <View style={{ alignItems: 'center' }}> 
            <Text h3> Capo key</Text>   
            <Text h1>(KEY)</Text>
        </View>);
    }
}

export default connect()(CapoKey); 
