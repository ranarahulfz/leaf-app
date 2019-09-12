import React from 'react'
import './Flower.css'
import FlowerPotRight from '../../assets/images/flower_images/plant (1).svg'
import Sunflower from '../../assets/images/flower_images/sunflower.svg'
import FlowerPotLeft from '../../assets/images/flower_images/plant.svg'

function Flower () {
    return (
        <div className="Flowers-container">
            <section className="flowers-01">
                <div className="title-container">
                    <h1 className="title center dark-text large-title">
                        Flowers That Make Great Beauty Ingredients
                    </h1>    
                </div>
                <div className="flowers-artboard-01">
                    <img className="pot" src={FlowerPotRight} alt="flower"/>
                    <img className="sun-flower" src={Sunflower} alt="flower"/>
                    <img className="pot" src={FlowerPotLeft} alt="flower"/>
                </div>
            </section>
            <section>
                <div className="fruit-vine"/>
                <div className="flower-pot"/>
            </section>  
        </div>   
    );
}

export default Flower;