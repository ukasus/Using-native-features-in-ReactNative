import React,{ Component } from "react";
import {View,Text,Button,StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

class MapAndGps extends Component{
    render()
    {
        return (
            
            <View style={styles.container}>
            
          </View>
          

         
          )

    }

  }

  export default MapAndGps;