const Card = (props) => {
  return (
      <div className="card text-white card-custom border-white border-0 " style={{"backgroundColor":"#000613"}}>
          <div className="card-custom-img" style={{ backgroundImage: `url(${props.bg})` }}></div>
          <div className="card-custom-avatar " >
              <img draggable={false} className=" border border-4 border-light"src={props.circleImage} alt="image" style={{"backgroundColor":"black"}}/>
          </div>
          <div className="card-body" style={{overflowY:"auto"}}>
              {/* style="overflow-y: auto" */}
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text">{props.description}</p>
          </div>
      </div>
  );
}
export default Card;