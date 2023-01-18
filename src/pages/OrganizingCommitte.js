import React from "react";
import OrgComAvatars from "../components/OrgComAvatar";
import "../css/orgcom.css";
import Footer from "./sections/Footer";

const committes = {
  "Question and Reviewing Team": {
    names: ["Sasika", "Haritha", "Thushan", "Vinod", "Yasas", "Kavindya"],
  },
  "Web Development Team": {
    names: ["Milan", "Raguraj", "Mathesh", "Sampath", "Bumuth"],
  },
  "Designing Team": {
    names: [
      "Gihan",
      "Kelum",
      "Nuwantha",
      "Dilina",
      "Oshani",
      "Jayanithya",
      "Chamika",
      "Dulara",
      "Lakshan",
    ],
  },
  "Editorial Team": {
    names: [
      "Malithi",
      "Sinera",
      "Tharushi",
      "Charuni",
      "Alanki",
      "Dasuni",
      "Anudi",
      "Isuri",
    ],
  },
};

const OrganizingCommitte = () => (
  <div style={{ backgroundColor: "black", overflowX: "hidden" }}>
    {Object.keys(committes).map((committe) => {
      return (
        <div>
          <h4
            className="mt-4 alert text-center"
            style={{ backgroundColor: "#D90707" }}
          >
            {committe}
          </h4>
          <div className="row mt-5" style={{ justifyContent: "center" }}>
            {committes[committe].names.map((name) => {
              return (
                <OrgComAvatars image={`./committe/${name}.jpg`} name={name} />
              );
            })}
          </div>
        </div>
      );
    })}
    <Footer />
  </div>
);

export default OrganizingCommitte;
