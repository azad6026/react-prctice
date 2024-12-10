import "./App.css";
// import CalculatorZustand from "./components/calculator-zustand/CalculatorZustand";
import Calculator from "./projects/calculator/Calculator";
import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <HStack>
        <Button color="red">Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </HStack>
      <Calculator />
    </>
  );
}

export default App;
