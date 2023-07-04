const body = document.querySelector('body')
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
  document.getElementById("current-theme").innerHTML = localStorage.theme
}

body.classList.add(localStorage.getItem("theme"))
document.getElementById("currentTheme").innerHTML = localStorage.theme
