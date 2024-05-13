// Cards.js
import React, { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState([
    { id: 1, img: '/img/bulbi.png', stat: "" },
    { id: 1, img: '/img/bulbi.png', stat: "" },
    { id: 2, img: '/img/sala.png', stat: "" },
    { id: 2, img: '/img/sala.png', stat: "" },
    { id: 3, img: '/img/cara.png', stat: "" },
    { id: 3, img: '/img/cara.png', stat: "" },
    { id: 4, img: '/img/pika.png', stat: "" },
    { id: 4, img: '/img/pika.png', stat: "" },
    { id: 5, img: '/img/florizarre.png', stat: "" },
    { id: 5, img: '/img/florizarre.png', stat: "" },
    { id: 6, img: '/img/tortank.png', stat: "" },
    { id: 6, img: '/img/tortank.png', stat: "" },
    { id: 7, img: '/img/dracaufeu.png', stat: "" },
    { id: 7, img: '/img/dracaufeu.png', stat: "" },
    { id: 8, img: '/img/mew.png', stat: "" },
    { id: 8, img: '/img/mew.png', stat: "" },
  ].sort(() => Math.random() - 0.5));

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="contenu">
      {items.map((item) => (
        <Card key={item.id} item={item} id={item.id} handleClick={() => handleClick(item.id)} />
      ))}
    </div>
  );
}

export default Cards;