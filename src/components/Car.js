import React, { useContext } from "react";
import { CarContext } from "../App";
import ReactSpeedometer from "react-d3-speedometer";

export default function Car() {

  const { carState, dispatch } = useContext(CarContext);

  const accelerate = () => {
    if (carState.started === true) {
      dispatch({type: "accelerate"});
      //is not workin since dispatch is async
      //console.log('Current state after accelerate:', carState);
    }
  };
  const brake = () => {
    if (carState.speed >0) {
      dispatch({type: "brake"});
    }
  }
  
  const startCar = () => {
    (carState.speed <= 0 && carState.started) ? dispatch({type: "turnOff"}) : dispatch({type: "turnOn"});
  }

  return (
    <div className="car">
      <ReactSpeedometer
        needleTransitionDuration={4000}
        needleTransition="easeElastic"
        />
      <button onClick={accelerate}>Accelerate</button>
      <button onClick={brake}>Brake</button>
      <button
          onClick={startCar} >{carState.started ? 'stop' : 'start'}</button>
    </div>
  )
}
