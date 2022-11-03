import { Dispatch, SetStateAction } from "react";

interface propsType {
  peopleNum: string;
  setNumber: Dispatch<SetStateAction<string>>;
  menuName: string;
}
function Result({ peopleNum, setNumber, menuName }: propsType) {
  return (
    <div>
      <h3>
        총 {peopleNum}
        {peopleNum.indexOf("인원을 선택하지 않았습니다.") === -1 && (
          <span>명</span>
        )}
      </h3>
      <h1>오늘의 추천메뉴는 {menuName}입니다.</h1>
    </div>
  );
}

export default Result;
