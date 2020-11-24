import "./styles.css";

const onClickAdd = () => {
  // テキストの値を取得し内容を削除する。
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncomleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div(未完了の部分)生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    const completeList = document.querySelector("#complete-list");
    completeList.appendChild(addTarget);
  });

  // button(削除)タグを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomleteList(deleteButton.parentNode);
  });

  //button(戻る)タグを作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 押された戻すボタンの親タグ(div)を完了リストから削除
    const deleteTarget = backButton.parentNode;
    document.querySelector("#complete-list").removeChild(deleteTarget);

    // テキスト取得
    const text = backButton.parentNode.firstChild.innerText;
    createIncompleteList(text);
  });

  //div(未完了)タグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(div);
};
document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
