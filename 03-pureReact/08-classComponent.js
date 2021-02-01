// no implement

class IngredientsList extends React.Component {
  renderListItem(ingredient, i) {
    return React.createElement("li", {key : i}, ingredient)
  }

  render() {
    return React.createElement("ul", {className : "ingredients"},
      this.props.items.map(this.renderListItem)
    )
  }
}


const component = new IngredientsList();
component.render()
