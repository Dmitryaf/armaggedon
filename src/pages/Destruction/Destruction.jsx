import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import './Destruction.scss';

export default function Destruction() {
  const destructionCart = useSelector(
    (state) => state.dataReducer.destructionCart
  );
  console.log(destructionCart);
  return (
    <div className='destruction'>
      <div className='destruction__list'>
        {destructionCart.length > 0 ? (
          destructionCart.map((asteroid) => {
            return (
              <Card
                key={asteroid.id}
                id={asteroid.id}
                data={asteroid}
                isDestruction={true}
              />
            );
          })
        ) : (
          <p className='destruction__empty'>Список пуст</p>
        )}

        {destructionCart.length > 0 && (
          <button type='button' className='btn btn_center'>
            Заказать бригаду
          </button>
        )}
      </div>
    </div>
  );
}