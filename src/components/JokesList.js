import Jokes from "./Jokes";
import "./JokesList.css";

const JokesList = ({ jokes, setJokeType }) => {
    

    const mappedJokes = jokes.map((joke, index) => {
        return <Jokes joke={joke} key={index}/>
    })
    
    const setJokeTypeToProgramming = () => {
        setJokeType("programming/ten");
       
    }

    const setJokeTypeToKnock = () => {
        setJokeType("knock-knock/ten");
        
    }

    const setJokeTypeToDad = () => {
        setJokeType("dad/ten");
        
    }



    
    return ( 

        <>
            <h2>Ten Random Jokes</h2>
            <button onClick={setJokeTypeToProgramming}>Programming Jokes</button>
            <button onClick={setJokeTypeToKnock}>Knock-Knock Jokes</button>
            <button onClick={setJokeTypeToDad}>Dad Jokes</button>
            {mappedJokes}
        </>
     );
}
 
export default JokesList;