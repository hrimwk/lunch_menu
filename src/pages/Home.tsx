import React, { Dispatch, SetStateAction, useState } from "react";

interface propsType {
  peopleNum: string;
  setNumber: Dispatch<SetStateAction<string>>;
}
function Home({ peopleNum, setNumber }: propsType) {
  const [categoryId, setId] = useState<string | null>(null);
  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
  };
  interface Category {
    category: string;
    id: number;
  }
  const menuCategory: Category[] = [
    { id: 1, category: "한식" },
    { id: 2, category: "양식" },
    { id: 3, category: "중식" },
    { id: 4, category: "일식" },
    { id: 5, category: "베트남요리" },
    { id: 6, category: "동남아요리" },
    { id: 7, category: "기타" },
  ];
  console.log("select", categoryId);
  return (
    <div>
      <div className="container">
        <div className="catecory-area">
          <p>원하는 카테고리를 선택해주세요.</p>
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
          <input />
        </div>
        <div className="button-area">
          <button>start</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
