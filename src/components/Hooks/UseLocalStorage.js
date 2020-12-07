import { useState } from 'react';

export default function UseLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        //get item from local storage by key 
        const item = window.localStorage.getItem(key);
        //parse and return JSON, or if undefinied return initialValue
        return item ? JSON.parse(item) : initialValue;
    });
    //sets value into local storage
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}