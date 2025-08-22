function ConfirmBox({cart = [], totalPrice, setCart}) {
    const clearCart = () => {
        setCart([]);
        const confirmBox = document.querySelector('.confirmedLayout').classList.remove('active');
    }    

    return (
        <div className="confirmedLayout fixed z-50 pt-20 top-0 left-0 bg-black/50 w-screen h-screen md:flex md:items-center md:justify-center overflow-auto md:pt-0">
            <div className="w-full rounded-t-2xl bg-white p-5 flex  flex-col gap-5 items-start md:max-w-96 md:rounded-2xl">
                <img className="mt-5" src="./src/assets/images/icon-order-confirmed.svg" alt="confirm icon"/>

                <div>
                    <h1 className="text-3xl font-bold">Order Confirmed</h1>
                    <p className="text-rose-400">We hope you enjoy your food!</p>
                </div>

                <div className="orderedList bg-rose-100 w-full px-5 pb-5 rounded-md md:pt-2.5">
                    <div className="md:max-h-56 md:overflow-auto scrollbar-custom">
                        {cart.map(item => (
                            <div
                            key={item.name}
                            className="flex items-center gap-5 justify-between py-5 border-b border-rose-400 md:py-2.5"
                            >
                            
                            <div className="flex items-center gap-5 flex-1 overflow-hidden">
                                <img
                                className="w-1/3 rounded-sm md:w-1/4 lg:w-1/5"
                                src={item.image.thumbnail}
                                alt={`${item.name} image`}
                                />

                                <div className="flex-1 overflow-hidden">    
                                <p className="mb-2 font-bold truncate w-full">
                                    {item.name}
                                </p>
                                <p className="text-rose-500">
                                    <span className="text-red font-bold mr-2.5">{`${item.quantity}x`}</span>
                                    {` @ $${item.price.toFixed(2)}`}
                                </p>
                                </div>    
                            </div>

                            <p className="font-semibold w-fit">
                                {`$${(item.price * item.quantity).toFixed(2)}`}
                            </p>
                        </div>
                    ))}
                    </div>


                    <div className="flex items-center justify-between pt-5">
                        <p>Order Total</p>
                        <h2 className="font-bold text-2xl">{totalPrice}</h2>
                    </div> 
                </div>

                <button onClick={clearCart} type="button" className="cursor-pointer w-full rounded-3xl py-2.5 bg-red text-white">Start New Order</button>
            </div>
        </div>
    )
}

export default ConfirmBox