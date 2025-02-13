import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi"
import { Link } from 'react-router-dom';
import images from "../images/image1.jpg";

import "./styles.scss";


const data = [
    {
        lable: 'Home',
        to: '/'
    },
    {
        lable: 'About Me',
        to: '/about'
    },
    {
        lable: 'Skills',
        to: '/skills'
    },
    {
        lable: 'Resume',
        to: '/resume'
    },
    {
        lable: 'Portfolio',
        to: '/portfolio'
    },
    {
        lable: 'Contact',
        to: '/contact'
    },



];
const Navbar = () => {
    const [toggleIcon, setToggelIcon] = useState(false);
    const handelToggelIcon = () => {
        setToggelIcon(!toggleIcon)
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__containers">
                    <Link to={"/"} className="navbar__containers__logo">
                        {/* <FaReact size={50} /> */}
                       
                            <img src={images} alt="Dummy Data Data" width="120%" height={150}  />
                       

                    </Link>
                </div>
                <ul   className={`navbar__containers__menu ${toggleIcon ? "active" : ""} `}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__containers__menu__item">
                                <Link className="navbar__containers__menu__item__links" to={item.to}>
                                    {item.lable}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <div className="nav__icon" onClick={handelToggelIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>

        </div>
    );


};
export default Navbar;