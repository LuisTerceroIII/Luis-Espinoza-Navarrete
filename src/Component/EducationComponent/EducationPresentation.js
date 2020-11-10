import './EducationPresentation.css'
import React from 'react';

export const EducationPresentation = () => {
    return (
        <div className={'education-view-main-container'}>
            <h3 className={'education-view-title'}>Education</h3>
            <ul className={'education-view-list'}>
                <li>
                    <i className="fas fa-angle-right arrow"/>
                    Universidad General Sarmiento : since 2019 <br/>
                    "Tecnicatura superior en informatica"
                </li>
                <li><i className="fas fa-angle-right arrow"/>
                   Universidad Tecnologica Nacional : 2019 <br/>
                  "Diplomatura Java"

                </li>
                <li><i className="fas fa-angle-right arrow"/>
                   Universidad de Buenos Aires : 2015 - 2018 <br/>
                    "Licenciatura en Filosofia"

                </li>
            </ul>
        </div>
    )
}