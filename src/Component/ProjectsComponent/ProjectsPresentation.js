import React from 'react';
import './ProjectsPresentation.css'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ProjectsPresentation = (props) => {
    const projects = props.projects.projects.map((project,key) => {
        return (
            <li key={key}>
                <FontAwesomeIcon icon={faAngleRight}/>
                {project[0]}
                <a className={'code-link-project-view'}
                   target={"_blank"}
                   rel="noreferrer"
                   href={project[1]}>
                    <i className="fas fa-code"/>
                </a>
            </li>
        )
    })
    return (
        <div className={'project-view-main-container'}>
            <h3 className={'project-view-title'}>{props.projects.title}</h3>
            <ul className={'project-view-list'}>
                {projects}
            </ul>
        </div>
    )
}