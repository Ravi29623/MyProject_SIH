


const pandaCount = 2; // number of pandas
const pandas = [];

// Create pandas dynamically
for (let i = 0; i < pandaCount; i++) {
  const panda = document.createElement('img');
  panda.src = 'panda.png';
  panda.alt = 'Virtual Panda';
  panda.classList.add('virtual-panda');
  panda.style.position = 'fixed';
  panda.style.width = '80px';
  panda.style.height = '80px'; 
  panda.style.left = Math.random() * (window.innerWidth - 80) + 'px';
  panda.style.top = Math.random() * (window.innerHeight - 80) + 'px';
  panda.style.cursor = 'pointer';
  panda.style.zIndex = '1002';
  panda.style.transition = 'all 0.3s ease-in-out';
  document.body.appendChild(panda);
  pandas.push({ el: panda, followCursor: false });
}

// Random movement and actions
function moveAndAct(pandaObj) {
  const panda = pandaObj.el;

  if(!pandaObj.followCursor) {
    const maxX = window.innerWidth - panda.offsetWidth;
    const maxY = window.innerHeight - panda.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    panda.style.left = randomX + 'px';
    panda.style.top = randomY + 'px';
  }

  const actions = ['jump', 'wave', 'spin', 'follow'];
  const action = actions[Math.floor(Math.random() * actions.length)];

  if(action === 'jump') {
    panda.style.transform = 'translateY(-50px) scale(1.1)';
    setTimeout(() => panda.style.transform = 'translateY(0) scale(1)', 500);
  } else if(action === 'wave') {
    panda.classList.add('panda-wave');
    setTimeout(() => panda.classList.remove('panda-wave'), 1000);
  } else if(action === 'spin') {
    panda.style.transform = 'rotate(360deg)';
    setTimeout(() => panda.style.transform = 'rotate(0deg)', 1000);
  } else if(action === 'follow') {
    pandaObj.followCursor = true;
    setTimeout(() => pandaObj.followCursor = false, 4000);
  }
}

// Mouse move event for cursor following
document.addEventListener('mousemove', e => {
  pandas.forEach(pandaObj => {
    if(pandaObj.followCursor) {
      const pandaX = e.clientX - pandaObj.el.offsetWidth / 2;
      const pandaY = e.clientY - pandaObj.el.offsetHeight / 2;
      pandaObj.el.style.left = pandaX + 'px';
      pandaObj.el.style.top = pandaY + 'px';
    }
  });
});

// Click interaction
pandas.forEach(pandaObj => {
  pandaObj.el.addEventListener('click', () => {
    alert('🐼 Hi there! Keep smiling today!');
    pandaObj.el.style.transform = 'scale(1.4)';
    setTimeout(() => pandaObj.el.style.transform = 'scale(1)', 500);
  });
});

// Interval to move and act randomly
setInterval(() => {
  pandas.forEach(moveAndAct);
}, Math.random() * 4000 + 2000);