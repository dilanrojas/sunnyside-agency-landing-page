const hamburguer = document.querySelector('.hamburguer-btn')
const nav = document.querySelector('.pm-nav-list')

hamburguer.addEventListener('click', () => {
  nav.classList.toggle('show')
  nav.classList.toggle('no-scroll')
})