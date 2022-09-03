import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
 
    const getTotal = (basket) => 
        basket?.reduce((amount, item) => parseFloat(item.price) + parseFloat(amount), 0)
    
    return (
        <div>
            {/* {getTotal(basket)}
            <p>Total Cost:${total}</p> */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal