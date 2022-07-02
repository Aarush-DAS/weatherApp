import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export default class WeatherScreen extends Component{
  constructor(){
    super();
    this.state={
      weather:''
    }

  }

  getWeather=async()=>{
    var url='https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';

    return fetch(url)
    .then(response=>response.json())
    .then(responseJason=>{
      this.setState({
        weather:responseJason
      })
    })

    .catch(error=>{
      console.error(error);
    })
  }

  componentDidMount=()=>{
    this.getWeather();
  }

  render(){
    if(this.state.weather===''){
      return(
        <View style={styles.container}> 
        <Text>loading....</Text>

        </View>
      )
    }

    else{
      return(
        <View style={styles.container}>
        <View style={styles.subcontainer}>
        <Text style={styles.title}>weather forecast </Text>
        <Image style={styles.cloudImage} source={require('./cloud.png')}/>
        </View>
        </View>
        
      )
    }
  }
}

const styles=StyleSheet.create({
  container:{
    felx:1
  }
})
