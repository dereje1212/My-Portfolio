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

const jobsummary = "With one year of hands-on experience as a Front End Developer, I have honed my ability to seamlessly blend design and programming to create engaging user experiences. Passionate about aesthetics and UI design, I focus on efficient website development, proactive feature optimization, and effective debugging. I am committed to providing a thorough and professional approach to my work, utilizing UX and UI concepts to follow design guidelines and ensure attention to detail. My goal is to help implement design ideas and deliver immersive user experiences for future employers.";

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
<h2 style={{ textAlign: 'center',padding:'0 0 11px 0', fontFamily: 'Arial, sans-serif', fontSize:"20px", color: 'var(--yellow-them-main-color)' }}>Personal Information</h2>
<ul style={{ listStyle: "none", padding: '0', margin: '0' }}>
    {
        personalDtail.map((item, i) => (
            <li key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 15px',
                borderBottom: '2px solid color: green',  // Transparent base border for spacing
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box',
                boxShadow: '0 4px 6px rgba(40, 201, 245, 0.1)', // Soft shadow for depth
                transition: 'background-color 0.3s ease',
            }} 
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--yellow-theme-backgroud-collor)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                <span style={{
                    fontWeight: 'bold',
                    fontSize: '17px',
                    color: 'var(--yellow-them-sub-text-color)',
                    textTransform: 'capitalize',
                }}>{item.label}</span>
                <span style={{
                    fontSize: '16px',
                    color: 'var(--yellow-them-sub-text-color)',
                    fontStyle: 'italic',
                }}>{item.Value}</span>
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