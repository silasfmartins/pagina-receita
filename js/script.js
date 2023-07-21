const body = document.querySelector('body')
const main = document.querySelector('main')
const checkbox = document.querySelector("#checkbox")

checkbox.addEventListener('change', changeTheme)

function changeTheme() {
  document.body.classList.toggle('dark')

  if (body.classList.contains('dark')) {
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem("theme", "light")
  }
  else {
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem("theme", "dark")
  }
}

body.classList.add(localStorage.getItem("theme"))