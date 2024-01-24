import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
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
      </ScrollView>
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
  }
})
