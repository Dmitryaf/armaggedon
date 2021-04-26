import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsDanger } from '../../redux/dataReducer';
import './Filter.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const isDanger = useSelector((state) => state.dataReducer.isDanger);

  const clickHandler = () => {
    dispatch(toggleIsDanger(!isDanger));
  };

  useEffect(() => {
    return () => {
      dispatch(toggleIsDanger(false));
    };
  }, [dispatch]);

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
