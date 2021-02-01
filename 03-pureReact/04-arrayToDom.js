var items = [
  "연어 500그램",
  "잣 1컵",
  "버터 상추 2컵",
  "옐로 스쿼시 1개",
  "올리브 오일 1/2컵",
  "마늘 3쪽"
];

const dom = React.createElement(
  "ul",
  {className : "ingredients"},
  items.map((ingredient, i) => React.createElement("li", {key : i}, ingredient))
)

ReactDOM.render(dom, document.getElementById('react-container1'));
