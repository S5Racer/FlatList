import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState } from "react";
import defaultStyles from "../styles/defaultStyles";
import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeparator";
import { dataType, DATA } from "../data/appData";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("1");
    
    
    const rowPress = (item: dataType) => {
      setSelectedId(item.id);
      console.log(item.title);
    }
  
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>heheheha</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            ItemSeparatorComponent={() => <ListItemSeparator color="fuchsia"/>}
            renderItem={({item}) => (
              <ListItem
                item={item}
                isSelected={selectedId === item.id}
                onPress={rowPress}
              />
              
            )
          }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
