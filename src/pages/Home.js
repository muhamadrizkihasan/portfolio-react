import React from "react";
import PlaceList from "../components/PlaceList";
import paris from "../images/paris.jpg";
import swiss from "../images/swiss.jpg";
import colosseum from "../images/coloseum.jpg";
import newYork from "../images/newYork.jpg";
import tokyo from "../images/tokyo.jpeg";
import sydney from "../images/sydney.jpg";

const Home = () => {
  const places = [
    { id: 1, name: "Paris", description: "Kota romantis di Prancis, terkenal dengan Menara Eiffel dan seni budaya.", image: paris },
    { id: 2, name: "Swiss", description: "Negara pegunungan di Eropa, terkenal dengan pemandangan alam dan danau yang indah.", image: swiss },
    { id: 3, name: "Colosseum", description: "Amphitheater besar di Roma, Italia, terkenal sebagai simbol sejarah Romawi kuno.", image: colosseum },
    { id: 4, name: "New York", description: "Kota besar di Amerika Serikat, terkenal dengan Patung Liberty, Times Square, dan gedung pencakar langit.", image: newYork },
    { id: 5, name: "Tokyo", description: "Ibukota Jepang, terkenal dengan teknologi canggih, budaya tradisional, dan pemandangan kota yang ramai.", image: tokyo },
    { id: 6, name: "Sydney", description: "Kota di Australia, terkenal dengan Opera House dan pantai-pantai indah di sekitarnya.", image: sydney },
  ];

  return (
    <div>
      <div className="text-center mb-3">
        <h3>Tempat Wisata Populer</h3>
      </div>
      <PlaceList places={places} />
    </div>
  );
};

export default Home;
