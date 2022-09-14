import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {

    const [city, setCity] = useState("toronto");
    const [temp, setTemp] = useState();
    const [description, setDescription] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();
    const [wind, setWind] = useState();
    const [icon, setIcon] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();
    const [daily, setDaily] = useState([]);

    const baseUrl = `https://api.openweathermap.org/data/2.5/`;
    const id = `5a873b6b606d9e2aa79aff040a0e7d63`;

    const concurrentRequests = [
        axios.get(`${baseUrl}weather?q=${city}&units=metric&appid=${id}`),
        axios.get(`${baseUrl}forecast/daily?q=${city}&cnt=6&units=metric&appid=${id}`),
    ]

    const fetchWeather = () => {
        setIsLoading(true);
        Promise.all(concurrentRequests)
            .then(result => {
                setTemp(result[0].data.main.temp.toFixed(0));
                setDescription(result[0].data.weather[0].main);
                setHumidity(result[0].data.main.humidity + " %");
                setWind(result[0].data.wind.speed + " km/h");
                setPressure(result[0].data.main.pressure + " hPa");
                setIcon(result[0].data.weather[0].icon);
                setSunrise(result[0].data.sys.sunrise);
                setSunset(result[0].data.sys.sunset);
                setDaily(result[1].data);
                setIsLoading(false);
            }).catch((er) => {
                console.log(error);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchWeather();
    }, [city]);

    return (
        <WeatherContext.Provider
            value={{
                city,
                setCity,
                isLoading,
                temp,
                description,
                humidity,
                wind,
                pressure,
                icon,
                sunrise,
                sunset,
                daily
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}
