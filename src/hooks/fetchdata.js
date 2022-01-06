import { useEffect, useState } from "react";


const FetchData = () =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const getData = async () => {
        try {
            const fetchingData = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            setData(fetchingData);
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }
    useEffect(() => {
        getData();
    }, []);

    return {data, loading, error};
};

export default FetchData;