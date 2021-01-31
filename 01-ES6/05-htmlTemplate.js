const article = {
  title : "title"
}

document.body.innerHTML = `
  <section>
    <header>
      <h1>The Html5 Blog</h1>
    </header>
    <article>
      <h2>${article.title}</h2>
      ${article.title}
    </article>
    <footer>
      <p>copyright ${new Date().getYear()} | The HTML5 Blog</p>
    </footer>
`
