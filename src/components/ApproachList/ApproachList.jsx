import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ApproachItem from './ApproachItem/ApproachItem';
import './ApproachList.scss';

export default function ApproachList() {
  const cardData = useSelector((state) => state.dataReducer.currentItem)
    .close_approach_data;
  const measureData = useSelector((state) => state.dataReducer.measure);

  return (
    <div className='approach-list'>
      {cardData.map((item) => {
        return (
          <ApproachItem key={uuidv4()} measure={measureData} info={item} />
        );
      })}
    </div>
  );
}
