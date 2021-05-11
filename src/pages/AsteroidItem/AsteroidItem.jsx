import React from "react";
import { useSelector } from "react-redux";

import Card from "../../components/Card/Card";
import ApproachList from "../../components/ApproachList/ApproachList";

import "./AsteroidItem.scss";

function AsteroidItem() {
  const cardData = useSelector((state) => state.dataReducer.currentItem);

  return (
    <div className="card-page">
      <h1 className="card-page__title">Карточка астероида</h1>
      <Card key={cardData.id} id={cardData.id} data={cardData} isDestruction={false} />
      <h2 className="card-page__subtitle">Список всех сближений</h2>
      <ApproachList />
    </div>
  );
}

export default AsteroidItem;
