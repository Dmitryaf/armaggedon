import React from 'react';
import './Options.scss';

export default function Options() {
  return (
    <div className='options'>
      <button type='button' className='options__btn options__btn_active'>
        Расстояние <span className='options__btn-text'>в километрах</span>,{' '}
      </button>
      <button type='button' className='options__btn'>
        <span className='options__btn-text'></span> в дистациях до луны
      </button>
    </div>
  );
}
