import React from 'react'
import s from './Home.module.scss'
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
      </div>
    </div>
  ) 
}

export default Home