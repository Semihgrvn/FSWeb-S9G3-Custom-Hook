import { useState } from "react";
import { useLocalStorage } from "../localStorageKullan";


export const geceModuAc = (initialValue) => {
    const [geceModu, setgeceModu] = useLocalStorage("geceModu", initialValue);
    // const geceModu = updatedValue => {
    // setValue(!initialValue)
    // };
    return [geceModu, setgeceModu];
};