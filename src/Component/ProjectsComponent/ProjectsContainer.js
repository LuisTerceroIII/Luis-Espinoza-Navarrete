import {ProjectsPresentation} from "./ProjectsPresentation";
import React from "react";


export const ProjectsContainer = (props) => {
    return (
        <ProjectsPresentation projects={props.projects} />
    )
}