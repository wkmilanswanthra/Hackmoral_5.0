import { Link } from "react-router-dom";
import "../../css/orgBtn.css";

const OrgButton = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "relative",
        padding: "50px 0",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      <center>
        <Link to="/OrganizingCommitte" className="btn-org">
          Organizing Committe
        </Link>
      </center>
    </div>
  );
};
export default OrgButton;
