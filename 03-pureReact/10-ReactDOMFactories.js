// ReactDOMFactories.h1(property, childNode)


ReactDOMFactories.h1(null, "Bakes salmon")

ReactDOMFactories.ul({"className" : "ingredients"},
  ReactDOMFactories.li(null, "연어 500그램"),
  ReactDOMFactories.li(null, "잣 1컵"),
  ReactDOMFactories.li(null, "버터 상추 2컵"),
  ReactDOMFactories.li(null, "옐로 스쿼시 1개"),
  ReactDOMFactories.li(null, "올리브 오일 1/2컵"),
  ReactDOMFactories.li(null, "마늘 3쪽")
)

var items = [
  "연어 500그램",
  "잣 1컵",
  "버터 상추 2컵",
  "옐로 스쿼시 1개",
  "올리브 오일 1/2컵",
  "마늘 3쪽"
]

var list = ReactDOMFactories.ul(
  {className : "ingredients"},
  items.map((ingredient, key) =>
    ReactDOMFactories.li({key}, ingredient)
  )
)

ReactDOM.render(
  list,
  document.getElementById('react-container')
)
