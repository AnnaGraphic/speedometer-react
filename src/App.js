import "./App.css";
import Car from "./components/Car";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type) {
    case "accelerate":{
      console.log('acc', state.speed);
      return { ...state, speed: state.speed +5}
    }
    case "brake":{
      console.log('brake', state.speed);
      return { ...state, speed: state.speed -5}
    }
    case "turnOff":{
      console.log('turn off', state.started);
      return {...state, started: false, speed: 0 };
    }
    case "turnOn": {
      console.log('turn on', state.started);
      return { ...state, started: true };
    }
    // better way to handle default?
    default: {
      return { ...state, speed: 0, started: true }
    }
  }
}

function App() {
  const initialState = {started: true, speed: 0};
  const [carState, dispatch]= useReducer(reducer, initialState);

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
    console.log('brake');
  }

  return (
    <div className="App">
      <Car />
      <button onClick={accelerate}>Accelerate</button>
      <button onClick={brake}>Brake</button>
    </div>
  );
}

export default App;
