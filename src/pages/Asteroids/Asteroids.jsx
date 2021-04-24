import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../../api/api';
import Filter from '../../components/Filter/Filter';
import Options from '../../components/Options/Options';
import Card from '../../components/Card/Card';
import './Asteroids.scss';

export default function Asteroids() {
  const dispatch = useDispatch();
  const asteroidsData = useSelector((state) => state.dataReducer.data);
  const asteroidsItems = asteroidsData.map((asteroid) => {
    return <Card key={asteroid.id} data={asteroid} />;
  });

  useEffect(() => {
    dispatch(getApiData());
  }, []);

  return (
    <div className='asteroids'>
      <div className='asteroids__options'>
        <Filter />
        <Options />
      </div>
      <div className='asteroids__list'>{asteroidsItems}</div>
    </div>
  );
}
