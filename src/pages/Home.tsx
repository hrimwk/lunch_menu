import React, { Dispatch, SetStateAction, useState } from 'react';
import Result from '../components/Result';
import '../assets/css/home.css';
import { menuCategory, menu } from '../assets/utils/food';

function Home() {
  const [categoryId, setId] = useState<string | null>(null);
  const [inputNum, setInput] = useState<string>('인원을 선택하지 않았습니다.');
  const [peopleNum, setNumber] = useState<string>(inputNum);
  const [menuName, setMenu] = useState<string>('');
  const [disable, setDisabled] = useState<boolean>(true);

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
    setDisabled(false);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const changeNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNumber(inputNum);
    const filterMenu = menu.filter((data) => categoryId === data.categoryName);
    setMenu(filterMenu[Math.floor(Math.random() * filterMenu.length)].name);
  };

  return (
    <div className="container">
      <section className="catecory-area">
        <label>원하는 카테고리를 선택해주세요.</label>
        <select onChange={changeCategory}>
          {menuCategory.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.category}
              </option>
            );
          })}
        </select>
      </section>
      <section className="people-num-area">
        <label>인원수를 적어주세요</label>
        <input type="number" min="0" placeholder="인원수를 적어주세요." onChange={changeInput} />
      </section>
      <section className="button-area">
        <button onClick={changeNum} disabled={disable}>
          start
        </button>
      </section>
      <section className="result-area">
        <Result peopleNum={peopleNum} menuName={menuName} />
      </section>
    </div>
  );
}

export default Home;
