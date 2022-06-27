import { useState } from "react";
import "./css.css"
const PureComponent = () => {
    const [name , setName] = useState("RAJDEEP K. GAUTAM");
    return(
        <div className="pureComp">
            <h1 className="Heading">Pure Component</h1>
            <div className="Pure">
                <p>A React component is considered pure if it renders the same output for the same state and props.</p>
                <p>React provides PureComponent to Avoid unnecessary rendering the component</p>
                <ul>
                    <li>It Checks that whether the prevoius state or Props are equals to Current state or Props</li>
                    <li>f the prevoius state or Props and current state or Props are same it will not rerender the component.</li>
                    <li>If the both states or Props or not same it will rerender the component.</li>
                </ul>
                <br/>
            </div>
            <div className="example">
            <h1>Name: {name}</h1>
            <button onClick={()=>setName("RKG")}>changeName</button>
            </div>
        </div>
    )
}

export default PureComponent;