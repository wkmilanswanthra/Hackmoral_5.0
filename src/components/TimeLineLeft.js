import React from "react";

const TimeLineLeft = (props) => {
    return (
        <React.Fragment>
            <div className="timeline-4 left-4">
                <div className="card gradient-custom">
                    <div className="card-body p-4">
                        <i className="fas fa-brain fa-2x mb-3"></i>
                        <h4>{props.heading}</h4>
                        <p className="small text-white-50 mb-4">{props.date}</p>
                        <p>{props.description}</p>
                        <a href={props.link} target="_blank" type="button" className="border border-3 border-light text-white btn mb-2 mb-md-0 btn-block btn-round" style={{"backgroundColor":"#6913cc"}}>{props.buttonText}</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TimeLineLeft;