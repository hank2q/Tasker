import React from "react";

function Button({ title, color, onClick }) {
    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>
            {title}
        </button>
    );
}

// fall back on if no props where given from parent
Button.defaultProps = {
    title: "Button",
    color: "Blue",
    onClick: () => {
        console.log("Click");
    },
};
export default Button;
