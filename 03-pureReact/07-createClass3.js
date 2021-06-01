// no implement
// createClass is not support react vesion 16, 17, ...

const IngredientList = React.createClass({
  displayName : "IngredientsList",
  renderListItem(ingredient, i) {
    return React.createElement("li", {key:i}, ingredient)
  },
  render() {
    return React.createElement("ul", {className : "ingredients"},
      this.props.items.map(this.rednerListItem)
    )
  }
})
