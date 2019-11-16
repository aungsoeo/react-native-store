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
        textAlign: "center",
        fontFamily: "Linn-Regular"
      },
      headerTintColor: "white"
    };
  };

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;

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
                  Price - {navigation.getParam("productPrice", "")}
                  </Text>
                  <Text style={[detailStyle.text, detailStyle.productDesc]}>
                  {navigation.getParam("productDesc", "")}
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
    
  }
}
