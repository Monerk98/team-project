(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
    
  if(!menuBtnRef || !mobileMenuRef || !mobileBtnClose) return 
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  
    mobileBtnClose.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })();