import './EducationPresentation.css'
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

export const EducationPresentation = () => {
    return (
        <div className={'education-view-main-container'}>
            <h3 className={'education-view-title'}>Education</h3>
            <ul className={'education-view-list'}>
                <li>
                    <FontAwesomeIcon icon={faAngleRight}/>
                    Universidad General Sarmiento : since 2019 <br/>
                    "Tecnicatura superior en informatica"
                </li>
                <li><FontAwesomeIcon icon={faAngleRight}/>
                   Universidad Tecnologica Nacional : 2019 <br/>
                  "Diplomatura Java"

                </li>
                <li><FontAwesomeIcon icon={faAngleRight}/>
                   Universidad de Buenos Aires : 2015 - 2018 <br/>
                    "Licenciatura en Filosofia"

                </li>
            </ul>
        </div>
    )
}