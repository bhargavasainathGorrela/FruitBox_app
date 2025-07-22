
const screens = document.querySelectorAll('.screen');
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-screen');
    screens.forEach(s => s.style.display = 'none');
    if (target) document.getElementById(target).style.display = 'block';
    window.scrollTo({top:0,behavior:'smooth'});
  });
});
