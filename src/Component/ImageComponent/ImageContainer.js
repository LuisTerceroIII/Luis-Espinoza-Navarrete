import React from "react";
import {ImagePresentation} from "./ImagePresentation";


export const ImageContainer = (props) => {
    return (
        <ImagePresentation source={props.source}/>
    )
}