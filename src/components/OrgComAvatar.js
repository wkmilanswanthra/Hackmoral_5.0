import React  from "react";
const OrgComAvatars = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-2">
            <center>
              <img
                draggable="false"
                src={props.image}
                width="150"
                className="border border-light border-4 shadow-lg rounded-circle"
              ></img>
              <h5 className="mt-4">{props.name}</h5>
            </center>
          </div>
        </React.Fragment>
    );
}
export default OrgComAvatars;