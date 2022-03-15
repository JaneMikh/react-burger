import React from 'react';
import stylesTab from './Tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Tabs () {
  const [current, setCurrent] = React.useState('Булки');
  
  const handleTabsClick = (event) => {
    setCurrent(event);
  }

  return (
    <div className={stylesTab.tab}>
      <Tab value="one" active={current === 'Булки'} onClick={handleTabsClick}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'Соусы'} onClick={handleTabsClick}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'Начинки'} onClick={handleTabsClick}>
        Начинки
      </Tab>
    </div>
  );
}
