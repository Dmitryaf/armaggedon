import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleIsDanger } from "../../redux/dataReducer";

import "./Filter.scss";

function Filter() {
  const dispatch = useDispatch();
  const isDanger = useSelector((state) => state.dataReducer.isDanger);

  const clickHandler = () => {
    dispatch(toggleIsDanger(!isDanger));
  };

  useEffect(
    () => () => {
      dispatch(toggleIsDanger(false));
    },
    [dispatch]
  );

  return (
    <div
      role="checkbox"
      aria-checked={isDanger}
      tabIndex={0}
      className="filter"
      onClick={clickHandler}
      onKeyPress={clickHandler}
    >
      <div className="filter__label">
        Показать только опасные
        <input type="checkbox" className="filter__input" defaultChecked={isDanger} />
        <span className="filter__mark" />
      </div>
    </div>
  );
}

export default Filter;
