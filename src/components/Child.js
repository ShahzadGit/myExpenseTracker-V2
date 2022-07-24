import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTransaction} from './../store/action'

export const Child = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    // const transactions = useSelector((state) => {
    //     return state.transactions
    // })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Submit-->",e)
        let newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: text, 
            amount: amount
        }

        dispatch(addTransaction(newTransaction))
        setAmount(0)
        setText('')
    }
    return (
        <div className="history">
            <div>
                <h4>Add New Transaction<hr /></h4>
            </div>

            <form className="trans-form" onSubmit={handleSubmit}>
                <label>
                    Text<br />
                    <input type="text" value = {text} onChange={(e) => setText(e.target.value) } placeholder="Enter Discription" required />
                </label> <br />
                <label>
                    Amount(-ve for expese, +ve for Income)<br />
                    <input type="number" value = {amount} onChange={(e) => setAmount(e.target.value) } placeholder="Enter Amount" required />
                </label><br />
                <input type="submit" value="Add Transaction" />
            </form>

        </div>
    )
}
