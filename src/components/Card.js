const Card = (props) => {
  return (
    <div class="col-md-4 item mt-5">
      <div
        className="card text-white m-3 border border-light "
        style={{ backgroundColor: "#000613", boxShadow: '1px 2px 9px yellow' }}
      >
        <div className="card-header">
          <center>{props.heading}</center>
        </div>
        <div className="card-body">
          <img src={props.photo} style={{ "height": "80px" }} />
        </div>
        <div className="card-footer">
          <center>{props.description}</center>
        </div>
      </div>
      {/* <div
        class="card h-100 item-card card-block text-white m-3 border border-light  shadow-lg"
        style={{ backgroundColor: "#000613" }}
      >
        <center>
          <h6 class="card-title text-right p-2">{props.heading}</h6>

          <img src={props.photo} style={{ height: "80px" }} />
          

          <p class=" p-4">{props.description}</p>
        </center>
      </div> */}
    </div>
  );
};

export default Card;
