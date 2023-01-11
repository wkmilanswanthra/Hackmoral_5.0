import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OrgComAvatars from "../components/OrgComAvatar";
import "../css/orgcom.css";
import Footer from "./sections/Footer";
const OrganizingCommitte = () => {
  useEffect(() => {
    // 👇 add class to body element
    // document.body.classList.add("bg-dark");

    // 👇️ set style on body element
    document.body.style.backgroundColor = "#260101";

    return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.style.backgroundColor = null;

      document.body.classList.remove("bg-salmon");
    };
  }, []);
  return (
    <React.Fragment>
      <div className="container mt-5 text-white">
        <h2>Organizing Committe</h2>
        <h4 className="mt-4 alert text-center" style={{"backgroundColor":"#D90707"}}>
          Web Development Team
        </h4>
        <div className="row mt-5">
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar1.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar2.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar3.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar4.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar5.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar6.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar8.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar1.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar2.png"
            name="Raguraj"
          />
        </div>

        <h4 className="mt-4 alert text-center" style={{"backgroundColor":"#D90707"}}>
          Web Development Team
        </h4>
        <div className="row mt-5">
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar1.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar2.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar3.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar4.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar5.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar6.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar8.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar1.png"
            name="Raguraj"
          />
          <OrgComAvatars
            image="https://bootdey.com/img/Content/avatar/avatar2.png"
            name="Raguraj"
          />
        </div>


      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default OrganizingCommitte;