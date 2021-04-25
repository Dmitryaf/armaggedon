import axios from 'axios';
import { setData } from '../redux/dataReducer';

const apiUrl =
  'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JdZrMyQiNT5Zg1vwjiY2H2UCEWw8K7ZnTQdm8rww';

export function getApiData() {
  return async (dispatch) => {
    try {
      const response = await axios(`${apiUrl}`);
      const data = await response.data.near_earth_objects;
      dispatch(setData(data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}
