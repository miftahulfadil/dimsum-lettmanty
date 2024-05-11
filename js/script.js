// Toggle class active
const Navbarnav = document.querySelector('.Navbar-nav');
// ketika lettmanty menu di klik
document.querySelector('#lettmanty-menu').onclick = () => {
  Navbarnav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const lettmanty = document.querySelector('#lettmanty-menu');

document.addEventListener('click', function (e) {
  if (!lettmanty.contains(e.target) && !Navbarnav.contains(e.target)) {
    Navbarnav.classList.remove('active');
  }
});
