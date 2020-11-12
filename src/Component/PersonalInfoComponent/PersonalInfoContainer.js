import {PersonalInfoPresentation} from "./PersonalInfoPresentation";
import React from "react";


export const PersonalInfoContainer = (props) => {
    return (
        <PersonalInfoPresentation info={props.info}/>
    )
}