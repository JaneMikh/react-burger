import React from 'react';
import stylesTab from './Tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default function Tabs ({ current, onChange }) {
  
  return (
    <div className={stylesTab.tab}>
      <Tab value='bun' active={current === 'bun'} onClick={onChange}>
        Булки
      </Tab>
      <Tab value='sauce' active={current === 'sauce'} onClick={onChange}>
        Соусы
      </Tab>
      <Tab value='main' active={current === 'main'} onClick={onChange}>
        Начинки
      </Tab>
    </div>
  );
}

Tabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  current: PropTypes.oneOf([
    'bun',
    'sauce',
    'main'
  ]).isRequired,
}