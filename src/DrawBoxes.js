import { useState, useEffect } from 'react';

const initialState = {
    startX: null,
    startY: null,
    endX: null,
    endY: null,
}

const DrawBoxes = ({children, enabled}) => {
    /* 
    TODO: 
    - Delete the box
    */
    const [coordinates, setCoordinates] = useState(null);
    const [boxes, setBoxes] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const [previewCoordinates, setPreviewCoordinates] = useState(initialState);

    const handleDraw = (e) => {
        const { startX, startY } = coordinates || {};
        const x = e.pageX;
        const y = e.pageY;
        if(!(startX && startY)) {
            setCoordinates((prev) => ({...prev, startX: x, startY: y}));
            setPreviewCoordinates((prev) => ({...prev, startX: x, startY: y}));
        } else {
            setCoordinates((prev) => ({...prev, endX: x, endY: y}));
            setShowPreview(false);
            setPreviewCoordinates(initialState);
        }
    };

    useEffect(() => {
        console.log(boxes);
    }, [boxes]);

    useEffect(() => {
        const {startX, startY, endX, endY } = coordinates || {};
        if(startX && startY && endX && endY) {
            setBoxes((prev) => [...prev, coordinates]);
            setCoordinates(initialState);
        } else if(startX && startY) {
            setShowPreview(true);
        }
    }, [coordinates]);

    const handleOnMouseEvent = (e) => {
        setPreviewCoordinates((prev) => ({...prev, endX: e.pageX, endY: e.pageY }));
    };

    const displayPreview = () => {
        const { startX, startY, endX, endY } = previewCoordinates || {};
        const boxStyle = {
            height: `${endY - startY}px`,
            width: `${endX - startX}px`,
            position: "absolute",
            border: "1px solid red",
            left: `${startX}px`,
            top: `${startY}px`,
        };
        return <div style={boxStyle}></div>
    };

    const displayBox = () => {
        return boxes.map((b, i) => {
            const { startX, startY, endX, endY } = b || {};
            const boxStyle = {
                height: `${endY - startY}px`,
                width: `${endX - startX}px`,
                position: "absolute",
                border: "1px solid red",
                left: `${startX}px`,
                top: `${startY}px`,
            };
            return <div style={boxStyle} key={i}></div>
        });
    };

    if (enabled) {
        return (
            <div style={{height: "100%", width: "100%"}} onClick={handleDraw} onMouseMove={ setShowPreview ? handleOnMouseEvent : null}>
                {boxes.length && displayBox()}
                {/* Draw Children */}
                <div className="container full">
                    {children}
                </div>
                {showPreview && displayPreview()}
            </div>
        )
    } else {
        return (
            <div className="container full">
                {children}
            </div>
        )
    }
};

export default DrawBoxes;