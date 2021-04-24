import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsDanger } from '../../redux/dataReducer';
import './Filter.scss';

export default function Filter() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dataReducer.data);

  const clickHandler = () => {
    dispatch(toggleIsDanger());
  };
  return (
    <div className='filter' onClick={clickHandler}>
      <div className='filter__label'>
        Показать только опасные
        <input type='checkbox' className='filter__input' />
        <span className='filter__mark'></span>
      </div>
    </div>
  );
}
