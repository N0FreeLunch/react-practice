// no implement
// createClass is not support react vesion 16, 17, ...

const IngredientsList = React.createClass({
  displayName: "IngredientList",
  render() {
    return React.createElement("ul", {className : "ingredients"},
      this.props.items.map((ingredient, i) =>
        React.createElement("li", {key : i}, ingredient)
      )
    )
  }
})

const items = [
  "연어 500그램",
  "잣 1컵",
  "버터 상추 2컵",
  "옐로 스쿼시 1개",
  "올리브 오일 1/2컵",
  "마늘 3쪽"
]

ReactDOM.render(
  React.createElement(IngredientsList, {items}, null),
  document.getElementById('react-container')
)
