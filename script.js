document.getElementById('year').textContent = new Date().getFullYear();

const phrases = [
  "изучаю, как ломают то, что строю...",
  "web developer в процессе роста...",
  "next: понять, как это защитить."
];
const el = document.getElementById('typed');
let pi = 0, ci = 0, deleting = false;

function tick(){
  const current = phrases[pi];
  if(!deleting){
    el.textContent = current.slice(0, ++ci);
    if(ci === current.length){ deleting = true; setTimeout(tick, 1400); return; }
  } else {
    el.textContent = current.slice(0, --ci);
    if(ci === 0){ deleting = false; pi = (pi+1) % phrases.length; }
  }
  setTimeout(tick, deleting ? 30 : 55);
}
tick();
