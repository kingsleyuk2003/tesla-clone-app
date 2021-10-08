import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const CarItem = () => {
  const [locked, setLocked] = useState(false);
  const clickLock = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Naz Mobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
        </TouchableOpacity>
      </View>
      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image
          source={require("../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={locked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: "white",
    marginTop: 175,
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
});
