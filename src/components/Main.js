import React from "react";
import food from "../assets/restauranfood.jpg";

const dishes = [
  { name: "Greek salade", image: "../assets/greek salad.jpg", price: 12.99 },
  { name: "Bruchetta", image: "../assets/bruchetta.svg", price: 5.99 },
  { name: "Lemon dessert", image: "../assets/lemon dessert.jpg", price: 5.0 },
];

function Main() {
  const [card] = React.useState(dishes);
  let dish;

  dish = card.map((e) => {
    return (
      <div>
        <img src={e.image} alt={e.name} />
        <h3>{e.name}</h3>
        <span>${e.price}</span>
      </div>
    );
  });

  return (
    <main>
      <div className="hero">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            we are a family owned Mediterranean Restaurant. focused on
            traditional ricipes served with a modern twist.
          </p>
          <button>Reserv a Table</button>
        </div>
        <img src={food} alt="restauran food" width={200} />
      </div>
      <div className="dishes">
        <>
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </>
        <div>{dish}</div>
      </div>
    </main>
  );
}

export default Main;
