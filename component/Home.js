import React,{ Component } from "react";
import {View,Text,Button} from 'react-native'

class HomeScreen extends Component{
    render()
    {
        return (
            <View style={{ display:'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Text>Home Screen</Text>
              <Button
                title="Go to Maps"
                onPress={() => this.props.navigation.navigate('Map')}
              />
              <Text>Image Picker</Text>
              <Button
                title="Go to ImagePicker"
                onPress={() => this.props.navigation.navigate('ImagePicker')}
              />
                <Text>Make a Phone Call</Text>
              <Button
                title="Go to Caller"
                onPress={() => this.props.navigation.navigate('PhoneCall')}
              />
            </View>
          )

    }

  }

  export default HomeScreen;