function Card({onAddToCart, onDecrease, name, category, price, mobileImg, tabletImg, desktopImg, quantity}) {
    return (
        <div className="card w-full flex flex-col gap-7 md:w-[calc(50%-12px)] lg:w-[calc(33.33%-24px)]">
            <div className="imgContainer relative">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={desktopImg}/>
                    <source media="(min-width: 768px)" srcSet={tabletImg}/>
                    <img 
                        className={`rounded-md w-full md:rounded-lg border-2 ${quantity >= 1 ? ' border-red' : ' border-transparent'} transition-all duration-300`}
                        src={mobileImg} 
                        alt={`${name} image`}
                    />
                </picture>

                <div className="absolute w-2/3 -bottom-[21.6px] left-1/2 -translate-x-1/2 rounded-3xl">
                {quantity === 0 ? (
                        <div onClick={onAddToCart} className="cursor-pointer flex items-center justify-center px-5 py-2.5 gap-2.5 bg-white border-2 rounded-3xl border-solid border-rose-400 hover:border-red transition-all duration-300">
                            <img src="./src/assets/images/icon-add-to-cart.svg" alt="cart icon"/>
                            <span className="font-semibold text-black">Add to Cart</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between px-3 py-2.5 bg-red text-white rounded-3xl border-2 border-solid border-red">
                            <button type="button" onClick={onDecrease} className="cursor-pointer w-5 h-5 rounded-full border-2 border-solid border-white flex items-center justify-center">
                                <img src="./src/assets/images/icon-decrement-quantity.svg" alt="icon decrement"/>
                            </button>

                            <p>{quantity}</p>

                            <button type="button" onClick={onAddToCart} className="cursor-pointer w-5 h-5 rounded-full border-2 border-solid border-white flex items-center justify-center">
                                <img src="./src/assets/images/icon-increment-quantity.svg" alt="icon increment"/>
                            </button>
                        </div>
                    )
                }
                </div>
            </div>

            <article className="infoContainer flex flex-col gap-2">
                <p className="text-rose-500">{category}</p>
                <p className="font-bold">{name}</p>
                <p className="font-bold text-red">{`$${price.toFixed(2)}`}</p>
            </article>
        </div>
    )
}

export default Card