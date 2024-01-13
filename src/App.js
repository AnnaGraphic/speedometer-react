import "./App.css";
import Car from "./components/Car";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type) {
    case "accelerate":{
      console.log('acc', state.speed);
      return { ...state, speed: state.speed +5}
    }
    case "break":{
      return { ...state, speed: state.speed -5}
    }
    // better way to handle default?
    default: {
      return state;
    }
  }
}

function App() {
  const initialState = {started: true, speed: 0};
  const [carState, dispatch]= useReducer(reducer, initialState);

  const accelerate = () => {
    if (initialState.started === true) {
      dispatch({type: "accelerate"});
      console.log('Current state after accelerate:', carState);
    }
  };
  const brake = () => {
    if (initialState.speed >0) {
      dispatch({type: "accelerate"});
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
