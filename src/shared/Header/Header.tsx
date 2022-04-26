import React, { useEffect, useState } from 'react'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select'
import SingleValue from 'react-select/dist/declarations/src/components/SingleValue';

interface Props  { 

}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
      ];

    const [theme, setTheme] = useState('light');

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px', 
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,

            
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000',
        })
    }  



    function changeTheme() {
        setTheme( theme == 'light' ? 'dark' : 'light' );

    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;

        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shdow',
            'text-color',
        ];

        components.forEach((component) => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme})`
                );
        })

    }, [theme])
    

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id="header-logo"/>
            </div>
            <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change__theme} onClick={changeTheme}>
            <GlobalSvgSelector id="change-theme"/>
            </div>
            <Select defaultValue={options[0]} styles={colorStyles} options={options} />
        </div>
    </header>
  )
}