import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mapRegion: {
        latitude : 19.7545620,
        longitude : 96.203392,
        latitudeDelta : 0.004757,
        longitudeDelta :0.006866
      }
    }
  }
  1
  render(){
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.mapStyle}
          region={this.state.mapRegion}>
            <Marker
              style = {{ width:60, height:40 }}
              coordinate = {{
                latitude : 19.7545620,
                longitude : 96.203392,
              }}
              onDragEnd = { e => alert(JSON.stringify(e.nativeEvent.coordinate))}
              title={"Linn IT Solution Co.,Ltd"}
              description = {
                "Ygn-Mdy highway, Pyinmana"
              }
            ></Marker>

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
