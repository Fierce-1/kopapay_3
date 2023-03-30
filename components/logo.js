import React from 'react'
import { Image } from 'react-native'

const App_icon = (props) =>{
    return(
        <Image style={props.imgStyle} source={props.img}></Image>
    )
}

export default App_icon