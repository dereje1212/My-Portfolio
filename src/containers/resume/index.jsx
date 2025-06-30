import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons for download and open
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./styles.scss";

const data = {
    experince: [
        {
            title: "Junior Programmer & System Support Administrator:",
            subtitle: "Addis Ababa",
            description: "Over the past one year, I've been dedicated to providing support for ERP systems, troubleshooting network issues, and resolving printer problems. My role involves ensuring smooth operations and addressing technical challenges to maintain an efficient work environment.",
            pdf: "/path/to/consultant-pdf.pdf", // PDF link for the experience
        },
        {
            title: "Data Encoder:",
            subtitle: "Addis Ababa",
            description: "I have two months of experience as a data encoder in store management at MIDROC, and an additional three months providing General ICT support",
            // pdf: "/path/to/senior-consultant-pdf.pdf", // PDF link for the experience
        },
        {
            title: "Public relations officer:",
            subtitle: "University of Gondar Student Union",
            description: "I have Demonstrated leadership, decision-making, and teamwork capabilities.",
            date: "15-10-2021 - 05-10-2023",

            pdf: "PDFs/PR officer.pdf", // PDF link for the experience
        },
    ],
    education: [

        {

            title: "General Primary School:",
            subtitle: "CHMBRE",
            description: "Grade 8",
            date: "07-07-2015",
            pdf: "/PDFs/8.pdf", // PDF link for education
        },

        {
            title: "General Secondary School:",
            subtitle: "Jihur",
            description: "From Grade 9-10",
            date: "02-10-2015 - 05-06-2017",
            pdf: "PDFs/10_9 and 10_merged.pdf", // PDF link for education
        },
        {
            title: "HMM Perparatory and Secondary school:",
            subtitle: "Debre Birhan",
            description: "From Grade 11th-12th",
            date: "02-10-2017 - 10-07-2019",

            pdf: "PDFs/12_11 and 12_merged.pdf", // PDF link for education
        },
        {
            title: "Higher Institution:",
            subtitle: "University of Gondar",
            description: "Bachelor's of Science in Information Systems",
            date:"02-10-2019 - 05-10-2023",

            pdf: "PDFs/Bachelor.pdf", // PDF link for education
        },
    ],
};

const Resume = () => {
    const handleDownload = (pdfPath) => {
        const link = document.createElement("a");
        link.href = pdfPath;

        // Dynamically extract the filename from the path
        const filename = pdfPath.substring(pdfPath.lastIndexOf("/") + 1);
        link.download = filename;

        link.click();
    };


    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="timeline">
                {/* EXPERIENCE Section */}
                <div className="timeline__experience">
                    <h1 className="timeline__experience__headerText">EXPERIENCE</h1>
                    <VerticalTimeline layout={"1-column"} lineColor="var(--yellow-them-main-color)">
                        {data.experince.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience_vertical__timeline__element"
                                contentStyle={{
                                    background: "none",
                                    color: "var(--yellow-them-sub-text-color)",
                                    border: "1.5px solid var(--yellow-them-main-color)"
                                }}
                               
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
                                 <h4 className="education_date">{item.date}</h4>

                                {item.title === "Public relations officer:" && (
                                    <>
                                        <div className="vertical__timeline__element__buttons__container">
                                            {/* Open PDF button with an icon and title */}
                                            <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                                                <button className="open-btn" title="Open PDF">
                                                    <FaExternalLinkAlt size={20} />
                                                </button>
                                            </a>
                                            {/* Download PDF button with an icon and title */}
                                            <button
                                                className="download-btn"
                                                title="Download PDF"
                                                onClick={() => handleDownload(item.pdf)}
                                            >
                                                <FaDownload size={20} />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {/* EDUCATION Section */}
                <div className="timeline__education">
                    <h1 className="timeline__education__headerText">EDUCATION</h1>
                    <VerticalTimeline layout={"1-column"} lineColor="var(--yellow-them-main-color)">
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__education_vertical__timeline__element"
                                contentStyle={{
                                    background: "none",
                                    color: "var(--yellow-them-sub-text-color)",
                                    border: "1.5px solid var(--yellow-them-main-color)"
                                }}
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
                                <h4 className="education_date">{item.date}</h4>
                                <div className="vertical__timeline__element__buttons__container">
                                    {item.pdf && (
                                        <>
                                            {/* Open PDF button with an icon and title */}
                                            <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                                                <button className="open-btn" title="Open PDF">
                                                    <FaExternalLinkAlt size={20} />
                                                </button>
                                            </a>

                                            {/* Download PDF button with an icon and title */}
                                            <button
                                                className="download-btn"
                                                title="Download PDF"
                                                onClick={() => handleDownload(item.pdf)}
                                            >
                                                <FaDownload size={20} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
