import React from "react";
import { View, Text, Image ,TouchableOpacity,ActivityIndicator } from "react-native";
import * as Font from 'expo-font';

//import external style sheet
import welcomeStyle from "../styles/WelcomeStyle";

export default class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded : false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      "Pyidaungsu-Bold": require('../assets/fonts/pyidaungsu/Pyidaungsu-Bold.ttf'),
      "Pyidaungsu-Regular": require('../assets/fonts/pyidaungsu/Pyidaungsu-Regular.ttf'),
    });

    //this.setState will wait until font loadAsync done with await keyword
    this.setState({ fontLoaded: true})
  }

  render() {
    const { navigate } = this.props.navigation;
    if(this.state.fontLoaded){
      return (
        <View style={welcomeStyle.container}>
          <View style={{ flex:1}}></View>

          <View style={welcomeStyle.WelcomeContainer}>
            <Image style={welcomeStyle.linnlogo} source={require("../assets/images/linnlogo.png")} />
            <Text style={[welcomeStyle.greeting, welcomeStyle.greeting1]}>မင်္ဂလာပါ</Text>
            <Text style={[welcomeStyle.greeting, welcomeStyle.greeting2]}>
              Linn IT & Mobile Store မှ နွေးထွေးစွာ ကြိုဆိုပါတယ်ခင်ဗျာ။
            </Text>
            <Text style={[welcomeStyle.greeting, welcomeStyle.greeting3]}>
              လူကြီးမင်းအတွက် အရည်အသွေးမြင့်ပြီး ယုံကြည်စိတ်ချရသော Mobile , IT &
              Electronic ပစ္စည်းများကို ကျွန်တော်တို့၏ Linn IT & Mobile Store မှ
              ဝယ်ယူရရှိနိုင်ပါတယ်။
            </Text>
            <View style={welcomeStyle.imgView}>
              <TouchableOpacity
                onPress={() => navigate("Category")}
              >
                <Image style={welcomeStyle.img} source={require("../assets/icons/right-arrow.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={welcomeStyle.footer}>
            <Text style={[welcomeStyle.greeting, welcomeStyle.footerText]}>
              Code with <Image source={require("../assets/icons/heart.png")} /> By Linn Dev House
            </Text>
          </View>
        
        </View>
      );
    }else{
      return (
        <View style={welcomeStyle.container}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }
  }
}

