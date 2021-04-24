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
  const isDanger = useSelector((state) => state.dataReducer.isDanger);
  let asteroidsItems;

  if (isDanger) {
    asteroidsItems = [...asteroidsData].filter((asteroid) => {
      return asteroid.is_potentially_hazardous_asteroid === isDanger;
    });
  } else {
    asteroidsItems = asteroidsData;
  }

  useEffect(() => {
    dispatch(getApiData());
  }, []);

  return (
    <div className='asteroids'>
      <div className='asteroids__options'>
        <Filter />
        <Options />
      </div>
      <div className='asteroids__list'>
        {asteroidsItems.map((asteroid) => {
          return <Card key={asteroid.id} id={asteroid.id} data={asteroid} />;
        })}
      </div>
    </div>
  );
}
