import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, ScrollView, SectionList } from "react-native";
import travelSpotsList from './travelspots.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
        <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
        {/* <View style={styles.card}>
          <Image 
            source={{ uri:"https://www.milford-sound.co.nz/wp-content/uploads/2017/05/Milford-Sound-reflection.jpg" }}
            style={styles.picture}
          ></Image>
          <Text style={styles.cardTitle}>Milford Sound</Text>
          <Text style={styles.cardLocation}>Fiordland National Park, New Zealand</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri:"https://www.newzealand.com/assets/Tourism-NZ/Other/img-1536221234-1203-7134-p-A39EBFDA-AA01-F68F-7D7FA6CDC3C2406D-2544003__aWxvdmVrZWxseQo_CropResizeWzEyMDAsbnVsbCw3NSwianBnIl0.jpg" }}
            style={styles.picture}
          ></Image>
          <Text style={styles.cardTitle}>Milford Sound</Text>
          <Text style={styles.cardLocation}>Fiordland National Park, New Zealand</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri:"https://www.milford-sound.co.nz/wp-content/uploads/2017/05/Milford-Sound-reflection.jpg" }}
            style={styles.picture}
          ></Image>
          <Text style={styles.cardTitle}>Milford Sound</Text>
          <Text style={styles.cardLocation}>Fiordland National Park, New Zealand</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri:"https://www.milford-sound.co.nz/wp-content/uploads/2017/05/Milford-Sound-reflection.jpg" }}
            style={styles.picture}
          ></Image>
          <Text style={styles.cardTitle}>Milford Sound</Text>
          <Text style={styles.cardLocation}>Fiordland National Park, New Zealand</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri:"https://www.milford-sound.co.nz/wp-content/uploads/2017/05/Milford-Sound-reflection.jpg" }}
            style={styles.picture}
          ></Image>
          <Text style={styles.cardTitle}>Milford Sound</Text>
          <Text style={styles.cardLocation}>Fiordland National Park, New Zealand</Text>
        </View> */}
        <View>
          <SectionList
            sections={travelSpotsList}
            renderItem={({item}) => {
              return (
                <View style={styles.card}>
                  <Image style={styles.picture} src={item.picture}></Image>
                  <Text style={styles.cardTitle}>{item.place}</Text>
                  <Text style={styles.cardLocation}>{item.location}</Text>
                </View>
              )
            }}
            renderSectionHeader={({ section }) => (
              <Text style={styles.renderSectionHeader}>{section.continent}</Text>
            )}
            ItemSeparatorComponent={()=><View style={{ height: 16 }}></View>}
            SectionSeparatorComponent={()=><View style={{ height: 16 }}></View>}
          ></SectionList>
        </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    padding: 10,    
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "grey"
  },
  picture: {
    height: 350,
    width: 350,
    resizeMode: "contain"
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cardLocation: {
    fontSize: 15,
  },
  renderSectionHeader: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
})
