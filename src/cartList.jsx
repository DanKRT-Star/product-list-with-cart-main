function CartList({onRemoveItem, cart = [], currentTotalQuantity = 0, currentTotalPrice}) {
    const confirmOrder = () => {
        const ConfirmedBox = document.querySelector('.confirmedLayout').classList.add('active');
    }

    return (
        <div className="cartList bg-white py-6 px-5 rounded-md lg:w-96 lg:h-fit">
            <h2 className="text-2xl font-bold text-red pb-6">Your Cart {`(${currentTotalQuantity})`}</h2>
            {cart.length === 0 ? (
                <div className="flex flex-col items-center">
                    <img className="mb-6" src="/assets/images/illustration-empty-cart.svg" alt="empty cart image" />
                    <p className="mb-6 text-rose-500 font-semibold">Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <div className="itemsContainer">
                        {cart.map(item => (
                            <div key={item.name} className="flex items-center justify-between py-5 border-b-[1px] border-rose-400 border-solid">
                                <div>
                                <p className="mb-2 font-bold">{item.name}</p>
                                <p className="text-rose-500">
                                    <span className="text-red font-bold mr-2.5">{`${item.quantity}x`}</span>
                                    {` @ $${item.price.toFixed(2)}`}
                                    <span className="ml-2.5 font-semibold">{`$${(item.price * item.quantity).toFixed(2)}`}</span>
                                </p>
                                </div>
                                <button type="button" onClick={() => onRemoveItem(item.name)} className="cursor-pointer hover:brightness-50 rounded-full border-2 border-solid border-rose-400 w-5 h-5 flex items-center justify-center transition-all duration-300">
                                    <img src="./src/assets/images/icon-remove-item.svg" alt="remove item" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between py-5">
                        <p>Order Total</p>
                        <h3 className="text-2xl font-bold">{currentTotalPrice}</h3>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 bg-rose-50 rounded-md py-3 mb-5">
                        <img src="./src/assets/images/icon-carbon-neutral.svg" alt="icon carbon neutral"/>
                        <p>This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                    </div>

                    <button onClick={confirmOrder} type="button" className="w-full rounded-3xl py-3 bg-red text-white cursor-pointer">Confirm Order</button>
                </>
            )}
        </div>
    )
}

export default CartList