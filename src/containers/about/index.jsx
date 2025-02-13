import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { Value } from "sass";
import "./styles.scss"
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";


const personalDtail = [
    {
        label: "Full Name:-",
        Value: "Dereje Aragaw Afework",
    },
    {
        label: "Age:-",
        Value: "25",
    },
    {
        label: "Addres:-",
        Value: "Addis Ababa, Ethiopia",
    },
    {
        label: "Email:-",
        Value: "dereje2712@gmail.com",
    },
    {
        label: "Contact No:-",
        Value: "+251934941260",
    },
]

const jobsummary = "Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail and how you can help implement design ideas for your future employer";
;

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                HeaderText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translatex(-900px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}>
                        <h1>Front End Developer</h1>
                        <p>{jobsummary}</p>
                    </Animate>

                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translatex(500px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}>
                        <h2 className="personalInformationHeaderText">
                            Personal Information</h2>
                        <ul style={{ listStyle: "none" }}>
                            {
                                personalDtail.map((item, i) => (
                                    <li key={i} >
                                        <span className="titel">{item.label}</span>
                                        <span className="value">{item.Value}</span>
                                    </li>
                                ))

                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__serviceslWrapper">
                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translatex(600px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}>
                        <div className="about__content__serviceslWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-them-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-them-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-them-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-them-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>
        </section>
    )
}
export default About;