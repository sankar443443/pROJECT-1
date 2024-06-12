import React, { useReducer } from 'react'

export default function UseReducerHook() {

    /* 
        const[state,dispatch] = useReducer(FUNC_Name,Initial_value)
    */

        const datum = {
            Name:'',
            Email:'',
            Phone:0
        }

        function Reducer(inside,outside){
            switch (outside.type){
                case 'change-text':{
                    return{
                        ...inside,
                        [outside.field]:outside.vals
                    }
                }
            }
        }

        const[state,dispatch] = useReducer(Reducer,datum);

        function HandleChange(e){
            dispatch({
                type:'change-text',
                field:e.target.name,
                vals:e.target.value
            })
        }
  return (
    <div>
        <form action="">
            <label htmlFor="">Name</label>
            <input 
                type="text" 
                name="Name" 
                value={state.Name}
                id="" 
                onChange={HandleChange}
            />

            <label htmlFor="">Email</label>
            <input 
                type="email" 
                name="Email" 
                value={state.Email}
                id="" 
                onChange={HandleChange}

            />

            <label htmlFor="">Phone</label>
            <input 
                type="number" 
                name="Phone"
                value={state.Phone} 
                id="" 
                onChange={HandleChange}
            />
        </form>


        <h1>Name: {state.Name}</h1>
        <h1>Email: {state.Email}</h1>
        <h1>Phone: {state.Phone}</h1>
    </div>
  )
}
