function toggleMenu() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = './assets/INTI-CV.pdf';
  link.download = 'INTI-CV.pdf';
  link.click();
}