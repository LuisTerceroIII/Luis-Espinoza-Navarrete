import './EducationPresentation.css'
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

export const EducationPresentation = (props) => {

    const education = props.education.education.map((education,key) => {
        return (
            <li>
                <FontAwesomeIcon icon={faAngleRight}/>
                {education[0]}<br/>
                <span className={"university-name-education-view"}>"{education[1]}"</span>
            </li>
        )
    })
    return (
        <div className={'education-view-main-container'}>
            <h3 className={'education-view-title'}>Education</h3>
            <ul className={'education-view-list'}>
                {education}
            </ul>
        </div>
    )
}