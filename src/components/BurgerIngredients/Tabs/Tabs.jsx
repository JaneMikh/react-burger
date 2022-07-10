import React from 'react';
import stylesTab from './Tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Tabs ({ handleTabsClick, current }) {
  
  return (
    <div className={stylesTab.tab}>
      <Tab value='bun' active={current === 'bun'} onClick={handleTabsClick}>
        Булки
      </Tab>
      <Tab value='sauce' active={current === 'sauce'} onClick={handleTabsClick}>
        Соусы
      </Tab>
      <Tab value='main' active={current === 'main'} onClick={handleTabsClick}>
        Начинки
      </Tab>
    </div>
  );
}
