import React, { useEffect } from 'react'
import s from './Home.module.scss'
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { Days } from './Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useSelector } from 'react-redux';
import { selectCurrentWeatherData } from '../../store/selectors';

type Props = {}

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(
    selectCurrentWeatherData
  );
  useEffect(() => {
    dispatch(fetchCurrentWeather("moscow"));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home