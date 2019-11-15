import { StyleSheet } from "react-native";

export default listItemStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30
  },
  itemName: {
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Linn-Regular"
  },
  itemPrice: {
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: "Linn-Regular",
    color:'#f72'
  },
  rowLeft: {
    width: "30%"
  },
  rowRight: {
    width: "70%",
    flexDirection: "column"
  },
  productImg: {
    width: 100,
    height: 100
  }
});
