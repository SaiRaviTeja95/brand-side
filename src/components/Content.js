import React from "react";
import image from "../img/data/circle.png"
import register from "../img/data/register.png"
import management from "../img/data/team-management.png"
import support from "../img/data/technical-support.png"

function Content() {
    return (
        <div className="content">
            <p className="works">How it Works!</p><br /><br />
            <hr />
            <div className="sect">
                <img src={image} alt=""/>
                <img className="register" src={register} alt=""/>
                <p className="subscribe">Sign up for campaigns or subscribe:</p>
                <p className="campaigns">You can choose to work with us on individual campaigns or do it by yourself through our tech-enabled platform. </p>
            </div>
            <div className="sect">
                <img src={image} alt=""/>
                <img className="register" src={management} alt=""/>
                <p className="subscribe">Workflow management</p>
                <p className="campaigns">Search for the most suited influencers, design the deliverables and manage their performance  by fine tuning it according to your needs!</p>
            </div>
            <div className="sect">
                <img src={image} alt=""/>
                <img className="register" src={support} alt=""/>
                <p className="subscribe">Products/ Services</p>
                <p className="campaigns">Buy expert services from influencers or join hands with an influencer to develop products that they’ll sell at our store!</p>
            </div>
        </div>
    );
}


export default Content;