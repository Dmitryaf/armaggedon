import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMeasure } from '../../redux/dataReducer';
import './Options.scss';

export default function Options() {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(0);

  const clickHandler = (measure, activeBtn) => {
    setActiveBtn(activeBtn);
    dispatch(setMeasure(measure));
  };

  return (
    <div className='options'>
      <button
        type='button'
        onClick={() => clickHandler('км', 0)}
        className={`options__btn ${
          activeBtn === 0 ? 'options__btn_active' : ''
        }`}
      >
        Расстояние <span className='options__btn-text'>в километрах</span>,
      </button>
      <button
        type='button'
        onClick={() => clickHandler('лунар', 1)}
        className={`options__btn ${
          activeBtn === 1 ? 'options__btn_active' : ''
        }`}
      >
        <span className='options__btn-text'>в дистациях</span> до луны
      </button>
    </div>
  );
}
