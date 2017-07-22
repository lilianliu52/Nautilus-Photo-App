import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import AppData from './AppData';

var REQUEST_URL = 'https://jsonplaceholder.typicode.com/photos';


export default class Component1 extends Component {

constructor(){
	super()
	this.state= {
		data:[]
	}
}

getData(){

 return fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
      	this.setState({data:responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
}

componentDidMount(){
	this.getData();
}

  render() { 
      return (
       <View>
    		 <AppData data={this.state.data}/>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  scrollContainer: {
	paddingVertical: 20,
	backgroundColor: '#ffffff',
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
});


AppRegistry.registerComponent('Component1', () => Component1);
