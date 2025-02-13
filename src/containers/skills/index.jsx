import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss"


const skillsData = [
    {
        lable: "FRONT END",
        data: [
            {
                skillName: "HTML",
                Percentage: "90",
            },
            {
                skillName: "CSS",
                Percentage: "90",
            },
            {
                skillName: "JAVASCRIPT",
                Percentage: "80",
            },
            {
                skillName: "REACT JS",
                Percentage: "75",
            },
            {
                skillName: "ANGULAR",
                Percentage: "60",
            },
        ],
    },
    {
        lable: "BACK END",
        data: [
            {
                skillName: "JAVA",
                Percentage: "60"
            },
            {
                skillName: "PYTHON",
                Percentage: "65"
            },
            {
                skillName: "C#",
                Percentage: "70"
            },
            {
                skillName: "DIJANGO",
                Percentage: "80"
            },
            {
                skillName: "KOTLIN",
                Percentage: "50"
            },
        ]
    },
    {
        lable: "DATABASES",
        data: [
            {
                skillName: "MYSQL",
                Percentage: "90"
            },
            {
                skillName: "MANGODB",
                Percentage: "70"
            },
            {
                skillName: "ORACLE",
                Percentage: "50"
            },
            {
                skillName: "REDIS",
                Percentage: "50"
            },
        ]
    }

]






const skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                HeaderText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills__content__wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills__content__wrapper_innerContent">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: "translatex(-200px)"
                                }}
                                end={{
                                    transform: "translatex(0px)"
                                }}
                            >
                                <h1 className="skills__content__wrapper_innerContent__catagoryText">
                                    {item.lable}
                                </h1>
                                <div>
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity : 1", "opacity :0"]}
                                                iterationCount={1}
                                            >
                                                <div className="prograssbar" key={j}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.Percentage}
                                                        strokeWidth="2"
                                                        strokeColor="var(--yellow-them-main-color)"
                                                        tailWidth="2"
                                                        strokeLinecap="squre"
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>

                            </Animate>

                        </div>
                    ))
                }

            </div>
        </section>
    )
}
export default skills;