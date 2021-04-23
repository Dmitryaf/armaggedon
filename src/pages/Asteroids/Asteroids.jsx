import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../../api/api';
import Filter from '../../components/Filter/Filter';
import Options from '../../components/Options/Options';
import Card from '../../components/Card/Card';
import './Asteroids.scss';

export default function Asteroids() {
  const dispatch = useDispatch();
  const asteroidsData = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getApiData());
  }, []);

  console.log(asteroidsData);

  return (
    <div className='asteroids'>
      <div className='asteroids__options'>
        <Filter />
        <Options />
      </div>
      <div className='asteroids__list'>
        <Card />
        <Card size='md' />
        <Card size='lg' />
      </div>
    </div>
  );
}
