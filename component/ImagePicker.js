import React,{ Component } from "react";
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native'

import ImagePicker from 'react-native-image-picker';


const styles = StyleSheet.create({
    addPictureIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    left: 65,
    top: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    }
})

class imagePicker extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            fileUri:null        }
        this.chooseImage=this.chooseImage.bind(this)
    }


     chooseImage(){
        let options = {
        title: 'Select Avatar', 
        cameraType: 'front',
        mediaType: 'photo' ,
        storageOptions: {
        skipBackup: true,
        path: 'images',
        },
        };
        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
        console.log('User cancelled image picker');
        } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        } else if(response.customButton)
        {
            console.log("Custom Button",response.customButton)
        }
         else {
        this.setState(
            //update state to update Image
            {fileUri:response.uri}
        )
         }
        });
    }

    render()
    {
        return (
            <View style={{
                alignSelf: 'center',
                marginTop: 35,
                }}>
                <Image
                style={{ height: 100, width: 100, borderRadius: 50, }}
                source={this.state.fileUri!==null?this.state.fileUri:require('./img.jpeg')} //else show random
                />
                <TouchableOpacity style={styles.addPictureIcon} onPress={()=>
                this.chooseImage()
                }>
                <Text>Image</Text>
                </TouchableOpacity>
                </View>
          )

    }

  }




  export default imagePicker;