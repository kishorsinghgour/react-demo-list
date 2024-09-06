import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        setData(resData);
      })
      .catch();
  }, []);

  return (
    <div className={'container'}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {data.map((element) => {
        return <Card element={element} key={element.id} />;
      })}
    </div>
  );
}

const Card = ({ element }) => {
  return (
    <div className={'card'}>
      <p>{element.title}</p>
      <p>{element.category}</p>
    </div>
  );
};
