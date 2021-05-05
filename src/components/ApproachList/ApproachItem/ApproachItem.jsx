import React from 'react';

import Utils from '../../../utils/utils';
import './ApproachItem.scss';

export default function ApproachItem(props) {
  const { measure, info } = props;
  const date = Utils.getTransformDate(info.close_approach_date);
  const speed = Math.floor(info.relative_velocity.kilometers_per_hour);
  const time = Utils.getTime(info.close_approach_date_full);
  const distance = Utils.getDistance(measure, info.miss_distance);
  const orbite = info.orbiting_body;

  return (
    <div className="approach-item">
      <div className="approach-item__wrapper">
        <div className="approach-item__date">
          <div className="approach-item__header-title">Дата</div>
          {date}
        </div>
        <div className="approach-item__info">
          <div className="approach-item__header-title approach-item__header-title_right">
            Дополнительная информация
          </div>
          <div className="approach-item__row">
            <div className="approach-item__row-name">Время сближения</div>
            <span className="approach-item__row-line" />
            <div className="approach-item__row-value">{time}</div>
          </div>
          <div className="approach-item__row">
            <div className="approach-item__row-name">Скорость</div>
            <span className="approach-item__row-line" />
            <div className="approach-item__row-value">
              {speed}
              {' '}
              км/ч
            </div>
          </div>
          <div className="approach-item__row">
            <div className="approach-item__row-name">Расстояние</div>
            <span className="approach-item__row-line" />
            <div className="approach-item__row-value">
              {distance}
              {' '}
              {measure}
            </div>
          </div>
          <div className="approach-item__row">
            <div className="approach-item__row-name">Орбита</div>
            <span className="approach-item__row-line" />
            <div className="approach-item__row-value">{orbite}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
