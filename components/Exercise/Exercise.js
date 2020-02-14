import React, { Component } from "react";
import {
  AsyncStorage,
  AppRegistry,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import axios from 'axios';
import Constants from 'expo-constants';

import { StackNavigator } from "react-navigation";

export default class Exercise extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <ImageBackground source={require("../../assets/images/air-squat.png")} style={{width: '100%', height: 627}}>
            <View style={styles.navBar}>
              <View style={styles.leftContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
                  <Image source={require("../../assets/images/icon.png")} style={styles.backButton} />
                </TouchableHighlight>
              </View>
            </View>
            <View>
              <View style={styles.contentLeftContainer}>
                <Text style={styles.title}>Air Squat</Text>
              </View>
              <View style={styles.contentContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
                  <Image source={require("../../assets/images/go.png")} />
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.row}>
            <View style={styles.measurementsColIcon}>
              <Image source={require("../../assets/images/oval-green-icon.png")} />
            </View>
            <View style={styles.measurementsCol}>
              <Text style={styles.exerciseTitle}>Deadlift</Text>
              <Text style={styles.exerciseResult}>Perfect!</Text>
            </View>
            <View style={styles.measurementsCol}>
              <Text style={styles.exerciseResultDate}>15/11/2019</Text>
            </View>
          </View>
        </ScrollView>
        </SafeAreaView>
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
              <Image source={require("../../assets/images/icon-home.png")} />
            </TouchableHighlight>
          </View>
          <View style={styles.footerCol}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}>
              <Image source={require("../../assets/images/home/profile-icon.png")} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 100,
    padding: 15
  },
  measurementsColIcon: {
    width: "10%"
  },
  measurementsCol: {
    width: "45%"
  },
  exerciseTitle: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16
  },
  exerciseResult: {
    color: "#6E757D",
    fontFamily: "Roboto-Regular",
    fontSize: 16
  },
  exerciseResultDate: {
    color: "#9DA1A5",
    fontFamily: "Roboto-Regular",
    fontSize: 12.8
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 20
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  title: {
    color: "#868E97",
    fontFamily: "Roboto-Medium",
    fontSize: 25
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  mainPicture: {
    width: "98%",
    top: 20
  },
  description: {
    color: "#868E97",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 23,
    width: 220,
    top: 5
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#E9E9E9",
    fontSize: 25
  },
  contentContainer: {
    top: 485,
    right: 10,
    alignItems: "flex-end"
  },
  contentLeftContainer: {
    top: 520,
    left: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#2A2E34"
  },
  footer: {
    flexDirection: 'row',
    position: "absolute",
    height: 60,
    left: 0,
    bottom: 0,
    backgroundColor: "#2A2E34",
    elevation: 4,
    shadowColor: "rgba(35, 37, 40, 0.614729)",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  footerCol: {
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent("Exercise", () => Exercise);
