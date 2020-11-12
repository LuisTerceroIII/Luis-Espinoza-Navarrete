import React from 'react';
import './PersonalInfoPresentation.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

export const PersonalInfoPresentation = (props) => {
    return (
        <div className={'personal-info-presentation-main-container'}>
            <h3 className={'title-personal-info-presentation'}>{props.info.title}<i
    className="fas fa-hand-pointer pointer"/></h3>
            <ul className={'list-personal-info-presentation'}>
                <li><FontAwesomeIcon icon={faAngleRight}/>{props.info.email}</li>
                <li><FontAwesomeIcon icon={faAngleRight}/>{props.info.phone}</li>
                <li><FontAwesomeIcon icon={faAngleRight}/>{props.info.address}</li>
                <li><FontAwesomeIcon icon={faAngleRight}/>Availability : {props.info.availability}</li>
            </ul>
            <ul className={'list-two-personal-info-presentation'}>
                <li><i className="fab fa-github" /><a href={props.info.githubPage} target={"_blank"} rel="noreferrer">Go to Github profile</a></li>
                <li><i className="fab fa-linkedin"/><a href={props.info.linkedinPage} target={"_blank"} rel="noreferrer">Go to Linkedin profile</a></li>
            </ul>

        </div>
    )
}