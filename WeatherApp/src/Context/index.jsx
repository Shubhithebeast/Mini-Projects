import { useContext, createContext, useState,useEffect } from "react";
import axios from "axios";


const StateContext = createContext();


export const StateContextProvider =({children}) =>{
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Lalru');
    const [location, setLocation] = useState('');

    // fetch api

    const fetchWeather = async()=>{

        const options={
            method:"GET",
            url:"https://visual-crossing-weather.p.rapidapi.com/forecast",
            params:{
                aggregateHours:"24",
                location:place,
                ContentType:"json",
                unitGroup:"metric",
                shortColumnNames:0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
              }
        }

        try{
            const response = await axios.request(options);
            console.log(response.data);

            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);


        }catch(error){
            console.error(error);

            // is api thow error
            alert("This place is not exist");
        }
    }

    useEffect(()=>{
        //fetchWeather()
    },[place])

    useEffect(()=>{
        console.log(values);
    },[values])

    return (
        <StateContext.Provider values={{
            weather,setPlace, values, location
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=> useContext(StateContext);