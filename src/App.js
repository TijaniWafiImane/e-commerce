import './App.css';
import Header from './component/Header';
import Slide from './component/Slide';
import Map from './component/Map';
import Cards from './component/Card';
import Panier from './component/Panier';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardGroup } from 'react-bootstrap';

function App() {
  const [Products,setProducts]=useState(null)
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=4').then(
      (res)=>{setProducts(res.data)}
    )
  })
  return (
    <div className="App">
      <Panier/>
      <Header/>
      <Slide/>

   
     
   <div>
   <CardGroup>
    {Products!==null?Products.map(items=><Cards key={items.id} src={items.image} title={items.title} prix={items.price} text={items.text}/>):""}

    </CardGroup>
    <Map/>
    
    

   </div>
    </div>
  );
}

export default App;
