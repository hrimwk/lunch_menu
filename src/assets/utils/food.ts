interface Category {
  category: string;
  id: number;
  value: string;
}
interface Menu {
  categoryName: string;
  name: string;
}

const menuCategory: Category[] = [
  { id: 0, category: "카테고리를 선택해주세요.", value: "" },
  { id: 1, category: "한식", value: "한식" },
  { id: 2, category: "양식", value: "양식" },
  { id: 3, category: "중식", value: "중식" },
  { id: 4, category: "일식", value: "일식" },
  { id: 5, category: "분식", value: "분식" },
];
const menu: Menu[] = [
  { categoryName: "한식", name: "국밥" },
  { categoryName: "한식", name: "김치찜" },
  { categoryName: "한식", name: "보쌈" },
  { categoryName: "한식", name: "족발" },
  { categoryName: "양식", name: "파스타" },
  { categoryName: "양식", name: "스테이크" },
  { categoryName: "양식", name: "리조또" },
  { categoryName: "양식", name: "피자" },
  { categoryName: "중식", name: "자장면" },
  { categoryName: "중식", name: "탕수육" },
  { categoryName: "중식", name: "짬뽕" },
  { categoryName: "중식", name: "마라탕" },
  { categoryName: "일식", name: "초밥" },
  { categoryName: "일식", name: "라멘" },
  { categoryName: "일식", name: "돈까스" },
  { categoryName: "일식", name: "소바" },
  { categoryName: "분식", name: "떡볶이" },
  { categoryName: "분식", name: "순대" },
  { categoryName: "분식", name: "라볶이" },
  { categoryName: "분식", name: "김밥" },
];

export { menuCategory, menu };
