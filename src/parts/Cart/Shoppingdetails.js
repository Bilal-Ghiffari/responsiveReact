import React, {useState}from 'react';
import {useGlobalContext} from 'helpers/Hooks/useGlobalContext';
import { Link } from 'react-router-dom'
import 'helpers/Format/currency';
import 'helpers/Format/numbring';

export default function Shoppingdetails() {
    const {state, dispatch} = useGlobalContext();
    const [card, setCard] = useState(Object.values(state.cart))
    const items = Object.keys(state.cart).length;

        const itemPrice = card.reduce((prev, item) => {
            return prev + (item.price * item.count)
        }, 0)
        const shippingPrice = itemPrice > 2000 ? 15000 : 0; 
        const totalPrice = itemPrice + shippingPrice;
    
    const reduction =  _id => {
        card.filter(item => {
            if (item.id === _id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
            console.log(item.id)
        })
        setCard([...card])
    }

    const increase = _id => {
        card.filter(item => {
            if (item.id === _id) {
                item.count += 1;
            }
        })
        setCard([...card])
    }


    return (

        <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                <h3 className="text-2xl text-yellow-900">Shopping Cart</h3>
            </div>
                <div className="border-b border-gray-200 mb-4 hidden md:block">
                    <div className="flex flex-start items-center pb-2 -mx-4">
                        <div className="px-4 flex-none">
                        <div className="" style={{width: 90}}>
                            <h6>Photo</h6>
                        </div>
                        </div>
                        <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Product</h6>
                        </div>
                        </div>
                        <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Price</h6>
                        </div>
                        </div>
                        <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Quantity</h6>
                        </div>
                        </div>
                        <div className="px-4 w-2/12">
                        <div className="text-center">
                            <h6>Action</h6>
                        </div>
                        </div>
                    </div>
                </div>
            {
                Object.keys(state.cart).length === 0 ? (
                    <p id="cart-empty" className="text-center py-8">
                        Ooops... Cart is empty{" "}
                        <Link to="/" className="underline">Shop Now</Link>
                    </p>
                ) : (
                    Object.keys(state.cart).map((key) => {
                        const item = state.cart[key]
                        return (
                            <div className="flex flex-start flex-wrap items-center mb-10 -mx-9" key={key}>
                                <div className="px-4 flex-none">
                                    <div className="" style={{width: 90, height: 90}}>
                                        <img
                                            src={item.imgUrls[0]}
                                            alt={item.title}
                                            className="object-cover rounded-xl w-full h-full"
                                        />
                                    </div>
                                </div>
                                {/* Start Mobile */}
                                <div className=" px-12 md:px-4 w-auto flex-1 md:w-5/12">
                                    <div className="">
                                        <h6 className="font-semibold text-lg md:text-xl leading-8">
                                            {item.title}
                                        </h6>
                                        <span className="text-sm md:text-lg">
                                            {item.category.title}
                                        </span>
                                        <h6 className="font-semibold text-base md:text-lg block md:hidden py-3">
                                            {item.price.currency()}
                                        </h6>
                                        <div className="amount md:hidden pt-3">
                                            <button className="count" onClick={() => reduction(item.id)}>
                                                <i className="ri-subtract-line ri-lg"></i>
                                            </button>
                                                <span>{item.count}</span>
                                            <button className="count" onClick={() => increase(item.id)}>
                                                <i className="ri-add-fill ri-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Mobile */}
                                <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                                    <div className="">
                                        <h6 className="font-semibold text-lg">
                                            {item.price.currency()}
                                        </h6>
                                    </div>
                                </div>
                                    <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                                        <div className="amount">
                                            <button className="count" onClick={() => reduction(item.id)}>
                                                <i className="ri-subtract-line ri-lg"></i>
                                            </button>
                                                <span>{item.count}</span>
                                            <button className="count" onClick={() => increase(item.id)}>
                                                <i className="ri-add-fill ri-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                
                                <div className="px-4 w-2/12">
                                    <div className="text-center">
                                        <Link
                                            onClick={() => dispatch({type: "REMOVE_FROM_CART", id: item.id})}
                                            className="text-red-600 border-none focus:outline-none px-3 py-1"
                                        >
                                            <i class="ri-delete-bin-fill ri-xl"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
            {/* Total bag */}
                <div className={["p-10",
                    Object.keys(state.cart).length === 0 ? "hidden" : "block"
                ].join(" ")}>
                    <div className="text-lg font-semibold text-yellow-600">
                        <span>
                            Subtotal: {itemPrice.numbring()}
                        </span>
                        <div className="my-5">
                            <span>Shipping : {shippingPrice.numbring()}</span>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-400 border-dashed"></div>
                    <div className="mt-5">
                        <span className="text-xl font-semibold">
                            Bag Total :  {totalPrice.numbring()}</span>{" "}
                        <span className="text-yellow-600">{items === 1 ? "Item" : "Items"} {items}</span>
                    </div>
                </div>
            {/* End Total bag */}
    </div>
    )
}
