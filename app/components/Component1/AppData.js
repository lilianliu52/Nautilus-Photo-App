import React, { Component } from 'react';
import { AppRegistry, View, AsyncStorage, ScrollView, Image, Text, StyleSheet, Button } from 'react-native';
// import {CachedImage} from "react-native-img-cache";
import FastImage from 'react-native-fast-image'

export function test(){
	
}

export default class AppData extends Component {
   

   Data (){
   	data=this.props.data;

	let currentIndex = data.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue =data[currentIndex];
    data[currentIndex] = data[randomIndex];
    data[randomIndex] = temporaryValue;
  	}

   	return data; 
   }

   recursiveShuffle(a) {

       // recursive algorithm stack overflows
      // if ( n <= 1) {
      //   return;
      // }
      //
      // //generate a random number between 1 and n-2;
      // // let index = Math.floor(Math.random() * (n-2 - 1 + 1)) + 1;
      // let index = (n-2)*Math.random();
      //
      // //now swap this value with the last one
      // // console.log("Random index " + index);
      // let temp = array[n-1];
      // array[n-1] = array[index];
      // array[index] = temp;
      // this.recursiveShuffle( array, n-1);


       for (let i = a.length; i; i--) {
           let j = Math.floor(Math.random() * i);
           [a[i - 1], a[j]] = [a[j], a[i - 1]];
       }
    }

  _handlePress() {
    alert("Everyday I'm shufflin");
    this.recursiveShuffle( this.props.data);
      this.forceUpdate();
  }

  render() {

  	var data= null;

  	var photoList = this.Data().map( (image, i) =>{
  		return(
  			<View key={i} style={styles.viewContainer}>
  				<Image  source={{uri: image.url, cache:'force-cache'}}  style={styles.imageStyle} >
  					<Text style={styles.textStyle}>
              {image.title}
  					</Text>
  				</Image>
  			</View>
  			)
  	})

    return (
    <View>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
	        {photoList}
       </ScrollView>
       <Button
  			style={{fontSize: 20, color: 'green'}}
  			styleDisabled={{color: 'red'}}
  			onPress={() => this._handlePress()}
  			title="Refresh">

		</Button>
	</View>

    );


  }
}

var styles = StyleSheet.create({
  scrollContainer: {
	paddingVertical: 20,
	backgroundColor: '#ffffff',
  },
  viewContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  imageStyle: {
    width: 300,
    height: 500,
    borderRadius:20,
    borderWidth: 3,
    borderColor: '#add8e6'
  },
  textStyle: {
    transform: [{ rotate: '45deg'}],
    color: 'red',
    paddingVertical: 150,
  },
});

AppRegistry.registerComponent('AppData', () => AppData);