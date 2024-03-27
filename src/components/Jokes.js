import "./Joke.css"

const Jokes = ({ joke }) => {


    return ( 


        <>
        <hr></hr>
        <p>Joke type: {joke.type}</p>
        <li>Setup: {joke.setup}</li>
        <li>Punchline: {joke.punchline}</li>

        </>
     );
}
 
export default Jokes;