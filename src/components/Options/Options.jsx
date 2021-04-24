import React from 'react';
import { useDispatch } from 'react-redux';
import { setMeasure } from '../../redux/dataReducer';
import './Options.scss';

export default function Options() {
  const dispatch = useDispatch();

  const clickHandler = (measure) => {
    dispatch(setMeasure(measure));
  };

  return (
    <div className='options'>
      <button
        type='button'
        onClick={() => clickHandler('км')}
        className='options__btn options__btn_active'
      >
        Расстояние <span className='options__btn-text'>в километрах</span>,
      </button>
      <button
        type='button'
        onClick={() => clickHandler('лунар')}
        className='options__btn'
      >
        <span className='options__btn-text'></span> в дистациях до луны
      </button>
    </div>
  );
}
