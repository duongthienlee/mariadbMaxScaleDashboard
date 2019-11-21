import Color from 'color'

export function isLightColor(color) {
    let colorObjHandle = Color(color).alpha(1)
    return colorObjHandle.isLight() ? true : false
}
export function generateBgAndTextColor(color) {
    let colorObjHandle = Color(color).alpha(1)
    let textColor, bgColor, colorObj;
    if (colorObjHandle.isLight()) {
        textColor = colorObjHandle.mix(Color("white")).hsl().string();
        bgColor = colorObjHandle.mix(Color("black")).hsl().string();
    }
    else {
        textColor = "white"
        bgColor = colorObjHandle.mix(Color("white")).hsl().string()
    }
    colorObj = { textColor: textColor, bgColor: bgColor }
    return colorObj
}