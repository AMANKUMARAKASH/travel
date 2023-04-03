import React from "react";
import "./Main.css";
import img from '../../Assests/img.jpg'
import img1 from '../../Assests/img2.jpg'
import img2 from '../../Assests/img3.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
// array
const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },

    {
        id: 2,
        imgsrc: img1,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 3,
        imgsrc: img2,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 4,
        imgsrc: img,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 5,
        imgsrc: img1,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 6,
        imgsrc: img2,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 7,
        imgsrc: img,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 8,
        imgsrc: img1,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
    {
        id: 9,
        imgsrc: img2,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "the eptiome of romance ,Bora Bora is one of the best tarvel destination in the world. this palce known for its luxurios stays and adventurous activities",
    },
]

const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">Most Visted Destinations</h3>
            </div>

            <div className="secContent grid">
                {/* so guys, here we  are going to use high order array mthod
        . to do that we shall use a list of ibjects i one array. I'm going to craete  an array named data and from that we shall
        .map() array to fetch each destination at once. */}
                {
                    Data.map(({ id, imgsrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className=" imageDiv">
                                    <img src={imgsrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className=" destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small> +1</small></span>

                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                    <p> {description}</p>

                                    </div>
                                    <button className=" btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"></HiOutlineClipboardCheck>
                                    </button>



                                </div>


                            </div>


                        )

                    })
                }

            </div>
        </section>
    );
};

export default Main;
