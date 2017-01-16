import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container-fluid": {
        "height": 1080
    },
    "SY-header": {
        "height": "auto",
        "backgroundColor": "black"
    },
    "SY-sidebar": {
        "paddingTop": 30,
        "background": "#F8F8F8"
    },
    "SY-content": {
        "paddingTop": 30,
        "paddingBottom": 30,
        "paddingLeft": "5%",
        "height": "auto"
    },
    "SY-footer": {
        "height": 500,
        "backgroundColor": "#F8F8F8"
    },
    "SY-header-button": {
        "marginLeft": "auto"
    },
    "nav-link": {
        "color": "black"
    },
    "nav-link:hover": {
        "color": "gray"
    }
});