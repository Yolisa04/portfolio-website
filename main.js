// Terminal Animation
const terminal = document.getElementById('terminal');
const commands = [
  { type: 'prompt', text: 'yolisa@network-lab:~$', delay: 0 },
  { type: 'command', text: 'python netconf_automation.py', delay: 1000 },
  { type: 'output', text: '✓ Connected to OpenDaylight controller', delay: 1500 },
  { type: 'output', text: '✓ YANG models validated', delay: 2000 },
  { type: 'output', text: '✓ Configuration deployed to 12 routers', delay: 2500 },
  { type: 'output', text: '✓ Network optimization: 35% improvement', delay: 3000 },
  { type: 'prompt', text: 'yolisa@network-lab:~$', delay: 3500 },
  { type: 'command', text: 'curl -X POST /api/banking/transaction', delay: 4000 },
  { type: 'output', text: '{"status": "success", "concurrent_users": 1247}', delay: 4500 }
];

let lineIndex = 0;

function typeCommand() {
  if (lineIndex < commands.length) {
    const cmd = commands[lineIndex];
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = `terminal-line terminal-${cmd.type}`;
      line.style.animationDelay = '0s';
      
      if (cmd.type === 'prompt') {
        line.innerHTML = `<span class="terminal-prompt">${cmd.text}</span>`;
      } else if (cmd.type === 'command') {
        line.innerHTML = `<span class="terminal-command">${cmd.text}</span>`;
      } else {
        line.innerHTML = `<span class="terminal-output">${cmd.text}</span>`;
      }
      
      terminal.appendChild(line);
      lineIndex++;
      typeCommand();
    }, cmd.delay);
  }
}

typeCommand();

// Animated Background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 50;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(99, 102, 241, 0.5)'; // Indigo glow
    ctx.fill();
  }
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  
  requestAnimationFrame(animate);
}

animate();

// Resize handler
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});