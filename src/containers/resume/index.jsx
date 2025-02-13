import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const data = {
    experince: [
        {
            title: "Consultant",
            subtitle: "Addis Ababa",
            description: "Use experience to create web design",
        },
        {
            title: "Senior Consultant",
            subtitle: "Addis Ababa",
            description: "Use experience to create web design",
        },
        {
            title: "Project Management",
            subtitle: "Addis Ababa",
            description: "Create direction, lead team...",
        },
    ],
    education: [
        {
            title: "Secondary School",
            subtitle: "Jihur",
            description: "From Grade 9-10",
        },
        {
            title: "Higher Secondary",
            subtitle: "Debre Birhan Hailemariam Mamo Secondary School",
            description: "From Grade 11th-12th",
        },
        {
            title: "Higher Institution",
            subtitle: "University of Gondar",
            description: "From 2019 to 2023, degree in Information Systems",
        },
    ],
};

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="timeline">
                <div className="timeline__experience">
                    <h1 className="timeline__experience__headerText">EXPERIENCE</h1>
                    <VerticalTimeline
                        layout={"1-column"}
                        lineColor="var(--yellow-them-main-color)"
                    >
                        {data.experince.map((item, i) => (
                            <VerticalTimelineElement
                                key={i} // You can replace 'i' with a unique identifier if available
                                className="timeline__experience_vertical__timeline__element"
                                contentStyle={{
                                    background: "none",
                                    color: "var(--yellow-them-sub-text-color)",
                                    border: "1.5px solid var(--yellow-them-main-color)"
                                }}
                                date="2019 - Present"
                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: "var(--yellow-them-main-color)",
                                }}
                            >
                                <div className="vertical__timeline__element__title-wrapper">
                                    <h2>{item.title}</h2>
                                    <h3>{item.subtitle}</h3>
                                </div>
                                <p>{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h1 className="timeline__education__headerText">EDUCATION</h1>
                    <VerticalTimeline
                        layout={"1-column"}
                        lineColor="var(--yellow-them-main-color)"
                    >
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i} // You can replace 'i' with a unique identifier if available
                                className="timeline__education_vertical__timeline__element"
                                contentStyle={{
                                    background: "none",
                                    color: "var(--yellow-them-sub-text-color)",
                                    border: "1.5px solid var(--yellow-them-main-color)"
                                }}
                                date="2019 - Present"
                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: "var(--yellow-them-main-color)",
                                }}
                            >
                                <div className="vertical__timeline__element__title-wrapper">
                                    <h2>{item.title}</h2>
                                    <h3>{item.subtitle}</h3>
                                </div>
                                <p>{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
