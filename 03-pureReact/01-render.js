var dish = React.createElement("h1", null, "구운연어");
ReactDOM.render(dish, document.getElementById('react-container1'));

var salmon = React.createElement("h1", {
  id : "recipe-0",
  "data-type" : "title"
}, "구운연어")

ReactDOM.render(salmon, document.getElementById('react-container2'));
