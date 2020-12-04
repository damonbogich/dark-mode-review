import { useState } from 'react';

export default function UseLocalStorage(key, initialValue) {
    //setting up state
    const [storedValue, setStoredValue] = useState(() => {
        //sets variable to item in local storage 
        const item = window.localStorage.getItem(key);
        //if that variable was truthy, we set it to initial state, if not we set the initial value
        return item ? JSON.parse(item) : initialValue
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}