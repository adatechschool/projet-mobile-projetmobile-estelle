import { View, Text, Image} from "react-native";

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <Image 
        source={{ uri:"https://www.milford-sound.co.nz/wp-content/uploads/2017/05/Milford-Sound-reflection.jpg" }}
        style={{ height:300, width: 300 }}
      ></Image>
      <Text>Milford Sound</Text>
      <Text>Fiordland National Park, New Zealand</Text>
    </View>
  )
}