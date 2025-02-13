import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";



const Home = () => {
    const navigate = useNavigate();
    const handleNavigateToContactPage = () => {
        navigate('/Contact');
    }
    return (
        <section id="home" className="home">

                <div className="home__text_wrapper">
                <Animate play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translatex(900px)" 
                }}
                end={{
                    transform: "translatex(0px)"
                }}>
                    <h1>
                        Hello, I'm Dereje
                        <br />
                        Front End Developer
                    </h1>
                    </Animate>
                </div>
            
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translatey(550px)"
                }}
                end={{
                    transform: "translatex(0px)"
                }}
            >
                <div className="home__contact__me">
                    <button onClick={handleNavigateToContactPage}>Hire Me</button>

                </div>
            </Animate>
        </section>
    )
}
export default Home;