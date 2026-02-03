  // Knowledge base
const knowledgeBase = {
  skills: {
    keywords: [
      'skills', 'technology', 'technologies', 'tech stack', 'what can you do',
      'expertise', 'technical', 'programming', 'languages', 'stack'
    ],
    response: `I have strong skills across networking, automation, and full-stack development.

Network & SDN:
- YANG modeling, NETCONF/RESTCONF, OpenDaylight controller
- Cisco IOS, VyOS, GNS3, BGP, OSPF, EIGRP, ISIS
- Telemetry and monitoring using Prometheus/Grafana

Automation:
- Python (NetworkX, PuLP, ncclient), Bash scripting
- Docker, Git, Linux administration
- Automated network configuration and validation

Full-stack:
- Django, Flask, Node.js, React
- REST APIs, JWT authentication
- PostgreSQL, MongoDB, MySQL

Embedded:
- Arduino, Raspberry Pi, Embedded C/C++
- IoT protocols like MQTT

I focus on automation, reliability, and measurable outcomes.`
  },

  projects: {
    keywords: [
      'projects', 'work', 'built', 'created', 'portfolio', 'experience',
      'what have you done', 'projects you built'
    ],
    response: `Here are my key projects:

1. SDN Network Automation Platform
- Built automated network configuration using YANG + NETCONF/RESTCONF
- Reduced manual configuration time by ~80%
- Implemented rollback + validation for safe updates
- Added Prometheus/Grafana telemetry for real-time monitoring

2. Network Traffic Engineering Optimization
- Developed SCF/MCF optimization models with PuLP
- Improved link utilization by ~35%
- Built Python pipelines for real-time decision reports

3. Secure Banking API Platform
- Built REST API with Django handling 1000+ concurrent requests
- Implemented JWT authentication & RBAC
- Achieved 95% test coverage and strong security patterns

4. Enterprise Network Lab Infrastructure
- Configured 20+ routers/switches in GNS3
- Implemented OSPF, EIGRP, BGP
- Tested network failover and stability

5. Solar-Powered Embedded System
- Built off-grid control system using Arduino
- Optimized energy usage using embedded algorithms
- Delivered full documentation + schematics`
  },

  education: {
    keywords: [
      'education', 'degree', 'university', 'studied', 'school',
      'qualification', 'graduate', 'college'
    ],
    response: `🎓 Bachelor of Engineering in Computer Engineering
Cape Peninsula University of Technology (CPUT) — Class of 2025

Relevant modules:
- Data Structures & Algorithms, Operating Systems, Computer Networks
- Linear Programming, Signal Processing, Embedded Systems
- Database Systems, Electronic Communications

Certifications:
- FNB App Academy 2025: Full Stack Development
- LinkedIn Learning: Linux, IP Addressing, SDN & OpenFlow`
  },

  contact: {
    keywords: [
      'contact', 'email', 'reach', 'get in touch', 'location',
      'where are you', 'hire', 'available'
    ],
    response: `📧 Contact:
Email: yolisahlohla@gmail.com
Location: Mthatha, South Africa
GitHub: github.com/Yolisa04
LinkedIn: linkedin.com/in/yolisa-hlohla

Open to remote or relocation opportunities.`
  },

  sdn: {
    keywords: [
      'sdn', 'software defined networking', 'netconf', 'restconf',
      'yang', 'opendaylight', 'network automation', 'programmability'
    ],
    response: `SDN & Network Automation:
- YANG data modeling (RFC 7950)
- NETCONF/RESTCONF automation
- OpenDaylight controller deployment
- Automated multi-vendor configuration with rollback
- Real-time telemetry using YANG Push + Prometheus/Grafana

I focus on making networks programmable, repeatable, and safe.`
  },

  automation: {
    keywords: [
      'automation', 'python', 'scripting', 'devops', 'automate',
      'pipeline', 'ci/cd', 'tooling'
    ],
    response: `Automation & DevOps:
- Python + ncclient for network automation
- Bash scripts for system automation
- Docker for containerized deployments
- Git version control and CI/CD workflows
- Linux administration and monitoring

Results:
- Reduced manual configuration time by 80%
- Improved incident response by 60% in lab environments`
  },

  fullstack: {
    keywords: [
      'full stack', 'fullstack', 'web development', 'backend', 'frontend',
      'api', 'django', 'react', 'node', 'flask'
    ],
    response: `Full-Stack Development:
Backend:
- Django, Flask, Node.js
- REST API design, JWT authentication, RBAC
- PostgreSQL, MongoDB, MySQL

Frontend:
- React.js, responsive design
- HTML, CSS, JavaScript

Notable: Built a secure banking API platform handling 1000+ concurrent users with 95% test coverage.`
  },

  certifications: {
    keywords: ['certificate', 'certification', 'certified', 'credentials', 'courses'],
    response: `Certifications:
- FNB App Academy 2025 — Full Stack Development
- LinkedIn Learning:
  • Introduction to Linux
  • Cisco Networking Foundations: IP Addressing
  • Practical SDN & OpenFlow`
  },

  achievements: {
    keywords: [
      'achievements', 'accomplishments', 'success', 'results', 'metrics',
      'impact', 'outcome'
    ],
    response: `Key Achievements:
- 80% reduction in manual network configuration
- 35% improved network link utilization
- 99% system uptime in lab environment
- 1000+ concurrent API requests handled
- 95% test coverage in API project

These show my focus on automation, reliability, and performance.`
  },

  interview: {
    keywords: [
      'interview', 'question', 'tell me about a time', 'challenge',
      'problem', 'how did you', 'explain', 'walk me through'
    ],
    response: `Interview-ready answers:
- When asked about a challenge: I describe the problem, my approach, tools used, and results.
- I always focus on automation, reliability, and measurable outcomes.
- I can explain YANG/NETCONF, routing protocols, and CI/CD in simple terms and real-world scenarios.
- I’m comfortable walking through architecture, design choices, and trade-offs.`
  },

  default: {
    keywords: [],
    response: `I didn't understand that. Try asking:
• "What are your skills?"
• "Tell me about your projects"
• "Explain your SDN experience"
• "What tools do you use?"
• "What is your education?"
• "How can I contact you?"`
  }
};


// Configuration
const INITIAL_MESSAGE = "Hello, I'm your AI Assistant.\nAsk me anything about Yolisa and I'll respond!";
const TYPING_DELAY = 800; // ms

// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const initialMessage = document.getElementById('initial-message');
const quickQuestions = document.getElementById('quick-questions');

let isTyping = false;
let isFirstMessage = true;

// Typing effect for initial message
function typeInitialMessage() {
  let i = 0;
  const interval = setInterval(() => {
    if (i < INITIAL_MESSAGE.length) {
      initialMessage.textContent = INITIAL_MESSAGE.substring(0, i + 1);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        initialMessage.style.borderRight = 'none';
      }, 1000);
    }
  }, 50);
}

// Add message to chat
function addMessage(role, content) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${role}-message`;
  
  const header = document.createElement('div');
  header.className = 'message-header';
  header.textContent = role === 'user' ? '> You:' : '> AI Assistant:';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = content;
  
  messageDiv.appendChild(header);
  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typing-indicator';
  typingDiv.className = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="message-header">> AI Assistant:</div>
    <div class="message-content">
      <span class="typing-dots">
        <span>.</span><span>.</span><span>.</span>
      </span>
    </div>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// Find best matching response
function findResponse(userInput) {
  const input = userInput.toLowerCase();
  
  // Check each category in knowledge base
  for (const [key, data] of Object.entries(knowledgeBase)) {
    if (key === 'default') continue;
    
    // Check if any keyword matches
    for (const keyword of data.keywords) {
      if (input.includes(keyword)) {
        return data.response;
      }
    }
  }
  
  // Return default response if no match
  return knowledgeBase.default.response;
}

// Handle sending message
async function sendMessage(messageText = null) {
  const userInput = messageText || chatInput.value.trim();
  if (!userInput || isTyping) return;

  // Hide initial message and quick questions on first interaction
  if (isFirstMessage) {
    initialMessage.style.display = 'none';
    quickQuestions.style.display = 'none';
    isFirstMessage = false;
  }

  // Add user message
  addMessage('user', userInput);

  // Clear input if it came from textarea
  if (!messageText) {
    chatInput.value = '';
    chatInput.style.height = 'auto';
  }

  // Disable input
  isTyping = true;
  chatInput.disabled = true;
  sendBtn.disabled = true;

  // Show typing indicator
  showTypingIndicator();

  // Simulate thinking time
  await new Promise(resolve => setTimeout(resolve, TYPING_DELAY));

  // Remove typing indicator
  removeTypingIndicator();

  // Get and display response
  const response = findResponse(userInput);
  addMessage('assistant', response);

  // Re-enable input
  isTyping = false;
  chatInput.disabled = false;
  sendBtn.disabled = false;
  chatInput.focus();
}

// Event listeners
sendBtn.addEventListener('click', () => sendMessage());

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Quick question buttons
document.querySelectorAll('.question-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.getAttribute('data-question');
    const questionText = btn.textContent;
    sendMessage(questionText);
  });
});

// Auto-resize textarea
chatInput.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

// Initialize
typeInitialMessage();
chatInput.focus();