import CounterHOC from "./HOComponent";

function CompA(Props){
    const { Counter , HandleCounter }= Props;
    return(
        <div>
        <h1>Counter: {Counter}</h1>
        <button onClick={HandleCounter}>LeftClick To Change</button>
        </div>
    )
}
const EnhancedClickCounter = CounterHOC(CompA,1);

export default EnhancedClickCounter;