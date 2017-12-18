import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import { connect } from 'react-redux';
import { openChordsModal } from '../actions';
import { DIGI_COLORS } from '../constants'; 

class ViewChordsButton extends Component {
    render() {
        return (
        <View style={this.props.style}> 
            <Button 
                raised
                icon={{ name: 'library-music' }}
                title="View Transposed Chords"
                backgroundColor={DIGI_COLORS.orange}
                onPress={() => this.props.openChordsModal()}
            />
        </View>);
    }
}

export default connect(null, { openChordsModal })(ViewChordsButton); 
