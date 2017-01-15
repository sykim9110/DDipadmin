import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Nanum Gothic'"
    },
    "table": {
        "fontFamily": "'Nanum Gothic'"
    },
    "div": {
        "fontFamily": "'Nanum Gothic'"
    },
    "p": {
        "fontFamily": "'Nanum Gothic'"
    },
    "button": {
        "fontFamily": "'Nanum Gothic'"
    },
    "input": {
        "fontFamily": "'Nanum Gothic'"
    }
});