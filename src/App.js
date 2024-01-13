import "./App.css";
import Car from "./components/Car";
import { useReducer, createContext } from "react";

export const CarContext = createContext();

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
  const initialState = {started: false, speed: 0};
  const [carState, dispatch]= useReducer(reducer, initialState);

  return (
    <CarContext.Provider value={{ carState, dispatch }}>
    <div className="App">
      <Car />
    </div>
    </CarContext.Provider>
  );
}

export default App;
