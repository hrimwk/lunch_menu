import { Dispatch, SetStateAction, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  const [peopleNum, setNumber] =
    useState<string>("인원을 선택하지 않았습니다.");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home peopleNum={peopleNum} setNumber={setNumber} />}
        />
        <Route
          path="/result"
          element={<Result peopleNum={peopleNum} setNumber={setNumber} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
