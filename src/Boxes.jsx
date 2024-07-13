import React from 'react';
import './Boxes.css';
import { FaDollarSign } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";


const Boxes = () => {
    return (
        <div className="boxes-container">
            <div className="box1">
                <div className="icon-container"><FaDollarSign /></div> {/* Replace with your actual icon */}
                <div>
                    <h2>15+</h2>
                    <p>We have 15 years of experience</p>
                </div>
            </div>
            <div className="box2">
                <div className="icon-container"><IoPeopleOutline /></div> {/* Replace with your actual icon */}
                <div>
                    <h2>Box Title 2</h2>
                    <p>Some text for box 2.</p>
                </div>
            </div>
            <div className="box3">
                <div className="icon-container"><FaHouseChimney /></div> {/* Replace with your actual icon */}
                <div>
                    <h2>Box Title 3</h2>
                    <p>Some text for box 3.</p>
                </div>
            </div>
        </div>
    );
}

export default Boxes;
