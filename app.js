// DECLARE VARIABLES
const mobileMenuList = document.getElementById('mobileMenuList');
const mobileMenuButton = document.querySelector('.mobile-menu');

// CREATE FUNCTIONS (toggle-menu)
function toggleMobileMenu() {
  mobileMenuList.classList.toggle('show');
  mobileMenuList.style.backgroundColor = '#6070ff';
  mobileMenuList.style.color = 'white';
  mobileMenuButton.classList.toggle('hidden');
}

// Add an event listener
toggleMobileMenu.addEventListener('click, mobileMenuList');

// Close function for mobile-menu
function closeMobileMenu() {
  mobileMenuList.classList.remove('show');
  mobileMenuButton.classList.remove('hidden');
}

// An event listener
closeMobileMenu.addEventListener('click', closeMobileMenu);
