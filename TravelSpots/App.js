import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, ScrollView, SectionList } from "react-native";
import travelSpotsList from './travelspots.json'
import travelSpotsByCountry from './travelspots2.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
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
