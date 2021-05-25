import React from "react";
// connect counter component to store
import { connect } from "react-redux";
// Import  Actions
import { counterMinus, counterPlus, counterDiv, counterMULL } from "../../actions/CounterActions";

const Counter = ({ counter, counterPlus, counterMinus, counterMULL, counterDiv }) => {
    return (
        <div className="qty mt-5">
            <button type="button" className="btn btn-success m-1" onClick={counterDiv}>/</button>
            <button type="button" class="btn btn-success m-1" onClick={counterMinus}>-</button>
            <input type="number" className="count mt-2" name="qty" value={counter} />
            <button type="button" className="btn btn-success m-1" onClick={counterPlus}>+</button>
            <button type="button" className="btn btn-success m-1" onClick={counterMULL}>*</button>

        </div>
    )
}
const mapStateToProps = ({ CounterReducer }) => {
    console.log("mapStateToProps ", CounterReducer)
    const { counter } = CounterReducer;
    return { counter };
}
const mapDispatchToProps = {
    counterPlus,
    counterMinus,
    counterDiv,
    counterMULL
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);