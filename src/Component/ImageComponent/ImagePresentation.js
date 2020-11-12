import React from 'react';
import './ImagePresentation.css'

export const ImagePresentation = (props) => {
    return (
        <div className={'image-presentation-main-container'}>
            <div className={'image-presentation-image-frame'}>
                <img src={props.source}
                     alt={"profile"}
                     className={"image-image-presentation"}
                     width={"350px"}
                />

            </div>
        </div>
    )
}

