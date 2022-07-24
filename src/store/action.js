export const DELETE_TRANSACTION = "DELETE_TRANSACTION"
export const ADD_TRANSACTION = "ADD_TRANSACTION"

export const deleteTransaction=(id) => {
   // console.log("ID in deleTransaction-->", id)
    return(dispatch) => {
        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        });
    }
}

export const addTransaction=(transaction) => {
    return(dispatch)=>{
        // console.log("Transaction in Action-->", transaction)
        dispatch({
            type: ADD_TRANSACTION,
            payload: transaction
        });    
    }
}

// export const set_data = (data) => {
//     console.log("Data from action-> ", data)
//     return(dispatch) => {

//         dispatch({type: "SETDATA", data:data})
//     }
// }
