import React from "react";
import "./styles.scss";


const PageHeaderContent = (props) => {
    const { HeaderText, icon } = props;
    return (
        <div className="wraper">
            <h1>{HeaderText}</h1>
            <span>{icon}</span>

        </div>
    )
}
export default PageHeaderContent;