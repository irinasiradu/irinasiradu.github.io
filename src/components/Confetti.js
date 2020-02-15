import React from 'react';
import Confetti from 'react-dom-confetti';

const CustomConfetti = (props) => {
    const config = {
        angle: 45,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        dragFriction: 0.1,
        duration: 3000,
        stagger: 0,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return <Confetti active={props.active} config={config} />;
}

export default CustomConfetti;