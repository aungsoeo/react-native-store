import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
import * as Font from "expo-font";

import listItemStyle from "../styles/ListItemStyle";

const apple = [
    {
      id: 1,
      src: require("../assets/images/apple/4.jpg"),
      name: "iPhone 4",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 2,
      src: require("../assets/images/apple/4.jpg"),
      name: "iPhone 4S",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 3,
      src: require("../assets/images/apple/5.png"),
      name: "iPhone 5",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 4,
      src: require("../assets/images/apple/5.png"),
      name: "iPhone 5C",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 5,
      src: require("../assets/images/apple/5.png"),
      name: "iPhone 5S",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 6,
      src: require("../assets/images/apple/6.png"),
      name: "iPhone 6",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 7,
      src: require("../assets/images/apple/6.png"),
      name: "iPhone 6 Plus",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 8,
      src: require("../assets/images/apple/6.png"),
      name: "iPhone 6s",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 9,
      src: require("../assets/images/apple/6.png"),
      name: "iPhone 6s Plus",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 10,
      src: require("../assets/images/apple/6.png"),
      name: "iPhone SE",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 11,
      src: require("../assets/images/apple/7.png"),
      name: "iPhone 7",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 12,
      src: require("../assets/images/apple/7-Plus.png"),
      name: "iPhone 7 Plus",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 13,
      src: require("../assets/images/apple/8.png"),
      name: "iPhone 8",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 14,
      src: require("../assets/images/apple/8.png"),
      name: "iPhone 8 Plus",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 15,
      src: require("../assets/images/apple/x.png"),
      name: "iPhone X",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 16,
      src: require("../assets/images/apple/x.png"),
      name: "iPhone XR",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 17,
      src: require("../assets/images/apple/x.png"),
      name: "iPhone XS",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 18,
      src: require("../assets/images/apple/xpromax.png"),
      name: "iPhone XS Max",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 19,
      src: require("../assets/images/apple/11promax.png"),
      name: "iPhone 11",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 20,
      src: require("../assets/images/apple/11promax.png"),
      name: "iPhone 11 Pro",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    },
    {
      id: 21,
      src: require("../assets/images/apple/11promax.png"),
      name: "iPhone 11 Pro Max",
      price: "$1000",
      decritpion:
        "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
    }
  ];

  const samsung = [
    {
        id: 1,
        src: require("../assets/icons/samsung.png"),
        name: "Samung Galaxy Note 10+",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 2,
        src: require("../assets/icons/samsung.png"),
        name: "Samung Galaxy S 10+",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 3,
        src: require("../assets/icons/samsung.png"),
        name: "Samung Galaxy A50",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 4,
        src: require("../assets/icons/samsung.png"),
        name: "Samung Galaxy A50S",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      }
  ];

  const huawei = [
    {
        id: 1,
        src: require("../assets/icons/huawei.png"),
        name: "Huawei Nova 3",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 2,
        src: require("../assets/icons/huawei.png"),
        name: "Huawei Nova 3+",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 3,
        src: require("../assets/icons/huawei.png"),
        name: "Huawei Y9",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      }
  ];
  const xiaomi = [
    {
        id: 1,
        src: require("../assets/icons/xiaomi.png"),
        name: "xiaomi MI Note 8",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 2,
        src: require("../assets/icons/xiaomi.png"),
        name: "xiaomi Mi CC9E",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 3,
        src: require("../assets/icons/xiaomi.png"),
        name: "Redmi Note 7",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      },
      {
        id: 4,
        src: require("../assets/icons/xiaomi.png"),
        name: "Redmi Note 7 pro",
        price: "$1000",
        decritpion:
          "Lus sollici onec tincid ecenas donec augue liquam. Maurisma accumsan bulum teger mstut teger nislae felisq. Nullam quisut lla aenean cursusp lacusp sodale. Pellent ent quamphas que arcused eclass nulla musetiam maurisd. Magnis eratetia nequenu ecenas himena dolor quam. Enulla primis uris condim bibendu turpisn miproin mussed metusves ipsumin. Nec sapien bulum urnavest sapienma ipsumae."
      }
  ];
  

export default class ItemList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("catName", "Apple"),
      headerStyle: {
        backgroundColor: "#235"
      },
      headerTitleStyle: {
        color: "white",
        width: "80%",
        textAlign: "center",
      },
      headerTintColor: "white"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      productListArr: [],
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Linn-Light": require("../assets/fonts/linn/Linn-Caracas-Light.otf"),
      "Linn-Medium": require("../assets/fonts/linn/Linn-Caracas-Medium.otf"),
      "Linn-Regular": require("../assets/fonts/linn/Linn-Caracas.otf")
    });


    //api fetch data will go here
    

    if (this.props.navigation.getParam("catId") == 1) {
      this.setState({
        fontLoaded: true,
        productListArr: apple
      });
    }else if(this.props.navigation.getParam("catId") == 2){
        this.setState({
            fontLoaded: true,
            productListArr: samsung
          });
    }else if(this.props.navigation.getParam("catId") == 3){
        this.setState({
            fontLoaded: true,
            productListArr: huawei
          });
    }else if(this.props.navigation.getParam("catId") == 4){
        this.setState({
            fontLoaded: true,
            productListArr: xiaomi
          });
    }else{
        this.setState({
            fontLoaded: true,
            productListArr:[]
        })
    }
  }

  // seperate list wiht line
  FlatListItemsSeperator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "98%",
          paddingHorizontal: 10,
          backgroundColor: "#f0f0f0"
        }}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    var arrlen = this.state.productListArr.length;
    console.log(arrlen);
    
    if (this.state.fontLoaded) {
      return (
        <View style={listItemStyle.MainContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.productListArr}
            ItemSeparatorComponent={this.FlatListItemsSeperator}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigate("ItemDetail", {
                    productId: item.id,
                    productName: item.name,
                    productSrc: item.src,
                    productPrice: item.price,
                    productDesc: item.decritpion
                  })
                }
              >
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <View style={listItemStyle.rowLeft}>
                    <Image style={listItemStyle.productImg} source={item.src} />
                  </View>
                  <View style={listItemStyle.rowRight}>
                    <Text style={listItemStyle.itemName}>{item.name} </Text>
                    <Text style={listItemStyle.itemPrice}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    } else {
      return (
        <View style={listItemStyle.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
