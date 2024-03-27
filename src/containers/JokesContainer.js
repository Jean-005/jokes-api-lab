import { useState, useEffect } from "react";

const JokesContainer = () => {
    const [jokes, setJokes] = useState([]);


    const loadData = async () => {
        const response = await fetch("https://raw.githubusercontent.com/15Dkatz/official_joke_api/blob/master/jokes/index.json");
        const jsonData = await response.json();
        setJokes(jsonData);
        console.log(jsonData);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    return (  


        <>
        
        
        
        
        </>
    );
}
 
export default JokesContainer;