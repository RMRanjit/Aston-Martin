import { useState } from "react";

import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Text, Button } from "react-native-paper";
import { Driver } from "../../Driver/components/Driver.component";
import { Variables } from "./Variables.component";
//import { withNavigation } from "react-navigation";

//TODO: Externalize Styles

export function Configuration({ navigation }) {
  const [driver, setDriver] = useState("");
  const [tire, setTire] = useState(0);
  const [pitStrategy, setpitStrategy] = useState(0);
  const [pitCount, setPitCount] = useState(0);

  console.log("navigation " + navigation);

  // //TODO: Not the right method, pass as params to manage this. Quick and dirty progress at ths point
  // const onPress1 = () => setDriver("Sebastian Vettel");
  // const onPress2 = () => setDriver("Lance Stroll");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#175851",
      }}
    >
      <Image
        source={require("../../../../assets/App.png")}
        style={{ width: 150, height: 150, resizeMode: "cover" }}
      />
      <Text
        style={{
          color: "#FFF056",
          fontFamily: "Optima",
          fontSize: 14,
        }}
      >
        Choose your Driver
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#175851",
        }}
      >
        <TouchableOpacity onPress={() => setDriver("Sebastian Vettel")}>
          <Driver
            size={100}
            file={require("../../../../assets/SebastianVettel.jpeg")}
            DriverName="Sebastian Vettel"
            selected={driver === "Sebastian Vettel"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDriver("Lance Stroll")}>
          <Driver
            size={100}
            DriverName="Lance Stroll"
            selected={driver === "Lance Stroll"}
            file={require("../../../../assets/SirLancelot.png")}
          />
        </TouchableOpacity>
      </View>
      <Variables
        Name="Tire"
        step={1}
        minValue={0}
        maxValue={5}
        minValueText="Soft"
        maxValueText="Hard"
        onValueChange={(value) => {
          setTire(value);
        }}
      />
      <Variables
        Name="Pit Strategy"
        step={1}
        minValue={0}
        maxValue={3}
        minValueText="UnderCut"
        maxValueText="Overcut"
        onValueChange={(value) => {
          setpitStrategy(value);
        }}
      />
      <Variables
        Name="Number of Pits"
        step={1}
        minValue={0}
        maxValue={3}
        minValueText="1"
        maxValueText="3"
        onValueChange={(value) => {
          setPitCount(value);
        }}
      />

      <View
        style={{
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "stretch",
          justifyContent: "center",
          color: "ffffff",
        }}
      >
        {/* <TouchableOpacity
          onPress={() => {
            //Is the Driver Selected???
            console.log("Driver is " + driver);

            driver === ""
              ? Alert.alert("Select a driver please!")
              : navigation.navigate("ConfigurationConfirmation", {
                  driver: driver,
                  tire: tire,
                  pitStrategy: pitStrategy,
                  pitCount: pitCount,
                });
            //Alert.prompt("Nft Saved!");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFF056",
              fontFamily: "Optima",
              fontSize: 20,
              width: 375,
              height: 10,

              borderColor: "#FFF056",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center", //Centered vertically
              flex: 0.5,
            }}
          >
            GO!
          </Text>
        </TouchableOpacity> */}

        <Button
          mode="contained"
          //labelStyle={{ fontSize: 18 }}
          color="#FFF056"
          contentStyle={{ height: 44 }}
          style={{ borderRadius: 10, width: 320 }}
          onPress={() => {
            //Is the Driver Selected???
            console.log("Driver is " + driver);

            driver === ""
              ? Alert.alert("Select a driver please!")
              : navigation.navigate("ConfigurationConfirmation", {
                  driver: driver,
                  tire: tire,
                  pitStrategy: pitStrategy,
                  pitCount: pitCount,
                });
          }}
        >
          Go!
        </Button>
      </View>
    </View>
  );
}
