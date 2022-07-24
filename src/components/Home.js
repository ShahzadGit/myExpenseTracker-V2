import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Child } from './Child'
import {deleteTransaction} from './../store/action'


export const Home = () => {
    const transactions = useSelector((state) => {
        return state.transactions
    })

    const dispatch = useDispatch()

    let income = transactions.reduce(function (preVal, currVal) {
       // console.log(currVal.amount > 0)
        if (currVal.amount > 0)
            return preVal + Number(currVal.amount)
        else
            return preVal
    }, 0)

    let expense = transactions.reduce(function (preVal, currVal) {
        // console.log(currVal.amount > 0)
        if (currVal.amount < 0)
            return preVal + Number(currVal.amount)
        else
            return preVal
    }, 0)

    let balance = income + expense
    //console.log("Income-->", income)

    function handleClick(id){
        dispatch(deleteTransaction(id))
    }
    return (
        <div className="container">
            <h2>Expense Tracker</h2>
            <div className="balance">
                <h3>Your Balance<br />Rs. {balance}</h3>
            </div>

            <div className="incomExpense">
                <h4 style={{ color: "green" }}>INCOME<br />Rs. {income}</h4>
                <h4 style={{ color: "red" }}>EXPENSE<br />Rs. {expense}</h4>
            </div>

            <div className="history">
                <h4>History<hr /></h4>
                <ul className="list">
                    {transactions.map((v, i) => {
                        return (
                            <li key={i}>
                                <span>{v.text}</span>
                                <span>Rs.{v.amount}</span>
                                <button onClick={()=> handleClick(v.id) } className="delete-btn">x</button>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <Child />

        </div>
    )
}
