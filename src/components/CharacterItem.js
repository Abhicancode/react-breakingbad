import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              Actor name:{" "}
              <b>
                <em>{item.portrayed}</em>
              </b>
            </li>
            <li>
              Nickname:{" "}
              <b>
                <em>{item.nickname}</em>
              </b>
            </li>
            <li>
              D.O.B:{" "}
              <b>
                <em>{item.birthday}</em>
              </b>
            </li>
            <li>
              Status:{" "}
              <b>
                <em>{item.status}</em>
              </b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
