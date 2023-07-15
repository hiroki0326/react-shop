import React from 'react';

const Button = () => {
  const handleClick = () => {
    // メソッドの処理
    console.log('ボタンがクリックされました');
  };

  return (
    <button onClick={handleClick}>クリック</button>
  );
};

export default Button;