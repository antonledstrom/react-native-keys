import React, { Component } from 'react'; 
import { View, Modal } from 'react-native'; 
import { Button, Text } from 'react-native-elements'; 
import { connect } from 'react-redux'; 
import { closeChordsModal } from '../actions/index';
import { 
    SCREEN_WIDTH, 
    SCREEN_HEIGHT,
    DIGI_COLORS

} from '../constants'; 


class ChordsModal extends Component {
    render() {
        const { 
            modalStyle,
            containerStyle,
            headerStyle,
            contentStyle,
            contentRowStyle,
            itemContainerStyle,
            itemHeadStyle,
            itemStyle,
            buttonContainerStyle
        } = styles;

        return (
            <Modal 
                transparent
                animationType={'slide'}
                visible={this.props.modal.chordsModalIsOpen}
                onRequestClose={() => this.props.closeChordsModal()}
            >
                <View style={modalStyle}>
                    <View style={containerStyle}>
                        <View style={headerStyle}>
                            <Text h4>Chords transitions</Text>
                        </View>

                        <View style={contentStyle}>
                            <View style={contentRowStyle}>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle, itemHeadStyle]}> 
                                        Key 
                                    </Text>
                                </View>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle, itemHeadStyle]}>⇒</Text>
                                </View>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle, itemHeadStyle]}> 
                                        Capo
                                    </Text>
                                </View>
                            </View>

                            <View style={contentRowStyle}>
                                <View style={itemContainerStyle}>
                                    <Text style={itemStyle}> 
                                        Key 
                                    </Text>
                                </View>
                                <View style={itemContainerStyle}>
                                    <Text style={itemStyle}>⇒</Text>
                                </View>
                                <View style={itemContainerStyle}>
                                    <Text style={itemStyle}> 
                                        Capo
                                    </Text>
                                </View>
                            </View>

                            <View style={buttonContainerStyle}>
                                <Button 
                                    raised
                                    icon={{ name: 'close' }}
                                    title="close"
                                    backgroundColor={DIGI_COLORS.cta}
                                    onPress={() => this.props.closeChordsModal()}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
const marginPercent = 0.05; 

const styles = {
    modalStyle: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    containerStyle: {
        flex: 1,
        margin: SCREEN_HEIGHT * marginPercent,
        backgroundColor: 'white'
    },
    headerStyle: {
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentRowStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemHeadStyle: {
        fontWeight: '900',
        fontSize: 14
    },
    itemStyle: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 14
    },
    buttonContainerStyle: {
        paddingBottom: 10
    }
};

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys }); 
export default connect(mapStateToProps, { closeChordsModal })(ChordsModal); 
