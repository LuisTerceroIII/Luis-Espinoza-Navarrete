import React from 'react';
import './ImagePresentation.css'

export const ImagePresentation = () => {
    return (
        <div className={'image-presentation-main-container'}>
            <div className={'image-presentation-image-frame'}>
                <img src={"https://i.ibb.co/cQ8jHcZ/Luis-Espinoza-Navarrete.png"}
                     alt={"Image-profile"}
                     className={"image-image-presentation"}
                     width={"350px"}
                />

            </div>
        </div>
    )
}

