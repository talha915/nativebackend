import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            Password: ""
        }
    }
    onPress=()=>{
        console.log("Name is: ",this.state.name);
        console.log("Password is: ",this.state.Password);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.first}>
                    <Text style={styles.headingText}>
                        Login Page
                    </Text>
                </View>
                <View style={styles.second}>
                    <TextInput
                        style = {styles.textInputs}
                        placeholder = "User Name"
                        onChangeText = {(name) =>this.setState({name})}
                    />
                    <TextInput
                        style = {styles.textInputs}
                        placeholder = "User Password"
                        secureTextEntry
                        onChangeText = {(Password)=>this.setState({Password})}
                    />
                    <Button
                        onPress={this.onPress}
                        title="Press me"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    first: {
        flex: 1,
        backgroundColor: 'brown',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    headingText: {
        color: 'green',
        fontSize: 50,
        justifyContent: 'center',
        textAlign: 'center'
    },
    second: {
        flex: 3,
        backgroundColor: 'green',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    textInputs: {
        width: 250,
        textAlign: 'center',
        color: 'brown'
    }
});