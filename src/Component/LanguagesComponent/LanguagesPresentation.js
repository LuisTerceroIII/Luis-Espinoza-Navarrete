import React from 'react';
import './LanguagesPresentation.css'

export const LanguagesPresentation = () => {
    return(
        <div className={'languages-view-container'}>
            <h3 className={'view-title'}>Languages</h3>
            <ul className={'view-list'}>
                <li><i className="fas fa-angle-right arrow"/>Spanish - Native</li>
                <li><i className="fas fa-angle-right arrow"/>English - Intermediate</li>
            </ul>
        </div>
    )
}