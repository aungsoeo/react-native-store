import { StyleSheet } from "react-native";

export default categoryStyle = StyleSheet.create({
    container: {
        flex: 1
      },
      container2: {
        margin: 40,
        flex: 1
      },
    
      boxcontainter: {
        height: 150,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
      },
      box: {
        width: "45%",
        height: 150,
        backgroundColor: "#ecf0f5",
        borderColor: "#999",
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: "column"
      },
      catImg: {
        alignSelf: "center",
        marginVertical: 20
      },
      catname: {
        fontSize: 15,
        color: "#235",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        fontFamily:'Linn-Regular',
        fontWeight:'300'
      }
});

