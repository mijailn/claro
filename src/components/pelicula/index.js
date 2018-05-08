import React from 'react';
import { Link } from 'react-router-dom';
const Pelicula = ({ pelicula }) => {
  return (
    <div className="pelicula padding-h-sm margin-v-xl">
      <Link to={`/mexico/vcard/home/${pelicula.title_uri}/${pelicula.id}`}>
        <img alt={pelicula.name} src={pelicula.image_small} />
        <div className="overlay" />
      </Link>
    </div>
  );
};

export default Pelicula;
