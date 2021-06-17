import React from 'react';
import '../css/LanguageCard.css';
export default function LanguageCard(properties) {
    const props = properties.props
    const gradients = [
        {
            "--hsl0": "82, 81%, 52%",
            "--hsl1": "104, 56%, 51%",
            "--idx": "0"
        },
        {
            "--hsl0": "49, 100%, 54%",
            "--hsl1": "33, 96%, 50%",
            "--idx": "1"
        }, {
            "--hsl0": "169, 50%, 44%",
            "--hsl1": "191, 99%, 27%",
            "--idx": "2"
        },
    ]

    return (
        <div className='langcard clickable'
            data-icon={props.dataIcon}
            style={gradients[props.id]}
            onClick={properties.onClick}>
            <h3>{props.lang}</h3>
            <h4>{props.brandText}</h4>
            <p>{props.commentText}</p>
        </div>
    );
}
