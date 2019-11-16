import React from "react";
import { View, Text, Image ,TouchableOpacity,ActivityIndicator } from "react-native";

//import external style sheet
import welcomeStyle from "../styles/WelcomeStyle";

export default class Welcome extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
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
  }
}

