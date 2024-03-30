import React from "react";

const SecondsCounter = (props) => {
    let unit = props.seconds % 10;
    let ten = Math.floor(props.seconds / 10) % 10;
    let hundred = Math.floor(props.seconds / 100) % 10;
    let thousand = Math.floor(props.seconds / 1000) % 10;
    let tenThousand = Math.floor(props.seconds / 10000) % 10;
    let hundredThousand = Math.floor(props.seconds / 100000) % 10;


    
    
    return (
        <div className="container mt-5">
            <div className="row fs-1 d-flex text-center text-white justify-content-center">
                    <div className="col rounded-4">
                     <div className="icon box"><i className="far fa-clock img-fluid"></i></div>
                     </div>
                    <div className="col rounded-4">
                        <div className="counter box">{hundredThousand}</div>
                    </div>
                    <div className="col rounded-4">
                    <div className="counter box">{tenThousand}</div>
                    </div>
                    <div className="col rounded-4">
                    <div className="counter box">{thousand}</div>
                    </div>
                    <div className="col rounded-4">
                    <div className="counter box">{hundred}</div>
                    </div>
                    <div className="col rounded-4">
                    <div className="counter box">{ten}</div>
                    </div>
                    <div className="col rounded-4">
                    <div className="counter box">{unit}</div>
                    </div>
                
            </div>
            
        </div>
    );
};

export default SecondsCounter