import React from 'react';
import './AboutMePresentation.css'

export const AboutMePresentation = (props) => {
    return(
        <div className={'about-me-presentation-main-container'}>
            <h3 className={'title-about-me-presentation'}>{props.aboutMe.title}</h3>
            <p className={'paragraph-about-me-presentation'}>
                {props.aboutMe.message}
            </p>
        </div>
    )
}