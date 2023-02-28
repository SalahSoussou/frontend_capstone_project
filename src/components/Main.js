import React from "react";
import food from "../assets/restauranfood.jpg";
import salad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon dessert.jpg";
import "./Main.sass";
const dishes = [
  {
    name: "Greek salade",
    image: salad,
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aut assumenda reiciendis cum, molestiae quod deserunt, laboriosam voluptatem repudiandae facilis sapiente eaque, debitis reprehenderit praesentium iure veniam nihil earum. Rerum.",
  },

  {
    name: "Bruchetta",
    image: bruchetta,
    price: 5.99,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae necessitatibus quasi repudiandae molestias, ad libero eveniet aspernatur ipsam non, voluptas in obcaecati, quaerat doloremque dolor. Eius sunt iusto veritatis?",
  },
  {
    name: "Lemon dessert",
    image: dessert,
    price: 5.0,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eaque iusto asperiores placeat saepe esse. Odit quidem ea porro quis modi! Libero, impedit aliquam? Tempora rem vitae neque veritatis magni",
  },
];

function Main() {
  const [card] = React.useState(dishes);
  let dish;

  dish = card.map((e) => {
    return (
      <div>
        <img src={e.image} alt={e.name} width={200} />
        <h3>{e.name}</h3>
        <span>${e.price}</span>
        <p>{e.description}</p>
      </div>
    );
  });

  return (
    <main>
      <div className="hero">
        <div id="about">
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
        <div id="menu">{dish}</div>
      </div>
    </main>
  );
}

export default Main;
