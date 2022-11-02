import React, { Dispatch, SetStateAction, useState } from "react";
import Result from "./Result";

function Home() {
  const [categoryId, setId] = useState<string | null>(null);
  const [inputNum, setInput] = useState<string>("");
  const [peopleNum, setNumber] = useState<string>(inputNum);
  const [menuName, setMenu] = useState<string>("");
  interface Category {
    category: string;
    id: number;
  }
  interface Menu {
    categoryNum: string;
    name: string;
  }

  const menuCategory: Category[] = [
    { id: 0, category: "" },
    { id: 1, category: "한식" },
    { id: 2, category: "양식" },
    { id: 3, category: "중식" },
    { id: 4, category: "일식" },
    { id: 5, category: "분식" },
  ];
  const menu: Menu[] = [
    { categoryNum: "1", name: "국밥" },
    { categoryNum: "1", name: "김치찜" },
    { categoryNum: "2", name: "파스타" },
    { categoryNum: "2", name: "스테이크" },
    { categoryNum: "3", name: "자장면" },
    { categoryNum: "3", name: "짬뽕" },
    { categoryNum: "4", name: "초밥" },
    { categoryNum: "4", name: "라멘" },
    { categoryNum: "5", name: "떡볶이" },
    { categoryNum: "5", name: "순대" },
  ];
  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const changeNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNumber(inputNum);
    const filterMenu = menu.filter((data) => categoryId == data.categoryNum);
    setMenu(filterMenu[Math.floor(Math.random() * filterMenu.length)].name);
  };

  return (
    <div className="container">
      <div className="catecory-area">
        <label>원하는 카테고리를 선택해주세요.</label>
        <select onChange={changeCategory}>
          {menuCategory.map((data) => {
            return (
              <option key={data.id} value={data.id}>
                {data.category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="people-num-area">
        <input
          type="text"
          placeholder="인원수를 적어주세요."
          onChange={changeInput}
        />
      </div>
      <div className="button-area">
        <button onClick={changeNum}>start</button>
      </div>
      <Result peopleNum={peopleNum} setNumber={setNumber} menuName={menuName} />
    </div>
  );
}

export default Home;
