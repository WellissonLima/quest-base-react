import React from "react";
import './styledParagraph.css'

const StyledParagraph = ({text, color}) => {
    const paragraphStyle = {
        textTransform: 'uppercase', color: color,
    }

    return <p className="paragraph" style={paragraphStyle}>{text}</p>
};

StyledParagraph.defaultProps = {
    color: 'lightcoral'
}

export default StyledParagraph;