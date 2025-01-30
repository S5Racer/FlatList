import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { dataType } from "../data/appData";

// declare data type for props here
type propsDataType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
}

  const ListItem: React.FC<propsDataType> = ({item, isSelected, onPress}) => {
    return (
      <TouchableHighlight style = {[styles.titleContainer,{
        backgroundColor: 
        isSelected ? colors.primary : colors.secondary
      }                
      ]} onPress={() => onPress(item)}>
        <Text style={[styles.titleText,
          {color: isSelected ? colors.text.light : colors.text.dark,}
        ]}>{item.title}</Text>
      </TouchableHighlight>
    );
  };

export default ListItem;

const styles = StyleSheet.create({
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
