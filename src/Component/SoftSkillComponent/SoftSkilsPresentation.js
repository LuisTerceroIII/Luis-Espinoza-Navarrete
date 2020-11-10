import React from 'react';
import './SoftSkillsPresentation.css';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SoftSkillsPresentation = () => {
    return (
        <div className={'skills-view-container'}>
            <h3 className={'view-title'}>Skills and Technologies</h3>
            <div>
                <ul className={'view-list'}>
                    <li><FontAwesomeIcon icon={faAngleRight}/>Object oriented programming</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/>REST principles</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/>AWS</li>
                </ul>
            </div>
        </div>
    )
}