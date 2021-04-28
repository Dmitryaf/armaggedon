import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  addToDestructionCart,
  deleteFromDestructionCart,
  setCurrentItem,
} from '../../redux/dataReducer';
import Utils from '../../utils/utils';
import './Card.scss';

export default function Card(props) {
  const dispatch = useDispatch();
  const measureData = useSelector((state) => state.dataReducer.measure);
  const destructionCart = useSelector(
    (state) => state.dataReducer.destructionCart
  );

  const { id, isDestruction } = props;

  const {
    name_limited,
    estimated_diameter,
    close_approach_data,
    is_potentially_hazardous_asteroid,
  } = props.data;

  const inDestructionCart = destructionCart.find((item) => item.id === id);

  // Данные астероида
  const filteredDate = Utils.filterDate(close_approach_data);
  const closestDateApproach = filteredDate[0].close_approach_date;
  const transformedDate = Utils.getTransformDate(closestDateApproach);
  const distance = Utils.getDistance(
    measureData,
    filteredDate[0].miss_distance
  );
  const size = Math.floor(estimated_diameter.meters.estimated_diameter_max);

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
    dispatch(addToDestructionCart(elementId));
  };

  const deleteFromCart = (elementId) => {
    dispatch(deleteFromDestructionCart(elementId));
  };

  const setItem = () => {
    dispatch(setCurrentItem(props.data));
  };

  return (
    <div className={`card ${asteroidClass}`}>
      <div className='card__content'>
        <div className='card__info'>
          <NavLink
            to={`/asteroid/${id}`}
            onClick={setItem}
            className='card__title'
          >
            {name_limited}
          </NavLink>

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
          <h3 className='card__rating-title'>Оценка:</h3>
          <div className='card__rating-text'>
            {isDanger(is_potentially_hazardous_asteroid)}
          </div>
          {isDestruction ? (
            <button
              type='button'
              onClick={() => {
                deleteFromCart(id);
              }}
              className='btn'
            >
              Удалить из списка
            </button>
          ) : (
            <button
              type='button'
              onClick={() => {
                addToCart(id);
              }}
              className={`btn ${inDestructionCart ? 'btn_disable' : ''}`}
            >
              {inDestructionCart ? 'В списке на уничтожение' : 'На уничтожение'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
