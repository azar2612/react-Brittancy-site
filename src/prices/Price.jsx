import React from "react";
import "./Price.css";

const Price = () => (
  <div className="price-section">
    <PriceBlock />
  </div>
);

const PriceBlock = () => (
  <div className="price-block">
    <div>
      <h1>Prices</h1>
    </div>
    <CardBlock />
  </div>
);

const CardBlock = () => (
  <div className="card-block">
    <Cards
      h4="portraits"
      p1="pencil portraits"
      p2="Oil Portraits"
      p3="Watercolor Portraits"
      s1="$65"
      s2="$75"
      s3="$85"
    />
    <Cards
      h4="pop art"
      p1="Portraits"
      p2="posters"
      p3="murals"
      s1="$65"
      s2="$75"
      s3="$85"
    />
    <Cards
      h4="abstract art"
      p1="paintings"
      p2="walls"
      p3="posters"
      s1="$65"
      s2="$75"
      s3="$85"
    />
  </div>
);

const Cards = ({ h4, p1, p2, p3, s1, s2, s3 }) => (
  <div className="cards">
    <h4>{h4}</h4>
    <div />
    <p>
      {p1}

      <span>{s1}</span>
    </p>
    <p>
      {p2}

      <span>{s2}</span>
    </p>
    <p>
      {p3}

      <span>{s3}</span>
    </p>
  </div>
);
export default Price;
