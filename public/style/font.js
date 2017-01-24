import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "@CHARSET \"UTF-8\";@font-face": {
        "fontFamily": "'NanumSquareR'",
        "src": "url(../font/NanumSquareB.ttf) format('truetype')"
    },
    "*": {
        "fontFamily": "'NanumSquareR'"
    }
});