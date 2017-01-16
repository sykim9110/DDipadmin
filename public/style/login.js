import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "login-page": {
        "width": 360,
        "paddingTop": "15%",
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "form": {
        "position": "relative",
        "zIndex": 1,
        "background": "#FFFFFF",
        "maxWidth": 360,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto",
        "paddingTop": 45,
        "paddingRight": 45,
        "paddingBottom": 45,
        "paddingLeft": 45,
        "textAlign": "center",
        "boxShadow": "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
    },
    "form input": {
        "outline": 0,
        "background": "#f2f2f2",
        "width": "100%",
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "boxSizing": "border-box",
        "fontSize": 14
    },
    "form button": {
        "textTransform": "uppercase",
        "outline": 0,
        "background": "black",
        "width": "100%",
        "border": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "color": "#FFFFFF",
        "fontSize": 14,
        "WebkitTransition": "all 0.3 ease",
        "transition": "all 0.3 ease",
        "cursor": "pointer"
    },
    "form button:hover": {
        "background": "#4c4b4b"
    },
    "form button:active": {
        "background": "#4c4b4b"
    },
    "form button:focus": {
        "background": "#4c4b4b"
    }
});