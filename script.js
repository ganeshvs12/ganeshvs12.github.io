// Smooth scroll
const links = document.querySelectorAll('header.nav a[href^="#"]');
links.forEach(l=>l.addEventListener('click',e=>{e.preventDefault();document.querySelector(l.getAttribute('href')).scrollIntoView({behavior:'smooth'});}));
// Year
document.getElementById('y').textContent = new Date().getFullYear();
// Counters
const counterEls = document.querySelectorAll('.num[data-target]');
const animateCounters = () => { counterEls.forEach(el => { const target = +el.dataset.target; const upd = () => { const cur = +el.textContent; const inc = Math.ceil(target/100); if(cur < target){ el.textContent = Math.min(cur + inc, target); requestAnimationFrame(upd); } }; const rect = el.getBoundingClientRect(); if(rect.top < window.innerHeight){ if(el.textContent==='0') upd(); } });};
window.addEventListener('scroll', animateCounters); window.addEventListener('load', animateCounters);
// Skill bars
const bars = document.querySelectorAll('.bar[data-progress]');
const revealBars = () => { bars.forEach(b=>{const rect=b.getBoundingClientRect(); if(rect.top < window.innerHeight){ b.style.width = b.dataset.progress + '%'; }}); };
window.addEventListener('scroll', revealBars); window.addEventListener('load', revealBars);
