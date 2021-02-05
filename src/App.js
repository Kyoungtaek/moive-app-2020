import React from "react";
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/MFBP01-front-shadow_200x200.jpg?v=1607105752",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/MFPD01_Mattifying_Opened_283e7d6f-2708-4fc9-9ead-007ccd83bd2f_200x200.jpg?v=1607107025",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/MFPF01-double_200x200.jpg?v=1603818195",
    rating: 3,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/MMLM01_Matchmaker_200x200.jpg?v=1591884898",
    rating: 5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/AMLG01_Metallic_Gloss_200x200.jpg?v=1591885016",
    rating: 4.2,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} image={dish.image} />;
// }

// const renderFood = (dish) => <Food name={dish.name} image={dish.image} />;

function App() {
  return (
    <div>
      {foodILike.map((x) => (
        <Food key={x.id} name={x.name} image={x.image} rating={x.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
