
import React, { useState } from 'react';
import './Text.css';

const Text = () => {
    const [isCentered, setIsCentered] = useState(false);

    const handleClick = () => {
        setIsCentered(!isCentered);
    };

    return (
        <div 
            className={`text-container ${isCentered ? 'centered' : ''}`} 
            onClick={handleClick}
        >
             <h1 className="responsive-title">THE PERFECT <br />DREAM HOUSE</h1>
            <p className="responsive-paragraph">We build modern and smart homes for the next generation. <br /> Our smart homes can be controlled via mobile apps.</p>
        </div>
    );
}

export default Text;
