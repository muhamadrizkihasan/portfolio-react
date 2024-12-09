import { useParams, Link } from "react-router-dom";
import paris from "../images/paris.jpg";
import swiss from "../images/swiss.jpg";
import coloseum from "../images/coloseum.jpg";

function PlaceDetails() {
  const { id } = useParams();

  // Data sementara
  const places = {
    1: { name: "Paris", description: "Kota romantis di Prancis, terkenal dengan Menara Eiffel dan seni budaya.", image: paris },
    2: { name: "Swiss", description: "Negara pegunungan di Eropa, terkenal dengan pemandangan alam dan danau yang indah.", image: swiss },
    3: { name: "Colosseum", description: "Amphitheater besar di Roma, Italia, terkenal sebagai simbol sejarah Romawi kuno.", image: coloseum },
  };

  const place = places[id];

  if (!place) return <h2>Tempat tidak ditemukan</h2>;

  return (
    <div className="container mt-5 w-75">
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={place.image} alt={place.name} className="img-fluid rounded-start" style={{ maxWidth: "80%", height: "auto", margin: "auto" }} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">{place.description}</p>
              <Link to="/" className="btn btn-primary mt-3">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
