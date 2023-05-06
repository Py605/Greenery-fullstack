import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import axios from 'axios';
import Model from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '@/Redux/ProductSlice';

function NewCart() {
  const [data, setdata] = useState([]);
  const [price, setprice] = useState(0);
  const [visible, setvisible] = useState(false);
  const [gmail, setgmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const revicedata = localStorage.getItem('cartData');
    setdata(JSON.parse(revicedata));
  }, []);

  //price function
  let sum = 0;
  useEffect(() => {
    data
      ? data.forEach(item => {
          priceCalculate(item.default_image.license);
        })
      : console.log('loadprice');
    function priceCalculate(pricedata) {
      sum += pricedata;
    }
    setprice(sum);
  }, [data]);

  //pay method
  const checkoutHandler = async (amount, gmail) => {
    console.log(gmail);
    localStorage.setItem('gmail', gmail);
    const {
      data: { key },
    } = await axios.get('http://www.localhost:4000/api/getkey');

    const {
      data: { order },
    } = await axios.post('http://localhost:4000/api/checkout', {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: 'USD',
      name: 'Greenery',
      description: 'payment to greenery',
      image: 'https://www.linkpicture.com/q/logo_903.png',
      order_id: order.id,
      callback_url: 'http://localhost:4000/api/paymentverification',
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#121212',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const [counter, setCounter] = useState(1);
  //store into redux
  const handledata = item => {
    dispatch(remove(item));
  };
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="mid-container">
        <h1 style={{ width: '220px' }}>Your Cart</h1>
        <div>

        {data ? (
          data.map((item, index) => (
            <div
              style={{
                border: '1px solid black',
                width: '80%',
                padding: '30px 20px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              id={index}
            >
              <img src={item.default_image.thumbnail} alt="plant" />

              <div className="cart-counter">
                <h4>Name</h4>
                <h3>{item.common_name}</h3>
              </div>

              <div className="cart-counter">
                <h4>Quantity</h4>
                <button onClick={() => counter !==1 ? setCounter(counter - 1) : counter}>-</button>
                <h3>{counter}</h3>
                <button onClick={() => setCounter(counter + 1)}>+</button>
              </div>

              <div className="cart-counter">
                <h4>Price</h4>
                <h3>${counter * item.default_image.license}</h3>
              </div>
              <div>
                <button onClick={() => handledata(item)}>x</button>
              </div>
            </div>
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
        {data ? (
          <div>
            <h1>Total -${price}</h1>
            <button onClick={() => setvisible('true')}>Proceed..</button>
          </div>
        ) : (
          console.log('empty')
        )}

        <Model
          isOpen={visible}
          style={{
            overlay: {
              backdropFilter: 'blue(50px)',
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
            },
          }}
        >
          <h1>Data form</h1>
          <input
            type="text"
            placeholder="Enter the gmail..."
            onChange={e => setgmail(e.target.value)}
          />
          <button onClick={() => setvisible(false)}>close model</button>
          <button onClick={() => checkoutHandler(price, gmail)}>
            Click To pay
          </button>
        </Model>
        </div>

      </div>
    </>
  );
}

export default NewCart;
