import React from 'react';
import './SoftSkillsPresentation.css';

export const SoftSkillsPresentation = () => {
    return (
        <div className={'skills-view-container'}>
            <h3 className={'view-title'}>Skills and Technologies</h3>
            <div>
                <ul className={'view-list'}>
                    <li><i className="fas fa-angle-right arrow"/>Object oriented programming</li>
                    <li><i className="fas fa-angle-right arrow"/>REST principles</li>
                    <li><i className="fas fa-angle-right arrow"/>AWS</li>
                </ul>
            </div>
        </div>
    )
}