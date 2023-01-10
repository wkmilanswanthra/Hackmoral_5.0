import React from "react";

const TimeLineRight = (props) => {
    return (
        <React.Fragment>
            <div className="timeline-4 right-4">
                <div className="card gradient-custom-4">
                    <div className="card-body p-4">
                        <i className="fas fa-camera fa-2x mb-3"></i>
                        <h4>{props.heading}</h4>
                        <p className="small text-white-50 mb-4">{props.date}</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TimeLineRight;