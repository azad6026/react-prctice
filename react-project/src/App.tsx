import "./App.css";
// import CalculatorZustand from "./components/calculator-zustand/CalculatorZustand";
import Calculator from "./projects/calculator/Calculator";
import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";
import Layout from "./projects/game-station/Layout";

function App() {
  return (
    <>
      <Layout children={undefined} />
      {/* <Calculator /> */}
    </>
  );
}

export default App;
