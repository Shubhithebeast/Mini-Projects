import React, { useEffect, useState } from 'react'

const UseDate = () => {

    const locale ="en";
    const [today, setDate] = useState(new Date());

    useEffect(()=>{
        
        const timer = setInterval(()=>{
            setDate(new Date());
        },60*1000)

        return ()=>{
            clearInterval(timer);
        }
    },[])

    const day = today.toLocaleDateString(locale, {weekday:"long"});
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: "long"})}\n\n`;
    const time = today.toLocaleDateString(locale, {hour:"numeric", hour12:true, minute:"numeric"})


  return (
    data,time
  )
}

export default UseDate