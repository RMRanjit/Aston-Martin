import { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Slider from "@react-native-community/slider";

//TODO: Externalize Styles

export function Variables(props) {
  const [variable, setVariable] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        width: 375,
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "#FFF056",
          fontFamily: "Optima",
          fontSize: 16,
        }}
      >
        {props.Name} - {variable}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#FFF056",
            fontFamily: "Optima",
            fontSize: 12,
          }}
        >
          {props.minValueText}
        </Text>
        <Slider
          //style={{ width: 250, height: 40, transform: [{ scaleY: 3 }] }}
          style={{ width: 250, height: 60 }}
          minimumTrackTintColor="#FFF056"
          maximumTrackTintColor="#000000"
          maximumValue={props.maxValue}
          minimumValue={props.minValue}
          step={props.step}
          thumbImage={require("../../../../assets/wheel.png")}
          trackStyle={{ height: 100 }}
          onValueChange={(value) => {
            setVariable(value);
          }}
        ></Slider>
        <Text
          style={{
            color: "#FFF056",
            fontFamily: "Optima",
            fontSize: 12,
          }}
        >
          {props.maxValueText}
        </Text>
      </View>
    </View>
  );
}
