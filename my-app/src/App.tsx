import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Test from './components/test';
import Greeting from './Greeting';
import Counter from './Counter';
import Profile from './Profile';
import Item from './Item';
import Container from './Container';
import ShowHide from './ShowHide';
import Form from './Form';


function App() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(prev => prev + 1);
  };

  const handleCountDown = () => {
    setCount(prev => prev - 1);
  };

  const handleCountReset = () => {
    setCount(0);
  }




  const ageCheck = (num? :number | string) : string | number => {
   return num !== undefined && num !== null ? num : 'Age not provided';
  }

  const itemDescs = [
    {
      name: 'りんご',
      price: '100円',
    },
    {
      name: '玉ねぎ',
      price: '200円',
    },
    {
      name: 'にんじん',
      price: '300円',
    },
    {
      name: 'にんじん',
      price: '300円',
    },
  ]

  return (
    <> 
    <Form />
    <ShowHide />
    <Container>
      <h1>こんにちは</h1>
      <p>これはContainerコンポーネント内に表示されています。</p>
      <button>クリックしてね！</button>
    </Container>
    {itemDescs.map((itemDesc,index) => (
      <Item key={index} name={itemDesc.name} price={itemDesc.price}/>
    ))}
      <Profile name={'Kentaro Iwai'} age={ageCheck(34)} />
      <Profile name={'Yuto Iwai'} age={ageCheck(11)} />
      <Profile name={'Yuto Sato'} age={ageCheck()} />
       {/* 現在のカウントを表示 */}
      <Counter count={count} countUp={handleCountUp} countDown={handleCountDown} countReset={handleCountReset} />
      <Greeting name={'Kentaro'} />
      <Test />
      <p>こんにちは</p>
      <Button />
    </>
  );
}

export default App;
