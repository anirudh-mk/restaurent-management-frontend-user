import React, { useState } from "react";

const DraggableComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleStart = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        setIsDragging(true);
        setOffset({
            x: clientX - position.x,
            y: clientY - position.y,
        });
    };

    const handleMove = (e) => {
        if (!isDragging) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        setPosition({
            x: clientX - offset.x,
            y: clientY - offset.y,
        });
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: isDragging ? "grabbing" : "grab",
                touchAction: "none", // Prevent touch scrolling while dragging
            }}
        >
            Drag Me
        </div>
    );
};

export default DraggableComponent;
