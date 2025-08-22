import { useState } from 'react'
import data from '/src/data.json'
import Card from './card'
import CartList from './cartList'
import ConfirmBox from './confirmBox'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const found = prevCart.find(item => item.name === product.name);
      if (found) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (name) => {
    setCart(prevCart => {
      return prevCart
        .map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    });
  };

  const removeItem = (name) => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = `$${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`;

  return (
    <>
      <main className='h-fit z-10 overflow-auto bg-rose-100 flex flex-col gap-6 font-red-hat px-5 py-6 leading-none text-sm lg:p-20 lg:flex-row'>
        <div className='flex flex-col lg:flex-1'>
          <h1 className='text-3xl font-extrabold mb-6'>Desserts</h1>

          <div className='menu flex flex-wrap items-center justify-start gap-6'>
            {data.map((item) => {
              const cartItem = cart.find(ci => ci.name === item.name);
              const quantity = cartItem ? cartItem.quantity : 0;
              return (
                <Card
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  mobileImg={item.image.mobile}
                  tabletImg={item.image.tablet}
                  desktopImg={item.image.desktop}
                  onAddToCart={() => addToCart(item)}
                  onDecrease={() => decreaseQuantity(item.name)}
                  quantity={quantity}
                />
              );
            })}
          </div>
        </div>

        <CartList 
          cart={cart} 
          currentTotalQuantity={totalQuantity} 
          currentTotalPrice={totalPrice}
          onRemoveItem={removeItem}
        />
      </main>

      <ConfirmBox
        setCart={setCart}
        cart={cart}
        totalPrice={totalPrice}
      />
    </>
  )
}

export default App
