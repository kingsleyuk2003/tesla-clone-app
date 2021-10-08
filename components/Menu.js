import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import items from "./Items";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item, index) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              style={styles.arrowIcon}
              icon={faChevronRight}
              size={24}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    color: "white",
  },
  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: "uppercase",
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  menuTextBox: {
    flexGrow: 1,
  },
  arrowIcon: {
    color: "#4D4D4E",
  },
  subTitle: {
    color: "grey",
    fontSize: 14,
    marginLeft: 15,
  },
});
