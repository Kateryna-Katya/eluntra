document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.5 19.6875C22.9334 19.6877 23.35 19.8546 23.6637 20.1537C23.9773 20.4528 24.1639 20.861 24.1847 21.2939C24.2055 21.7268 24.059 22.1511 23.7756 22.4789C23.4921 22.8066 23.0933 23.0128 22.662 23.0546L22.5 23.0625H4.5C4.06663 23.0623 3.64996 22.8954 3.33632 22.5963C3.02267 22.2972 2.83611 21.889 2.81529 21.4561C2.79446 21.0232 2.94097 20.5989 3.22445 20.2711C3.50793 19.9434 3.90665 19.7372 4.338 19.6954L4.5 19.6875H22.5ZM22.5 11.8125C22.9476 11.8125 23.3768 11.9903 23.6932 12.3068C24.0097 12.6232 24.1875 13.0524 24.1875 13.5C24.1875 13.9476 24.0097 14.3768 23.6932 14.6932C23.3768 15.0097 22.9476 15.1875 22.5 15.1875H4.5C4.05245 15.1875 3.62322 15.0097 3.30676 14.6932C2.99029 14.3768 2.8125 13.9476 2.8125 13.5C2.8125 13.0524 2.99029 12.6232 3.30676 12.3068C3.62322 11.9903 4.05245 11.8125 4.5 11.8125H22.5ZM22.5 3.9375C22.9476 3.9375 23.3768 4.11529 23.6932 4.43176C24.0097 4.74822 24.1875 5.17745 24.1875 5.625C24.1875 6.07255 24.0097 6.50178 23.6932 6.81824C23.3768 7.13471 22.9476 7.3125 22.5 7.3125H4.5C4.05245 7.3125 3.62322 7.13471 3.30676 6.81824C2.99029 6.50178 2.8125 6.07255 2.8125 5.625C2.8125 5.17745 2.99029 4.74822 3.30676 4.43176C3.62322 4.11529 4.05245 3.9375 4.5 3.9375H22.5Z" fill="white" />
</svg>
    `;
  
    const crossIcon = `
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.307 5.19265C18.6136 4.88636 19.0263 4.70977 19.4596 4.69946C19.8928 4.68915 20.3134 4.84591 20.6342 5.13727C20.955 5.42863 21.1515 5.83224 21.1828 6.26448C21.2141 6.69671 21.078 7.12443 20.8025 7.45901L20.6935 7.57913L7.96561 20.3071C7.65902 20.6133 7.24635 20.7899 6.8131 20.8002C6.37986 20.8105 5.95925 20.6538 5.63844 20.3624C5.31763 20.0711 5.12121 19.6675 5.08988 19.2352C5.05855 18.803 5.19471 18.3753 5.47015 18.0407L5.57913 17.9206L18.307 5.19265Z" fill="white" />
  <path d="M20.307 18.0338C20.6133 18.3404 20.7899 18.7531 20.8002 19.1863C20.8105 19.6196 20.6538 20.0402 20.3624 20.361C20.0711 20.6818 19.6675 20.8782 19.2352 20.9095C18.803 20.9409 18.3753 20.8047 18.0407 20.5293L17.9206 20.4203L5.19264 7.69237C4.88636 7.38578 4.70976 6.97311 4.69945 6.53986C4.68915 6.10662 4.84591 5.68601 5.13727 5.3652C5.42863 5.04439 5.83224 4.84797 6.26447 4.81664C6.69671 4.78531 7.12443 4.92147 7.45901 5.19691L7.57913 5.30589L20.307 18.0338Z" fill="white" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });