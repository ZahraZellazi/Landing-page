import React from 'react';
import './Boxes.css';
import { FaDollarSign } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

const Boxes = () => {
    return (
        <div className="boxes-container">
            <div className="box box1">
                <div className="icon-container icon-container1"><FaDollarSign className="icon"/></div> 
                <div className="box-content">
                    <h2>23M</h2>
                    <p>Total Sellers in the last 5 years</p>
                </div>
            </div>
            <div className="box box2">
                <div className="icon-container icon-container2"><IoPeopleOutline className="icon" /></div> 
                <div className="box-content">
                    <h2>15+</h2>
                    <p>We have 15 years of experience.</p>
                </div>
            </div>
            <div className="box box3">
                <div className="icon-container icon-container3"><FaHouseChimney className="icon"/></div>
                <div className="box-content">
                    <h2>200+</h2>
                    <p>Units Sold in the last 6 months.</p>
                </div>
            </div>
        </div>
    );
}

export default Boxes;
