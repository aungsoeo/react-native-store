import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";
import * as Font from "expo-font";

import detailStyle from '../styles/DetailStyle'

export default class ItemDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("productName", "Apple"),
      headerStyle: {
        backgroundColor: "#235"
      },
      headerTitleStyle: {
        color: "white",
        width: "80%",
        textAlign: "center"
      },
      headerTintColor: "white"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount(){
    await Font.loadAsync({
      "Linn-Light": require('../assets/fonts/linn/Linn-Caracas-Light.otf'),
      "Linn-Medium": require('../assets/fonts/linn/Linn-Caracas-Medium.otf'),
      "Linn-Regular": require('../assets/fonts/linn/Linn-Caracas.otf'),
    });

    //this.setState will wait until font loadAsync done with await keyword
    this.setState({ fontLoaded: true})
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    if (this.state.fontLoaded) {
      return (
        <View style={detailStyle.container}>
            <ScrollView>
                <View style={detailStyle.imgContainer}>
                    <Image
                    style={detailStyle.productPhoto}
                    source={navigation.getParam("productSrc", "")}
                    />
                </View>
                <View style={detailStyle.box1}>
                    <Text style={[detailStyle.text, detailStyle.productPrice]}>
                    Price - {navigation.getParam("productPrice", "")}{" "}
                    </Text>
                    <Text style={[detailStyle.text, detailStyle.productDesc]}>
                    {navigation.getParam("productDesc", "")}{" "}
                    </Text>

                    <View style={detailStyle.shopLocView}>
                    <TouchableOpacity
                        style={detailStyle.mapBtn}
                        onPress={() => navigate("Location")}
                    >
                        <Text style={detailStyle.btnText}>Where To Buy</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={detailStyle.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
