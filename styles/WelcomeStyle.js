import { StyleSheet } from "react-native";

export default welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#235",
     
      },
      WelcomeContainer:{
        padding:30,
      },
      linnlogo:{
        margin:30
      },
      greeting: {
        color: "white"
      },
      greeting1: {
        fontSize: 20,
        marginBottom: 10,
        fontFamily:'Pyidaungsu-Bold'
      },
      greeting2: {
        fontSize: 17,
        marginBottom: 10,
        fontFamily:'Pyidaungsu-Regular'
      },
      greeting3: {
        textAlign: "justify",
        fontSize: 15,
        height:100,
        fontFamily:'Pyidaungsu-Regular'
      },
      imgView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:30
      },
      img:{
        height:30,
        width:30,
        // backgroundColor:'#fff'
      }
});

