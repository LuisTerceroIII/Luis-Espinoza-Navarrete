import React from 'react';
import './PositionPresentation.css';

export const PositionPresentation = (props) => {
    return (
        <h1 className={'title-position-presentation'}>{props.position}</h1>
    )
}