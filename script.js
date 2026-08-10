// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:0.12});
revealEls.forEach(el=>io.observe(el));

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '20px';
    navLinks.style.background = '#15181C';
    navLinks.style.padding = '16px 20px';
    navLinks.style.border = '1px solid rgba(241,238,230,0.12)';
  });
}

// Terminal typing sequence
const lines = [
  { cmd: 'deploy uaa.ae --stack=laravel', out: 'rebuilt & shipped ✓  united arab agencies' },
  { cmd: 'optimize noon-listing --ads=sponsored', out: 'ctr +  visibility improved across catalog' },
  { cmd: 'sync bayut-listings --status=live', out: 'residential & commercial listings synced' },
  { cmd: 'init project --stack=next.js,laravel', out: 'ready for freelance work ✓' }
];

const body = document.getElementById('termBody');
if(body){
  let li = 0;
  function typeLine(){
    if(li >= lines.length){ li = 0; }
    const { cmd, out } = lines[li];
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = '<span class="prompt">ancy@dubai:~$</span><span class="typed"></span><span class="caret"></span>';
    body.appendChild(row);
    const typedEl = row.querySelector('.typed');
    let ci = 0;
    const typeChar = setInterval(()=>{
      typedEl.textContent += cmd[ci];
      ci++;
      if(ci >= cmd.length){
        clearInterval(typeChar);
        row.querySelector('.caret').remove();
        const outEl = document.createElement('div');
        outEl.className = 'out';
        outEl.textContent = out;
        body.appendChild(outEl);
        while(body.children.length > 8){ body.removeChild(body.firstChild); }
        li++;
        setTimeout(typeLine, 1400);
      }
    }, 32);
  }
  typeLine();
}
