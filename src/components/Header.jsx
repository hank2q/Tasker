import React from "react";
import Button from "./Button";

function Header({ toggleAddForm, btnText }) {
    return (
        <header className="header">
            <h1>Tasker</h1>
            <Button
                title={!btnText ? "Add" : "Close"}
                color={!btnText ? "green" : "red"}
                onClick={toggleAddForm}
            />
        </header>
    );
}

export default Header;
