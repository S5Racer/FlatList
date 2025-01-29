import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../styles/colors";
import { useState } from "react";
import defaultStyles from "../styles/defaultStyles";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("1");
    type dataType = {
        id: string;
        title: string;
    }
    const DATA: dataType[] = [
        { id: "1", title: "ry kim" },
        { id: "2", title: "d koik" },
        { id: "3", title: "jay lee"},
        { id: "4", title: "j kim" },
    ];

    const selectedList = (item: dataType) => {
      setSelectedId(item.id);
        console.log(item.title);
    }
  
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here heheheha</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            renderItem={({item}) => (
              <TouchableHighlight style = {[styles.titleContainer
              , {
                backgroundColor: 
                item.id === selectedId ? colors.primary : colors.secondary
              }                
              ]} onPress={() => selectedList(item)}>
                <Text style={[styles.titleText,

                  {color: item.id === selectedId ? colors.text.light : colors.text.dark,}
                ]}>{item.title}</Text>
              </TouchableHighlight>
            )}
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
  titleContainer: {
    backgroundColor: colors.secondary,
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
