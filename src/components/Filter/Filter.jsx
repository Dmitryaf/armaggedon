import React from 'react';
import './Filter.scss';

export default function Filter() {
  return (
    <div className='filter'>
      <label className='filter__label'>
        Показать только опасные
        <input type='checkbox' className='filter__input' />
        <span className='filter__mark'></span>
      </label>
    </div>
  );
}
