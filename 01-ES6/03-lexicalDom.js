var div, container = document.getElementById('container')
for (let i = 0; i < 5; i++) {
  div = document.createElement('div')
  div.innerText = "button"
  div.onclick = function () {
    alert('이것은 박스 #' + i + '입니다.')
  }
  container.appendChild(div)
}
