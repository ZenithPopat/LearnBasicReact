import React from "react";

function Message(props) {
    return (
        <div>
            <h2>Hello, {props.name} 👋</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}

export default Message