
//   .........  Hamburger Menu  ....
const menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('hideSidebar')
})