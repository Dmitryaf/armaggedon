import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDesctructionCart } from '../../redux/dataReducer';
import Utils from '../../utils/utils';
import './Card.scss';

export default function Card(props) {
  const dispatch = useDispatch();
  const measureData = useSelector((state) => state.dataReducer.measure);

  const { id } = props;
  const {
    name_limited,
    estimated_diameter,
    close_approach_data,
    is_potentially_hazardous_asteroid,
  } = props.data;

  // Данные астероида
  const filteredDate = Utils.filterDate(close_approach_data);
  const closestDateApproach = filteredDate[0]?.close_approach_date;
  const transformedDate = Utils.transformDate(closestDateApproach);
  const distance = Utils.getDistance(
    measureData,
    filteredDate[0].miss_distance
  );
  const size = Math.floor(estimated_diameter.meters.estimated_diameter_max);

  // Определение класса астероида взависимости от размера
  const asteroidClass = (asteroidSize) => {
    if (is_potentially_hazardous_asteroid) {
      return 'card_asteroid_lg';
    }
    if (
      !is_potentially_hazardous_asteroid &&
      asteroidSize >= 8000 &&
      asteroidSize < 20000
    ) {
      return 'card_asteroid_md';
    }
    return '';
  };

  // Определение опасности астероида
  const isDanger = () => {
    return is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен';
  };

  const addToCart = (elementId) => {
    dispatch(addToDesctructionCart(elementId));
  };

  return (
    <div className={`card ${asteroidClass(size)}`}>
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
          <div className='card__row-value'>
            {distance}&nbsp;
            {measureData}
          </div>
        </div>
        <div className='card__row'>
          <div className='card__row-name'>Размер</div>
          <span className='card__row-line'></span>
          <div className='card__row-value'>{size}&nbsp;м</div>
        </div>
      </div>
      <div className='card__rating'>
        <h3 className='card__rating-title'>Оценка</h3>
        <div className='card__rating-text'>
          {isDanger(is_potentially_hazardous_asteroid)}
        </div>
        <button
          type='button'
          onClick={() => {
            addToCart(id);
          }}
          className='btn'
        >
          На уничтожение
        </button>
      </div>
    </div>
  );
}
