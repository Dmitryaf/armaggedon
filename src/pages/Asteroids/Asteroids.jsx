import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetOffset, setOffset } from '../../redux/dataReducer';
import { getApiData } from '../../api/api';
import Filter from '../../components/Filter/Filter';
import Options from '../../components/Options/Options';
import Card from '../../components/Card/Card';
import Preloader from '../../components/Preloader/Preloader';
import './Asteroids.scss';

export default function Asteroids() {
  const dispatch = useDispatch();
  const asteroidsData = useSelector((state) => state.dataReducer.data);
  const isDanger = useSelector((state) => state.dataReducer.isDanger);
  const offset = useSelector((state) => state.dataReducer.offset);

  let asteroidsItems;

  if (isDanger) {
    asteroidsItems = [...asteroidsData].filter((asteroid) => {
      return asteroid.is_potentially_hazardous_asteroid === isDanger;
    });
  } else {
    asteroidsItems = asteroidsData;
  }

  const offsetItems = asteroidsItems.slice(0, offset);

  const scrollHandler = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        50
      ) {
        dispatch(setOffset());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    return () => {
      dispatch(resetOffset());
    };
  }, [dispatch]);

  return (
    <div className='asteroids'>
      <div className='asteroids__options'>
        <Filter />
        <Options />
      </div>
      <div className='asteroids__list'>
        {offsetItems.length < 1 && <Preloader />}

        {offsetItems.map((asteroid) => {
          return (
            <Card
              key={asteroid.id}
              id={asteroid.id}
              data={asteroid}
              isDestruction={false}
            />
          );
        })}
      </div>
    </div>
  );
}
