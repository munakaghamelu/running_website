import { useState } from "react";
import "./milestones.scss";

export default function Milestones(){

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            title: "Anniversary",
            img: "assets/2nd_birthday.png",
            desc: "Mafia Moves 2nd birthday!"
        },
        {
            id: "2",
            title: "#HackneyMoves",
            img: "assets/2nd_birthday.png",
            desc: "Hackney 5k and Half Marathon team 2021!"
        },
        {
            id: "3",
            title: "Sports Direct Collab",
            img: "assets/2nd_birthday.png",
            desc: "#beatthequit campaign 2021"
        },
    ];

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide< data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="milestones" id="milestones">
            <div 
                className="slider" 
                style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
            >
            {data.map((d) => (
            <div className="container">
                
                <div className="header">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                </div>

                <div className="collage">
                    <img src={d.img}/>
                </div>

            </div>
        ))}
    </div>

        <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>

    </div>
    );
}