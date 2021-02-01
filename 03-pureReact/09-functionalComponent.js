const IngredientsList = prop => {
  React.createElement("ul", {className: "ingredients"},
    props.items.map((ingredient, i) =>
      React.createElement("li", {key:i}, ingredient)
    )
  )
}
