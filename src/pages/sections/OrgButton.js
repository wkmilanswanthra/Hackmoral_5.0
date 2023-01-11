import { Link } from "react-router-dom";

const OrgButton = () => {
    return (
        <div style={{ "backgroundColor": "#260101" }}>
            <center>
                <Link to="/OrganizingCommitte" className=" mt-3 btn text-white" style={{ "backgroundColor": "#D90707" }}>Organizing Committe</Link>
            </center>
        </div>
    );
}
export default OrgButton;