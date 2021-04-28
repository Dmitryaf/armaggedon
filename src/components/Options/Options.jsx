import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMeasure } from '../../redux/dataReducer';
import './Options.scss';

export default function Options() {
  const dispatch = useDispatch();
  const measure = useSelector((state) => state.dataReducer.measure);

  const clickHandler = (measure, activeBtn) => {
    dispatch(setMeasure(measure));
  };

  return (
    <div className='options'>
      <button
        type='button'
        onClick={() => clickHandler('км')}
        className={`options__btn ${
          measure === 'км' ? 'options__btn_active' : ''
        }`}
      >
        Расстояние <span className='options__btn-text'>в километрах</span>,
      </button>
      <button
        type='button'
        onClick={() => clickHandler('лунар')}
        className={`options__btn ${
          measure === 'лунар' ? 'options__btn_active' : ''
        }`}
      >
        <span className='options__btn-text'>в дистациях</span> до луны
      </button>
    </div>
  );
}
