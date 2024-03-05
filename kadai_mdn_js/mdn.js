// 今日の日付を表示する関数を定義する
const date = new Date();
const month = date.getMonth() + 1; 
const day = date.getDate();
const year = date.getFullYear();
  
// 今日の日付を呼び出す
console.log(year + '年' + month + '月' + day + '日');
