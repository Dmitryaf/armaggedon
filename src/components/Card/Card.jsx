import React from 'react';
import { filterDate, getCurrentDate, transformDate } from '../../utils/utils';
import './Card.scss';

export default function Card(props) {
  // console.log(props.data);
  const { name_limited, estimated_diameter, close_approach_data } = props.data;
  const closestDateApproach = filterDate(close_approach_data)[0]
    .close_approach_date;
  const transformedDate = transformDate(closestDateApproach);
  console.log(getCurrentDate(closestDateApproach));

  return (
    <div className='card'>
      <div className='card__info'>
        <h2 className='card__title'>
          <a href='/asteroid' className='card__link'>
            {name_limited}
          </a>
        </h2>
        <div className='card__row'>
          <div className='card__row-name'>Дата</div>
          <span className='card__row-line'></span>
          <div className='card__row-value'>{transformedDate}</div>
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
