import React from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    // JSONPlaceholderのResouceからURLをコピー。関数の引数には結果が渡される
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // 取得失敗時の処理
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    // JSONPlaceholderのResouceからURLをコピー。関数の引数には結果が渡される
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // 取得失敗時の処理
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}
