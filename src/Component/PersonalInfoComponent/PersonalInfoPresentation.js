import React from 'react';
import './PersonalInfoPresentation.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

export const PersonalInfoPresentation = () => {
    return (
        <div className={'personal-info-presentation-main-container'}>
            <h3 className={'title-personal-info-presentation'}>Luis Espinoza Navarrete <i
    className="fas fa-hand-pointer pointer"/></h3>
            <ul className={'list-personal-info-presentation'}>
                <li><FontAwesomeIcon icon={faAngleRight}/>Luis.espinoza.nav@live.com</li>
                <li><FontAwesomeIcon icon={faAngleRight}/>+54 9 11 6967 1352</li>
                <li><FontAwesomeIcon icon={faAngleRight}/>Calle Presidente Derqui #2024, La Lonja, Pilar</li>
                <li><FontAwesomeIcon icon={faAngleRight}/>Availability : Full time</li>
            </ul>
            <ul className={'list-two-personal-info-presentation'}>
                <li><i className="fab fa-github" /><a href={"https://github.com/LuisTerceroIII"} target={"_blank"}>Go to Github profile</a></li>
                <li><i className="fab fa-linkedin"/><a href={"https://www.linkedin.com/in/luis-h%C3%A9ctor-espinoza-navarrete-bbb7b3140/"} target={"_blank"}>Go to Linkedin profile</a></li>
            </ul>

        </div>
    )
}