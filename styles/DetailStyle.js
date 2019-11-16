import { StyleSheet } from "react-native";

export default detailStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  imgContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  box1: {
    flex: 1,
    margin: 20
  },
  productDesc: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
    fontFamily: "Linn-Regular"
  },
  productPrice: {
    fontSize: 18,
    color: "#f72",
    marginBottom: 10,
    fontFamily: "Linn-Regular"
  },
  shopLocView: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  mapBtn: {
    backgroundColor: "#3af",
    borderStyle: "solid",
    width: "100%",
    borderRadius: 5
  },
  btnText: {
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontFamily: "Linn-Regular"
  },
  img: {
    height: 20,
    width: 20,
    backgroundColor: "#fff"
  }
});
