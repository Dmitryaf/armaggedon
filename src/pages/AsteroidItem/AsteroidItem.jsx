import React from 'react';
import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import ApproachList from '../../components/ApproachList/ApproachList';
import './AsteroidItem.scss';
import { useSelector } from 'react-redux';

export default function AsteroidItem() {
  const cardData = JSON.parse(localStorage.getItem('currentItem'));
  const measureData = useSelector((state) => state.dataReducer.measure);

  useEffect(() => {
    return () => {
      localStorage.removeItem('currentItem');
    };
  }, []);

  return (
    <div className='card-page'>
      <h1 className='card-page__title'>Карточка астероида</h1>
      <Card
        key={cardData.id}
        id={cardData.id}
        data={cardData}
        isDestruction={false}
      />
      <h2 className='card-page__subtitle'>Список всех сближений</h2>
      <ApproachList measure={measureData} data={cardData.close_approach_data} />
    </div>
  );
}
