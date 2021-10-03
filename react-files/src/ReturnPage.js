import React from 'react';
import { ButtonGrey, ButtonWhite } from './Components/Button.style';
import './Components/Body.style.css';

function dropDown(){
    console.log("clicked on button");
}

export default function ReturnPage() {
    return (
        <div>
            <header>
                <h1>SNOB MANAGEMENT</h1>
            </header>
            <div><img src ="http://placeimg.com/640/480/nature" alt="random pic" width="500" height="600" class="center-image"/></div>
                <h2>managment made SNOBby</h2> 
            <div>
                <div><ButtonWhite onClick={dropDown}>Budgeting and Cost Info</ButtonWhite></div>
                <div><ButtonGrey onClick={dropDown}>Submitted Time Cards</ButtonGrey></div>
                <div><ButtonWhite onClick={dropDown}>Time Card Reviews</ButtonWhite></div>
                <div><ButtonGrey onClick={dropDown}>Job Site Pictures</ButtonGrey></div>
            </div>
        </div>
    )
}