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
        "border": "8px solid black",
        "borderRightColor": "transparent",
        "borderRadius": "50%",
        "display": "inline-block",
        "position": "absolute",
        "top": "50%",
        "right": 0,
        "bottom": 0,
        "left": "50%"
    },
    "body": {
        "background": "#774CFF"
    }
});