import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ApproachItem from './ApproachItem/ApproachItem';
import './ApproachList.scss';

export default function ApproachList(props) {
  const { measure, data } = props;
  return (
    <div className='approach-list'>
      {data.map((item) => {
        return <ApproachItem key={uuidv4()} measure={measure} info={item} />;
      })}
    </div>
  );
}
