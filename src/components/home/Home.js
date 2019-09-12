import React from 'react'
import './Home.css'
import Flower from '../../assets/images/flower.svg'
import Rose from '../../assets/images/flower_images/rose.svg'
import Sakura from '../../assets/images/flower_images/sakura.svg'
import FlowerBouquet from '../../assets/images/flower_images/flower-bouquet.svg'
import Herbs from '../../assets/images/flower_images/herbs.svg'
import DeveloperPic from '../../assets/images/developer/varun-mee.jpg'

function Home () {
    return (
        <div className="home-container">
            <section className="artboard-01">
                    <img className="tree-background" src={Flower} alt="artboard"></img>
                    <div className="">
                        <h1 className="title center light-text large-title">#HappyHealthyFlowers</h1>
                        <h3 className="subtitle center light-text large-subtitle">Happiness radiates like the fragrance from a flower and draws 
                        all good things towards you.</h3>
                    </div>
            </section>
            <section>
                <div className="cactus"/>
                <div className="greenleaf-l-border"/>
            </section>  
            <section className="artboard-02">
                <div className="container">
                <div className="head">
                    <h1 className="title dark-text large-title">The Earth Laughs In Flower</h1>
                    <h3 className="subtitle light-dark-text">Some of myriad benefits that you can expect from the simple act of adding flowers to your home.</h3>
                </div>
                <div className="rose-card">
                <h4 className="top-text">Benefit 1</h4>
                        <div className="card-image">
                            <img src={Rose}/>
                        </div>
                        <h2 className="card-title">Reduce Stress</h2>
                        <p className="card-subtitle">flowers were found to have the most stress-relieving impact.</p>
                </div>
                <div className="rose-card">
                <h4 className="top-text">Benefit 2</h4>
                        <div className="card-image">
                        <img src={Rose}/>
                        </div>
                        <h2 className="card-title">Boost Memory</h2>
                        <p className="card-subtitle">Flowers needed to unlock the mechanism in our brain.</p>
                </div>
                <div className="rose-card">
                <h4 className="top-text">Benefit 3</h4>
                        <div className="card-image">
                        <img src={Rose}/>
                        </div>
                        <h2 className="card-title">Helps in Sleep</h2>
                        <p className="card-subtitle">Lavender has long been believed to be a great, natural aid to sleep.</p>
                </div>
                </div>
            </section>
            <section>
                <div className="greenleaf-r-border"/>
                <div className="cactus"/>
            </section>  
            <section className="artboard-03">
                <div className="container-03">
                    <div>
                        <h1 className="title light-text large-title">Edible flowers</h1>
                        <h2 className="subtitle light-text large-subtitle">Not all flowers are safe to eat, but those that are can offer a unique burst of flavor and color to many dishes, including salads, sauces, beverages and entrées. Some of them may even offer health benefits.</h2>
                    </div>
                </div>
            </section>
            <section>
                <div className="cactus"/>
                <div className="greenleaf-l-border"/>
            </section>  
            <section className="section-04">
                <div className="container-04">
                    <div className="subcontainer">
                        <div>
                            <img className="artboard-04" src={Sakura}/>
                        </div>    
                        <div>
                            <h1 className="title dark-text medium-title">Fragrant Flowers</h1>
                            <h2 className="subtitle light-dark-text medium-subtitle">Classic rose, calming lavender, intoxicating gardenia and delicate peony, the florist is a haven of natural perfumes.</h2>
                        </div>
                    </div>
                    <div className="subcontainer">
                        <div>
                            <h1 className="title dark-text medium-title">Decoration Flowers</h1>
                            <h2 className="subtitle light-dark-text medium-subtitle">People plant them in gardens or arrange them in fresh flower bouquets to enjoy the beauty and fragrance of living blooms.</h2>
                        </div>
                        <div>
                            <img className="artboard-04" src={FlowerBouquet}/>
                        </div>    
                    </div>
                    <div className="subcontainer">
                        <div>
                            <img className="artboard-04" src={Herbs}/>
                        </div>    
                        <div>
                            <h1 className="title dark-text medium-title">Medicine Flowers</h1>
                            <h2 className="subtitle light-dark-text medium-subtitle">Many flowers and other plant parts have purported medicinal properties, which have been used since ancient times.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="greenleaf-r-border"/>
                <div className="cactus"/>
            </section>  
            <section className="section-05">
                <div>
                    <h2 class="section-05-quote medium-title">
                        When you take a flower in your hand and really look at it, 
                        it's your world for the moment. I want to give that world
                        to someone else. Most people in the city around so, they 
                        have no time to look at a flower. I want them to see it whether they want or not.
                    </h2>
                    <h3 class="section-05-author medium-subtitle"> - Georgia O'Keeffe</h3>
                </div>
            </section>
            <section>
                <div className="cactus"/>
                <div className="greenleaf-l-border"/>
            </section>  
            <section className="section-06">
                <div className="section-06-head">
                    <h1 className="title center dark-text large-title">Developer</h1>
                </div>
                <div className="subcontainer">
                    <div className="developer-container">
                        <img className="developer-image" src={DeveloperPic}/>
                    </div>
                    <div className="developer-details">
                        <h1 class="developer-name">Varun Rana</h1>
                        <h2 class="developer-designation">developer</h2>
                    </div>
                </div>    
            </section>
            <section>
                <div className="greenleaf-r-border"/>
                <div className="cactus"/>
            </section>        
        </div>
    );
}

export default Home;