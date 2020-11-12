import React from "react";
import {AboutMePresentation} from "./AboutMePresentation";

export const AboutMeContainer = (props) => {
    return (
        <AboutMePresentation aboutMe={props.aboutMe} />
    )
}