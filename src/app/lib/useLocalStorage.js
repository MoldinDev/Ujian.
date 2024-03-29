import {useState, useEffect} from "react"

export function useLocalStorage(key, fallbackValue) {
    const [value, setValue] = useState(fallbackValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        if(stored !== "undefined") {
            setValue(stored ? JSON.parse(stored) : fallbackValue);
        }
    }, [fallbackValue, key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}