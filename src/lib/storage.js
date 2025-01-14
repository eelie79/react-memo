export function setItem(key, value) {
  // localStorage.setItem("memos", JSON.stringify(newMemos));
  localStorage.setItem(key, JSON.stringify(value));
}

// const [memos, setMemos] = useState(JSON.parse(localStorage.getItem("memo")) || []);
export function getItem(key) {
  // localStorage.setItem("memos", JSON.stringify(newMemos));
  return JSON.parse(localStorage.getItem(key));
}
