
const values = {"A":-1,"2":0.5,"3":1,"4":1,"5":1.5,"6":1,"7":0.5,"8":0,"9":-0.5,"10":-1,"J":-1,"Q":-1,"K":-1};
let running=0; let history=[];
function addCard(code){
  const rank = code.replace(/[^A-Z0-9]/g,'');
  running += values[rank]||0;
  history.push(code);
  document.getElementById('running').innerText = running.toFixed(2);
  updateTrue();
  playSound();
  animateBetFlash();
}
function playSound(){
  const a=document.getElementById('moneySound');
  if(a){ try{ a.currentTime=0; a.play(); }catch(e){} }
}
function updateTrue(){
  const decks = parseFloat(document.getElementById('decks').value)||6;
  const total = decks*52;
  const used = history.length;
  const remaining = Math.max(1,total-used);
  const tc = running / (remaining/52);
  document.getElementById('true').innerText = (Math.round(tc*100)/100).toFixed(2);
  document.getElementById('used').innerText = used;
  document.getElementById('remaining').innerText = remaining;
  const tcEl = document.getElementById('true');
  if(tc>=6) tcEl.style.color='#00ff88';
  else if(tc>=4) tcEl.style.color='#ffd700';
  else tcEl.style.color='#ffffff';
  const bet = tc>=6? '10%': tc>=4? '6%': tc>=3? '4%': tc>=2? '2%':'0%';
  document.getElementById('bet').innerText = bet;
}
function resetAll(){ running=0; history=[]; document.getElementById('running').innerText='0'; updateTrue(); }
function animateBetFlash(){
  const el = document.getElementById('bet');
  el.style.transform='scale(1.08)'; setTimeout(()=>el.style.transform='scale(1)',200);
}
window.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('grid');
  const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const suits = ["S","H","D","C"];
  for(let r of ranks){
    for(let s of suits){
      const code = r+s;
      const div = document.createElement('div');
      div.className='card';
      const img = document.createElement('img');
      img.src = 'assets/cards/'+code+'.svg';
      img.alt = code;
      div.appendChild(img);
      div.onclick = ()=> addCard(code);
      grid.appendChild(div);
    }
  }
  updateTrue();
});
