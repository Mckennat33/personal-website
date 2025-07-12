document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-reveal");
  
    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
  
    const displayScrollElement = (element) => {
      element.classList.add("revealed");
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          displayScrollElement(el);
        }
      });
    };
  
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  
    // Trigger on page load
    handleScrollAnimation();
  });


