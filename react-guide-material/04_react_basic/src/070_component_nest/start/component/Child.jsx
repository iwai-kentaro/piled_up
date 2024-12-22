// src/component/Child.jsx
import React from 'react';
import { List } from './List.jsx'; // パスを確認
import './Child.css'; // 必要に応じてCSSを読み込み

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

export default Child;
