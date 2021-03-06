import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "loading-spinner": {
        "WebkitAnimationDuration": "0.75s",
        "MozAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationIterationCount": "infinite",
        "MozAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationName": "rotate-forever",
        "MozAnimationName": "rotate-forever",
        "animationName": "rotate-forever",
        "WebkitAnimationTimingFunction": "linear",
        "MozAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "height": 60,
        "width": 60,
        "border": "8px solid LightSalmon",
        "borderRightColor": "transparent",
        "borderRadius": "50%",
        "display": "inline-block",
        "position": "relative",
        "top": "-50%",
        "left": "-50%"
    },
    "loading-spinner-container": {
        "position": "absolute",
        "top": "50%",
        "left": "50%"
    }
});