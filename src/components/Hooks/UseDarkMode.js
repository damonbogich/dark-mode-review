import UseLocalStorage from './UseLocalStorage';
import {useEffect} from 'react';


export default function UseDarkMode() {
    const [darkState, setDarkState] = UseLocalStorage('darkMode', false);
    useEffect(() => {
        if (darkState === true) {
            document.body.classList.add('dark-mode')
        } 
        else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkState])
    return[darkState, setDarkState]
};