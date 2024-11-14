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
    - Draw multiple boxes
    */
        
    const [startCoordinates, setStartCoordinates] = useState(null);
    const [finalState, setFinalState] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [boxes, setBoxes] = useState([]);

    const handleDraw = (e) => {
        // if(!startCoordinates) {
        //     const x = e.pageX;
        //     const y = e.pageY;
        //     setStartCoordinates({x, y});
        // } else {
        //     const boxObject = {
        //         startX: startCoordinates.x,
        //         startY: startCoordinates.y,
        //         endX: e.pageX,
        //         endY: e.pageY,
        //     }
        //     setFinalState(boxObject);
        // }

        const { startX, startY } = coordinates || {};
        const x = e.pageX;
        const y = e.pageY;
        if(!(startX && startY)) {
            setCoordinates((prev) => ({...prev, startX: x, startY: y}));
        } else {
            setCoordinates((prev) => ({...prev, endX: x, endY: y}));
        }
    };

    useEffect(() => {
        if(startCoordinates) console.log(startCoordinates);
    }, [startCoordinates]);

    useEffect(() => {
        if(finalState) console.log(finalState);
    }, [finalState]);

    useEffect(() => {
        console.log(boxes);
    }, [boxes]);

    useEffect(() => {
        const {startX, startY, endX, endY } = coordinates || {};
        if(startX && startY && endX && endY) {
            setBoxes((prev) => [...prev, coordinates]);
            setCoordinates(initialState);
        }
    }, [coordinates]);

    const displayBox = () => {
        // const { startX, startY, endX, endY } = finalState;
        // const boxStyle = {
        //     height: `${endY - startY}px`,
        //     width: `${endX - startX}px`,
        //     position: "absolute",
        //     border: "1px solid red",
        //     left: `${startX}px`,
        //     top: `${startY}px`,
        // };
        // return (
        //     <div style={boxStyle}></div>
        // )

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
            <div style={{height: "100%", width: "100%"}} onClick={handleDraw}>
                {boxes.length && displayBox()}
                {/* Draw Children */}
                <div className="container full">
                    {children}
                </div>
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