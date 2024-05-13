import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/oshi-002')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    } ,[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github following: {data.following}</div>
    )
}

export default Github
