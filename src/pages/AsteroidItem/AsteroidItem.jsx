import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApproachList from '../../components/ApproachList/ApproachList';
import { addToDesctructionCart } from '../../redux/dataReducer';
import Utils from '../../utils/utils';
import './AsteroidItem.scss';

export default function AsteroidItem() {
  const dispatch = useDispatch();
  const cardData = JSON.parse(localStorage.getItem('currentItem'));
  const measureData = useSelector((state) => state.dataReducer.measure);

  const {
    id,
    name_limited,
    estimated_diameter,
    close_approach_data,
    is_potentially_hazardous_asteroid,
  } = cardData;

  // Данные астероида
  const filteredDate = Utils.filterDate(close_approach_data);
  const closestDateApproach = filteredDate[0].close_approach_date;
  const transformedDate = Utils.getTransformDate(closestDateApproach);
  const distance = Utils.getDistance(
    measureData,
    filteredDate[0].miss_distance
  );
  const size = Math.floor(estimated_diameter.meters.estimated_diameter_max);
  const time = Utils.getTime(filteredDate[0].close_approach_date_full);

  // Определение класса астероида взависимости от размера
  const asteroidClass = Utils.asteroidClass(
    size,
    is_potentially_hazardous_asteroid
  );

  // Определение опасности астероида
  const isDanger = () => {
    return is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен';
  };

  const addToCart = (elementId) => {
    dispatch(addToDesctructionCart(elementId));
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('currentItem');
    };
  }, []);

  return (
    <div className='card-page'>
      <h1 className='card-page__title'>Карточка астероида</h1>
      <div className={`card ${asteroidClass}`}>
        <div className='card__content'>
          <div className='card__info'>
            <h2 className='card__title'>{name_limited}</h2>
            <div className='card__row'>
              <div className='card__row-name'>Дата</div>
              <span className='card__row-line'></span>
              <div className='card__row-value'>{transformedDate}</div>
            </div>
            <div className='card__row'>
              <div className='card__row-name'>Время сближения</div>
              <span className='card__row-line'></span>
              <div className='card__row-value'>{time}</div>
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
            <h3 className='card__rating-title'>Оценка:</h3>
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
      </div>
      <h2 className='card-page__subtitle'>Список всех сближений</h2>
      <ApproachList measure={measureData} data={close_approach_data} />
    </div>
  );
}
