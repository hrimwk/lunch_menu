import { Dispatch, SetStateAction } from "react";

interface propsType {
  peopleNum: string;
  setNumber: Dispatch<SetStateAction<string>>;
}
function Result({ peopleNum, setNumber }: propsType) {
  return <div></div>;
}

export default Result;
