import CounterHOC from "./HOComponent";


function CompC(Props){
    const{Counter , HandleCounter} = Props;
    return(
            <div>
            <h1 onMouseOver={HandleCounter}>On Mouse Hover: {Counter}</h1>
            </div>
    )
}

const EnhancedClickCounter = CounterHOC(CompC,+3);


export default EnhancedClickCounter;

/*import CounterHOC from "./HOComponent";


function CompC(Props){
    const{Counter , HandleCounter} = Props;
    return(
            <div>
            <h1 onMouseHover={HandleCounter}>On Mouse Hover Counter: {Counter}</h1>
            </div>
    )
}

const EnhancedClickCounter = CounterHOC(CompC, -2);


export default EnhancedClickCounter;*/