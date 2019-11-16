import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";


import categoryStyle from "../styles/CategoryStyle";

export default class Category extends React.Component {
 
  render() {
    const { navigate } = this.props.navigation;
   
    return (
      <View style={categoryStyle.container}>
        <ScrollView>
          <View style={categoryStyle.container2}>
            <View style={categoryStyle.boxcontainter}>
              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 1, catName: "Apple" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/apple.png")}
                  />
                  <Text style={categoryStyle.catname}>Apple</Text>
                </TouchableOpacity>
              </View>

              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 2, catName: "Samsung" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/samsung.png")}
                  />
                  <Text style={categoryStyle.catname}>Samsung</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={categoryStyle.boxcontainter}>
              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 3, catName: "Huawei" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/huawei.png")}
                  />
                  <Text style={categoryStyle.catname}>Huawei</Text>
                </TouchableOpacity>
              </View>

              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 4, catName: "Xiaomi" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/xiaomi.png")}
                  />
                  <Text style={categoryStyle.catname}>Xiaomi</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={categoryStyle.boxcontainter}>
              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 5, catName: "OPPO" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/oppo.png")}
                  />
                  <Text style={categoryStyle.catname}>OPPO</Text>
                </TouchableOpacity>
              </View>
              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 6, catName: "VIVO" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/vivo.png")}
                  />
                  <Text style={categoryStyle.catname}>VIVO</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={categoryStyle.boxcontainter}>
              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 7, catName: "One Plus" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/one-plus.png")}
                  />
                  <Text style={categoryStyle.catname}>One Plus</Text>
                </TouchableOpacity>
              </View>
              <View style={categoryStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("ItemList", { catId: 8, catName: "Nokia" })
                  }
                >
                  <Image
                    style={categoryStyle.catImg}
                    source={require("../assets/icons/nokia.png")}
                  />
                  <Text style={categoryStyle.catname}>Nokia</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
    
  }
}

