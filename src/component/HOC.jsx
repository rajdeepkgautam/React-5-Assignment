import "./css.css"
import CompA from "./leftClick";
import CompB from "./mouseHover";
const HOC = () => {
    return(
        <div className="HComplete">
            <h1 className="Heading">Higher Order Component</h1>
            <div className="Pure">
           <p>A higher-order component transforms a component into another component.</p>
           <p>Reason to use Higher-Order component:</p>
           <ul>
            <li>Easy to handle</li>
            <li>Get rid of copying the same logic in every component</li>
            <li>Makes code more readable</li>
           </ul>
           <p>It is also known as HOC.</p>
           <p>We use syntax to use HOC in another component: "const EnhancedComponent = higherOrderComponent(WrappedComponent);".</p>
            </div>
            <div className="example">
                <CompA />
                <CompB />
            </div>
        </div>
    )
}

export default HOC;