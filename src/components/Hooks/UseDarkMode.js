import UseLocalStorage from './UseLocalStorage';
import {useEffect} from 'react';


export const useDarkMode = function(initialValue) {
    const [darkMode, setDarkMode] = UseLocalStorage("darkMode", initialValue);

    useEffect(() => {
        if(darkMode === true) {
            document.querySelector('body').classList.add('dark-mode')
        }
        else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode])
    return [darkMode, setDarkMode];
};