// no implement
// createClass is not support react vesion 15, 16, 17, ...

const IngredientsList = React.createClass({
  displayName : "IngredientsList",
  render() {
    return React.createElement("ul", {"className" : "ingredients"},
      React.createElement("li", null, "연어 500그램"),
      React.createElement("li", null, "잣 1컵"),
      React.createElement("li", null, "버터 상추 2컵"),
      React.createElement("li", null, "옐로 스쿼시 1개"),
      React.createElement("li", null, "올리브 오일 1/2컵"),
      React.createElement("li", null, "마늘 3쪽"),
    )
  }
})

const list = React.createElement(IngredientsList, null, null)

ReactDOM.render(
  list,
  document.getElementById('react-container')
)
