// simple structure of custom hooks:-
// these hooks can use your build in hooks as well
// function hello(){
//     return[]
// }

import {useEffect, useState} from"react"

function useCurrencyInfo(currency){
    const [data, setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json)
        .then((res)=>setData(res[currency]))
        console.log(data);
    }, [currency])
    return data
}
export default useCurrencyInfo;