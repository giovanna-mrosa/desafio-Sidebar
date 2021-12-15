let toggleBtn = document.querySelector('.menu-icon')
let menu = document.querySelector('.menu')
let logo = document.querySelector('.logo-vet')
let menuOp = document.querySelector('.middle')
let userInfo = document.querySelector('.user')

toggleBtn.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    document.querySelector('.bottom').style.background = '#8ed7c6'
    logo.classList.remove('hidden')
    userInfo.classList.remove('hidden')
    menuOp.classList.remove('marg')
  } else {
    menu.classList.add('active')
    document.querySelector('.bottom').style.background = 'none'
    logo.classList.add('hidden')
    userInfo.classList.add('hidden')
    menuOp.classList.add('marg')
  }
})
