// DECLARE VARIABLES
const mobileMenuList = document.getElementById('mobileMenuList');
const mobileMenuButton = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// CREATE FUNCTIONS (toggle-menu)
function toggleMobileMenu() {
  mobileMenuList.classList.toggle('show');
  mobileMenuList.style.color = 'white';
  mobileMenuButton.classList.toggle('hidden');
  mobileMenuList.style.backgroundColor = '#6070ff';
  closeMenu.classList.toggle('show');
}

// Add an event listener
toggleMobileMenu.addEventListener('click, mobileMenuList');



// An event listener
closeMobileMenu.addEventListener('click', closeMobileMenu);
