import React from "react";

function Box({
    id,
    handleRemove,
    width = 5,
    height = 5,
    backgroundColor = "blue"
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
                style ={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={remove}>Remove This Box?</button>
        </div>
    )
}

export default Box;