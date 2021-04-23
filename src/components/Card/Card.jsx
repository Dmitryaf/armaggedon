import React from 'react';
import './Card.scss';

export default function Card(props) {
  const { size } = props;
  let asteroidClass = '';
  if (size) {
    asteroidClass = size === 'md' ? 'card_asteroid_md' : 'card_asteroid_lg';
  }

  return (
    <div className={`card ${asteroidClass}`}>
      <div className='card__info'>
        <h2 className='card__title'>2021 fq</h2>
        <div className='card__row'>
          <div className='card__row-name'>Дата</div>
          <span className='card__row-line'></span>
          <div className='card__row-value'>12 сентября 2021</div>
        </div>
        <div className='card__row'>
          <div className='card__row-name'>Расстояние</div>
          <span className='card__row-line'></span>
          <div className='card__row-value'>7 235 024 км</div>
        </div>
        <div className='card__row'>
          <div className='card__row-name'>Размер</div>
          <span className='card__row-line'></span>
          <div className='card__row-value'>85 м</div>
        </div>
      </div>
      <div className='card__rating'>
        <h3 className='card__rating-title'>Оценка</h3>
        <div className='card__rating-text'>не опасен</div>
        <button type='button' className='btn'>
          На уничтожение
        </button>
      </div>
    </div>
  );
}
