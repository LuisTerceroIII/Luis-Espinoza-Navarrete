import {EducationPresentation} from "./EducationPresentation";
import React from "react";


export const EducationContainer = (props) => {
    return (
        <EducationPresentation education={props.education} />
    )
}