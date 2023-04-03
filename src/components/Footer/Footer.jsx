import React from "react";
import "./Footer.css";
import video1 from "../../Assests/video1.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md"
import { AiOutlineTwitter} from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai";

import {AiFillInstagram} from "react-icons/ai"


const Footer = () => (
    <section className="footer">
        <div className="videoDiv">
            <video src={video1} loop autoPlay muted type="video/mp4"></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text">
                    <small> KEEP IN TOUCH</small>
                    <h2> Travel with us</h2>
                </div>
                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter a Email Address" />
                    <button className="btn flex" type="submit">
                        SEND <FiSend className="icon" />
                    </button>
                </div>
            </div>
            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon" />
                            Travel
                        </a>
                    </div>
                    <div className="footerParagragh">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book

                    </div>
                    <div className="footerSocials">
                        <AiOutlineTwitter className="icon" />
                        <AiFillFacebook className="icon" />
                        <AiFillInstagram className="icon" />


                    </div>
                </div>
                <div className="footerLinks grid">
                    {/* group one*/}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Services
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Tourism
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                        </li>
                    </div>
                    {/* group two*/}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR Partners
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Bookings
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            RentCars
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            HOstelWorld
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Trivago
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                        </li>
                    </div>
                    {/* group three*/}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            Last Minute
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            London
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            California
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            indonesia
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Europe
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Oceania
                        </li>
                    </div>

                </div>
                <div className="footerDiv flex">
                    <small> Best Travel Website </small>
                    <small> Copyrigts Reserved -Aman kumar 2023</small>
                </div>
            </div>
        </div>
    </section>
);

export default Footer;
