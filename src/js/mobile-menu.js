document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.3334 20.4166C23.7828 20.4168 24.2149 20.5899 24.5402 20.9001C24.8655 21.2102 25.0589 21.6336 25.0805 22.0825C25.1021 22.5314 24.9502 22.9714 24.6562 23.3113C24.3622 23.6513 23.9487 23.8651 23.5014 23.9084L23.3334 23.9166H4.66675C4.21733 23.9164 3.78522 23.7432 3.45996 23.4331C3.13471 23.123 2.94123 22.6996 2.91964 22.2507C2.89804 21.8018 3.04997 21.3618 3.34395 21.0219C3.63793 20.6819 4.05143 20.4681 4.49875 20.4248L4.66675 20.4166H23.3334ZM23.3334 12.2499C23.7975 12.2499 24.2427 12.4343 24.5709 12.7625C24.899 13.0907 25.0834 13.5358 25.0834 13.9999C25.0834 14.464 24.899 14.9092 24.5709 15.2374C24.2427 15.5655 23.7975 15.7499 23.3334 15.7499H4.66675C4.20262 15.7499 3.7575 15.5655 3.42931 15.2374C3.10112 14.9092 2.91675 14.464 2.91675 13.9999C2.91675 13.5358 3.10112 13.0907 3.42931 12.7625C3.7575 12.4343 4.20262 12.2499 4.66675 12.2499H23.3334ZM23.3334 4.08325C23.7975 4.08325 24.2427 4.26763 24.5709 4.59582C24.899 4.924 25.0834 5.36912 25.0834 5.83325C25.0834 6.29738 24.899 6.7425 24.5709 7.07069C24.2427 7.39888 23.7975 7.58325 23.3334 7.58325H4.66675C4.20262 7.58325 3.7575 7.39888 3.42931 7.07069C3.10112 6.7425 2.91675 6.29738 2.91675 5.83325C2.91675 5.36912 3.10112 4.924 3.42931 4.59582C3.7575 4.26763 4.20262 4.08325 4.66675 4.08325H23.3334Z" fill="white" />
</svg>
    `;
  
    const crossIcon = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.0591 4.5591C5.4172 4.20111 5.90282 4 6.40917 4C6.91553 4 7.40115 4.20111 7.75925 4.5591L14.5115 11.3114L21.2638 4.5591C21.624 4.21125 22.1063 4.01878 22.607 4.02313C23.1077 4.02748 23.5866 4.22831 23.9407 4.58236C24.2947 4.93641 24.4956 5.41536 24.4999 5.91605C24.5043 6.41673 24.3118 6.8991 23.964 7.25925L17.2117 14.0115L23.964 20.7638C24.3118 21.124 24.5043 21.6063 24.4999 22.107C24.4956 22.6077 24.2947 23.0866 23.9407 23.4407C23.5866 23.7947 23.1077 23.9956 22.607 23.9999C22.1063 24.0043 21.624 23.8118 21.2638 23.464L14.5115 16.7117L7.75925 23.464C7.3991 23.8118 6.91673 24.0043 6.41605 23.9999C5.91536 23.9956 5.43641 23.7947 5.08236 23.4407C4.72831 23.0866 4.52748 22.6077 4.52313 22.107C4.51878 21.6063 4.71125 21.124 5.0591 20.7638L11.8114 14.0115L5.0591 7.25925C4.70111 6.90115 4.5 6.41553 4.5 5.90917C4.5 5.40282 4.70111 4.9172 5.0591 4.5591Z" fill="white" />
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