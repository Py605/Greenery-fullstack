import React, { useEffect, useState } from 'react';
//import Card from './Card';
import { fetchapi } from '../ApiCall/FetchApi';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '@/Redux/ProductSlice';

function CardList({ Number,filtertxt }) {

  //const [Number, setNumber] = useState(1);
  const [searchData,setsearchData]= useState([]);
  const dispatch = useDispatch();
 
  

    //api call by number
    useEffect(()=>{
      async function time(){
        const data = await fetchapi(`page=${Number}`)
       
        setsearchData(data.data)
       
      }
        
      time()
    },[])
    //api call by filter
    useEffect(()=>{
      
      async function time(){
        await setsearchData(null)
        const data = await fetchapi(`${filtertxt}=${Number}`)
       console.log(data);
        setsearchData(data.data)
       
      }
        
      time()
    },[filtertxt,Number])
    console.log(Number);
    
    //store into redux
    
    const handledata = (item)=>{
       dispatch(add(item))
       
       
    }
     const data = useSelector((state)=> state.cart);
    useEffect(()=>{
     
    
      localStorage.setItem('cartData',JSON.stringify(data))
    },[data])
  return (
    <div class="card-container">

   {
    searchData ? searchData.map((item,Index)=>(
      <div className="card" id={Index}>
      <div className='card-image'>
        <img
          className="card-img-top"
          src={item.default_image.thumbnail}
          width={300}
          height={200}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-name"> {item.common_name}</h5>
        <p className="card-rate">${item.default_image.license}.00</p>
        <button href="#" className="add-to-cart-btn" onClick={()=> handledata(item)}>
          Add to Cart
        </button>
      </div>
    </div>
    
    ))  : <h1>LOADING......</h1> 
   }
     
     
    </div>
  );
}

export default CardList;


{/* <div className="card-list" id={Index}>
<Card
  url={item.default_image.thumbnail}
  page={item.common_name}
  price={item.default_image.license}
  className="card"
/> */}