import { useState, useEffect } from "react";
import JokesList from "../components/JokesList";

const JokesContainer = () => {
    const [jokes, setJokes] = useState([]);
    const [jokeType, setJokeType] = useState("ten")


    const loadData = async () => {
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${jokeType}`);
        const jsonData = await response.json();
        setJokes(jsonData);
        console.log(jsonData);
    }

    useEffect(() => {
        loadData();
    }, [jokeType]);

  
    
   


    return (  
        <>
            <JokesList jokes={jokes} setJokeType={setJokeType}/>
        </>
    );
}
 
export default JokesContainer;