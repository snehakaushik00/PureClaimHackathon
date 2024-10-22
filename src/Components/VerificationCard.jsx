import { Link } from "react-router-dom";

function VerificationCard({ val }) {
  return (
    <div className="col-9 col-sm-6 col-md-4 col-lg-3 mb-4 mx-auto ">
      <div className="card h-100 border  border-success">
        <img src={val.img} className="img-fluid card-img-top" alt={val.text} />
        <div className="card-body">
          <Link
            to={val.path}
            className="btn btn-outline-success w-100">
            {val.text}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
