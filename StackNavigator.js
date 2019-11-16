import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import screen
import Welcome from './screens/Welcome';
import Category from './screens/Category';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import Location from './screens/Location';

const StackNavigatiorConfig ={
    initialRouteName : 'Welcome'
}


const RouteConfigs = {
    Welcome : { 
        screen: Welcome,
        navigationOptions:()=>({
            headerStyle: {
                backgroundColor:"#235",
                borderBottomWidth: 0, //For IOS to hide header bottom shadow color
                elevation: 0 //For Android to hide header bottom shadow color
            },
            
            headerTitleStyle:{
                color:'white',
                width:'90%',
                textAlign:'center'
            }
        }) 
    },
    Category : { 
        screen: Category ,
        navigationOptions:()=>({
            title: "Category",
            headerStyle: {
                backgroundColor:"#235",
            },
            headerTitleStyle:{
                color:'white',
                width:'80%',
                textAlign:'center',
                fontFamily: "Linn-Regular"
            },
            headerTintColor:"white"
        }) 
    },
    ItemList : { 
        screen: ItemList,
    },
    ItemDetail : { 
        screen: ItemDetail
    },
    Location : { 
        screen: Location,
        navigationOptions:()=>({
            title: "You Can Buy Here",
            headerStyle: {
                backgroundColor:"#235",
            },
            headerTitleStyle:{
                color:'white',
                width:'80%',
                textAlign:'center',
                fontFamily: "Linn-Regular"
                
            },
            headerTintColor:"white"
        }) 
    }
}

export default createAppContainer(
    createStackNavigator(RouteConfigs,StackNavigatiorConfig)
)