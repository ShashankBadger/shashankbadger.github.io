const mobileNav = () => {
    const headerBar = document.querySelector('.header__bar');
    const mobileNav = document.querySelector('.mobile-nav');
    let isMobileNavOpen = false;
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    headerBar.addEventListener('click',() => {
      isMobileNavOpen = !isMobileNavOpen;
      if(isMobileNavOpen){
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
      } 
      else {
        mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
      }
    });
    
    mobileLinks.forEach(Link => {
      Link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto'
      });
    });
    };

const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    const theme = localStorage.getItem('theme');
    
    theme && document.body.classList.add(theme);
    
    const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')){
        localStorage.setItem('theme','light-mode');
        }
        else {
          localStorage.removeItem('theme');
          document.body.removeAttribute('class');
        }
    };
    
    themeToggleBtns.forEach(Btn => 
      Btn.addEventListener('click', handleThemeToggle)
    );
    };

    

const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries,observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('loading');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      })
      
    });
    
    lazyImgs.forEach(img => {
      observer.observe(img)
    });
    };

mobileNav();
darkMode();
lazyLoading();
