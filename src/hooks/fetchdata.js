import { useEffect, useState } from "react";


export const FetchData = async () =>{
    const [data, setData] = useState('')

    const getData = async () => {
        try {
            const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            console.log(data);    
        } catch (error) {
            
        }
        
    }
    
    useEffect(() => {
        getData()
    }, []);

    return data;
}