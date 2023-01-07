import React from "react";
import { Link } from "react-router-dom";
const Sample = () => {
    return (
        <React.Fragment>
            <div className="container p-4">
                <h4>This is Sample Page...</h4>
                <Link to="/" className="btn btn-primary">Goto Welcome Page</Link>
            </div>
        </React.Fragment>
    );
}
export default Sample;