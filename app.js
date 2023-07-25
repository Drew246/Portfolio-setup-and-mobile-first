function toggleMobileMenu() {
    var mobileMenuList = document.getElementById("mobileMenuList");
    mobileMenuList.classList.toggle("show");    
    var mobileMenuButton = document.querySelector(".mobile-menu");
    mobileMenuButton.classList.toggle("hidden");

}
function closeMobileMenu() {
    var mobileMenuList = document.getElementById("mobileMenuList");
    mobileMenuList.classList.remove("show");
    var mobileMenuButton = document.querySelector(".mobile-menu");
    mobileMenuButton.classList.remove("hidden");
  }


