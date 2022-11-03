import { Dispatch, SetStateAction } from "react";
import "../assets/css/result.css";

interface propsType {
  peopleNum: string;
  menuName: string;
}

function Result({ peopleNum, menuName }: propsType) {
  return (
    <div>
      <p className="total-num">
        총 {peopleNum}
        {peopleNum.indexOf("인원을 선택하지 않았습니다.") === -1 && (
          <span>명</span>
        )}
      </p>
      <p className="result">
        오늘의 추천메뉴는 <span>{menuName}</span>입니다.
      </p>
    </div>
  );
}

export default Result;
