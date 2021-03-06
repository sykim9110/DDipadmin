import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "lock-cls-1": {
        "fill": "none",
        "stroke": "LightSalmon",
        "strokeWidth": 2,
        "strokeLinecap": "round",
        "strokeLinejoin": "round"
    },
    "lock-cls-2": {
        "fill": "none",
        "stroke": "LightSalmon",
        "strokeWidth": 2,
        "strokeMiterlimit": 10
    },
    "off-cls-1": {
        "fill": "none",
        "stroke": "#fff",
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeWidth": 3.75
    },
    "off-cls-1:hover": {
        "fill": "none",
        "stroke": "#c24d4d",
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeWidth": 3.75
    },
    "ddip-cls-1": {
        "fill": "#ffc422"
    },
    "ddip-cls-2": {
        "fill": "#fff"
    }
});