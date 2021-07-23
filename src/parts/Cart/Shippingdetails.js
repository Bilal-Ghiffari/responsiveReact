import React, {useEffect} from 'react';
import fetch from 'helpers/Fetch';
import useAsnyc from 'helpers/Hooks/useAsnyc';
import useForm from 'helpers/Hooks/useForm';
import Courier from './Component-Shipping-Details/Courier';
import Payment from './Component-Shipping-Details/Payment';


import { useHistory } from 'react-router-dom';
import { useGlobalContext } from 'helpers/Hooks/useGlobalContext';


export default function Shippingdetails() {
    const {data, run, isLoading} = useAsnyc();
    useEffect(() => {
        run(fetch({url:"/api/checkout/meta"}))
    }, [run])

    console.log(data)
    const {state: payload, fnUpdateState} = useForm({
        CompleteName: "",
        EmailAddress: "",
        Address: "",
        PhoneNumber: "",
        Courier: "",
        Payment: ""
    })
console.log(payload)

    // pengisian data payload
    const isSubmitDisabled = Object.keys(payload).filter(key => {
        return payload[key] !== ""
    }).length === Object.keys(payload).length

    // menambah data ke Api
    const history = useHistory();
    const {dispatch} = useGlobalContext();

    async function fnSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch({
                url: `/api/checkout`, 
                method: "POST",
                body: JSON.stringify(payload),
            })
            if(response){
                history.push("/Success")
                dispatch({
                    type: "RESET_CART",
                })
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
    <div className="w-full mt-10 md:w-4/12" id="shipping-detail">
                <div className="bg-gray-100 px-4 py-10 md:p-8 md:rounded-3xl">
                <form onSubmit={fnSubmit} >
                    <div className="flex flex-start mb-6">
                    <h3 className="text-2xl text-yellow-900">Shipping Details</h3>
                    </div>

                    <div className="flex flex-col mb-4">
                    <label htmlFor="CompleteName" className="text-sm mb-2"
                        >Complete Name</label
                    >
                    <input
                        onChange={fnUpdateState}
                        value={payload.CompleteName}
                        type="text"
                        name="CompleteName"
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Input your name"
                    />
                    </div>

                    <div className="flex flex-col mb-4">
                    <label htmlFor="EmailAddress" className="text-sm mb-2">Email Address</label>
                    <input
                        onChange={fnUpdateState}
                        value={payload.EmailAddress}
                        type="email"
                        name="EmailAddress"
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Input your email address"
                    />
                    </div>

                    <div className="flex flex-col mb-4">
                    <label htmlFor="Address" className="text-sm mb-2">Address</label>
                    <input
                        onChange={fnUpdateState}
                        value={payload.Address}
                        type="text"
                        name="Address"
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Input your address"
                    />
                    </div>

                    <div className="flex flex-col mb-4">
                    <label htmlFor="PhoneNumber" className="text-sm mb-2"
                        >Phone Number</label
                    >
                    <input
                        onChange={fnUpdateState}
                        value={payload.PhoneNumber}
                        type="tel"
                        name="PhoneNumber"
                        className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                        placeholder="Input your phone number"
                    />
                    </div>

                    {/* Choose Courier & Payment */}

                    <div className="flex flex-col mb-4">
                    <label htmlFor="complete-name" className="text-sm mb-2">
                        Choose Courier
                    </label>
                        <div className="flex -mx-2 flex-wrap">
                            <Courier data={data} isLoading={isLoading} fnUpdateState={fnUpdateState} />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="complete-name" className="text-sm mb-2">
                        Choose Payment
                    </label>
                    
                    <div className="flex -mx-2 flex-wrap">
                        <Payment data={data} isLoading={isLoading} fnUpdateState={fnUpdateState} />
                    </div>
                    </div>
                    <div className="text-center">
                    <button
                        type="submit"
                        disabled={!isSubmitDisabled}
                        className="bg-yellow-800 text-white hover:bg-black hover:text-yellow-800 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
                    >
                        Checkout Now
                    </button>
                    </div>
                </form>
                </div>
    </div>
    )
}
