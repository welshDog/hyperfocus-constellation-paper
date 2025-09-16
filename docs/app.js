// Research data from JSON
const researchData = {
  "researchNodes": [
    {
      "id": "origins",
      "title": "Where Vibe Code Came From",
      "description": "The historical roots and emergence of intuitive programming",
      "color": "#00BFFF",
      "position": {"x": -3, "y": 2, "z": 1},
      "content": {
        "summary": "Andrej Karpathy coined 'vibe coding' in 2025, but the concept builds on decades of intuitive programming research.",
        "keyPoints": [
          "Term popularized by Andrej Karpathy in February 2025",
          "Rooted in decades of intuitive programming concepts", 
          "Evolution from 'English as programming language' predictions",
          "Natural extension of human-computer interaction advances"
        ],
        "hyperfocusTip": "This origin story shows how breakthrough ideas often connect existing concepts in new ways - perfect hyperfocus material!"
      }
    },
    {
      "id": "current",
      "title": "Current State of Vibe Coding", 
      "description": "What's happening right now in the vibe coding space",
      "color": "#32CD32",
      "position": {"x": 0, "y": 0, "z": 0},
      "content": {
        "summary": "Vibe coding is transforming how we build software through conversational AI and natural language programming.",
        "keyPoints": [
          "AI-powered development environments going mainstream",
          "Natural language to code translation improving rapidly", 
          "Major tech companies investing heavily in conversational coding",
          "Growing community of vibe coding practitioners"
        ],
        "hyperfocusTip": "The rapid evolution happening now is perfect for tracking trends - great for hyperfocus research sessions!"
      }
    },
    {
      "id": "future", 
      "title": "Future Trends",
      "description": "Where vibe coding and AI-assisted development are heading",
      "color": "#9932CC", 
      "position": {"x": 3, "y": 1, "z": -1},
      "content": {
        "summary": "The future involves hyper-personalized dev environments, autonomous code generation, and self-evolving software.",
        "keyPoints": [
          "Hyper-personalized development environments", 
          "Mainstream natural language programming",
          "Autonomous code generation from high-level specs",
          "Self-evolving codebases that optimize themselves"
        ],
        "hyperfocusTip": "Future-focused thinking is where ADHD pattern recognition really shines - embrace those big-picture connections!"
      }
    },
    {
      "id": "hyperfocus",
      "title": "Hyperfocus Superpowers", 
      "description": "How ADHD and neurodivergent traits are advantages in vibe coding",
      "color": "#FFD700",
      "position": {"x": -1, "y": -2, "z": 2},
      "content": {
        "summary": "Neurodivergent developers bring unique strengths like hyperfocus, pattern recognition, and creative problem-solving.",
        "keyPoints": [
          "Hyperfocus enables sustained deep work sessions",
          "Pattern recognition that others often miss", 
          "Creative approaches to complex problems",
          "Exceptional attention to detail when engaged"
        ],
        "hyperfocusTip": "Hey BROski♾! This is YOUR section - neurodivergent traits aren't bugs, they're features in the vibe coding world!"
      }
    },
    {
      "id": "wisdom",
      "title": "Practical Wisdom",
      "description": "Real-world applications and recommendations",
      "color": "#FF8C00", 
      "position": {"x": 2, "y": -1, "z": 1},
      "content": {
        "summary": "Actionable insights for developers, teams, and organizations embracing vibe coding approaches.",
        "keyPoints": [
          "Structure work sessions to align with hyperfocus peaks",
          "Use AI to handle syntax, focus on creative problem-solving", 
          "Build inclusive tools that work with different brain types",
          "Create environments that support deep work and flow states"
        ],
        "hyperfocusTip": "These tips are gold for maximizing your coding superpowers - bookmark this section!"
      }
    },
    {
      "id": "community",
      "title": "Community & Collaboration", 
      "description": "Building inclusive, neurodiversity-celebrating tech communities",
      "color": "#FF1493",
      "position": {"x": 0, "y": 2, "z": -2},
      "content": {
        "summary": "The future of tech depends on inclusive communities that celebrate neurodivergent contributions.",
        "keyPoints": [
          "Democratizing development through natural language interfaces",
          "Recognizing neurodivergent thinking as strategic asset",
          "Building tools that amplify human creativity", 
          "Creating accessible, flow-friendly work environments"
        ],
        "hyperfocusTip": "Community building leverages the ADHD superpower of connecting ideas and people - perfect for hyperfocus sessions!"
    }
  },
  {
    "id": "hyperfocus-zone",
    "title": "The Hyperfocus Zone",
    "description": "Your personal productivity superpower workspace",
    "color": "#FF6B6B",
    "position": {"x": -2, "y": -3, "z": 0},
    "content": {
      "summary": "Transform your ADHD hyperfocus into a coding superpower with personalized tools and techniques.",
      "keyPoints": [
        "Hyperfocus session templates for 2-6 hour deep work",
        "Distraction-blocking interface with gentle time awareness",
        "Achievement system that celebrates sustained attention",
        "Community features for accountability and support"
      ],
      "hyperfocusTip": "Hey BROski♾! This is YOUR zone - where hyperfocus becomes your coding superpower!"
    }
  },
  {
    "id": "focus-sessions", 
    "title": "Guided Focus Sessions",
    "description": "Structured hyperfocus experiences for maximum productivity",
    "color": "#4ECDC4",
    "position": {"x": 1, "y": -3, "z": 1},
    "content": {
      "summary": "Guided sessions designed specifically for ADHD brains to maximize focus and minimize burnout.",
      "keyPoints": [
        "25-minute sprints to 4-hour hyperfocus marathons",
        "Background soundscapes and focus music",
        "Progress tracking without pressure",
        "Recovery and break reminders"
      ],
      "hyperfocusTip": "Pick your energy level and let the session guide your hyperfocus flow!"
    }
  },
  {
    "id": "neuro-tools",
    "title": "Neurodivergent Dev Tools", 
    "description": "Curated tools that actually work for ADHD/autistic developers",
    "color": "#45B7D1",
    "position": {"x": 3, "y": -2, "z": -1},
    "content": {
      "summary": "Hand-picked development tools, extensions, and workflows optimized for neurodivergent minds.",
      "keyPoints": [
        "ADHD-friendly IDEs and extensions",
        "Focus apps that don't break hyperfocus",
        "Project management for executive dysfunction",
        "Communication tools for different interaction styles"
      ],
      "hyperfocusTip": "These tools are battle-tested by neurodivergent developers worldwide!"
    }
  }
];

  "connections": [
    {"from": "origins", "to": "current"},
    {"from": "current", "to": "future"},
    {"from": "hyperfocus", "to": "wisdom"},
    {"from": "wisdom", "to": "community"}, 
    {"from": "current", "to": "hyperfocus"},
    {"from": "future", "to": "community"}
  ]
};

class ConstellationApp {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.nodes = new Map();
    this.nodeGroups = [];
    this.connections = [];
    this.particles = [];
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.selectedNode = null;
    this.hoveredNode = null;
    this.isAutoRotating = true;
    this.isFocusMode = false;
    this.visitedNodes = new Set();
    this.isMouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.lastMouseMove = 0;

    this.init();
  }

  async init() {
    this.initializeDOM();
    this.setupEventListeners();
    
    // Wait for Three.js to be fully ready
    await new Promise(resolve => setTimeout(resolve, 200));
    
    this.initializeScene();
    this.createNodes();
    this.createConnections();
    this.createParticles();
    this.setupProgressTracking();
    
    // Hide loading
    if (this.loading) {
      this.loading.style.display = 'none';
    }
    
    this.animate();
  }

  initializeDOM() {
    this.sceneContainer = document.getElementById('sceneContainer');
    this.sidebar = document.getElementById('sidebar');
    this.tooltip = document.getElementById('tooltip');
    this.instructions = document.getElementById('instructions');
    this.loading = document.getElementById('loading');
  }

  initializeScene() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0f);

    // Camera
    const aspect = this.sceneContainer.clientWidth / this.sceneContainer.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(8, 5, 8);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(this.sceneContainer.clientWidth, this.sceneContainer.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x0a0a0f, 1);
    
    // Clear container and add canvas
    while (this.sceneContainer.children.length > 1) {
      this.sceneContainer.removeChild(this.sceneContainer.lastChild);
    }
    this.sceneContainer.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(10, 10, 5);
    this.scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-10, -10, -5);
    this.scene.add(directionalLight2);

    console.log('Scene initialized');
  }

  createNodes() {
    researchData.researchNodes.forEach((nodeData) => {
      const nodeGroup = this.createNode(nodeData);
      this.nodeGroups.push(nodeGroup);
    });
    console.log(`Created ${this.nodeGroups.length} node groups`);
  }

  createNode(nodeData) {
    const group = new THREE.Group();
    
    // Main sphere
    const sphereGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(nodeData.color),
      emissive: new THREE.Color(nodeData.color),
      emissiveIntensity: 0.25,
      shininess: 100,
      transparent: false
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.userData = { nodeId: nodeData.id, isMainSphere: true };
    group.add(sphere);

    // Outer glow
    const glowGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(nodeData.color),
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    // Position
    group.position.set(
      nodeData.position.x,
      nodeData.position.y,
      nodeData.position.z
    );

    // Store complete node data
    group.userData = {
      ...nodeData,
      sphere: sphere,
      glow: glow,
      originalScale: 1,
      targetScale: 1,
      isNodeGroup: true
    };

    this.nodes.set(nodeData.id, group);
    this.scene.add(group);
    
    return group;
  }

  createConnections() {
    researchData.connections.forEach(conn => {
      const fromNode = this.nodes.get(conn.from);
      const toNode = this.nodes.get(conn.to);
      
      if (fromNode && toNode) {
        this.createConnection(fromNode.position, toNode.position);
      }
    });
  }

  createConnection(from, to) {
    // Simple straight line connection
    const points = [from.clone(), to.clone()];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x20B2AA,
      transparent: true,
      opacity: 0.4
    });
    
    const line = new THREE.Line(geometry, material);
    this.connections.push(line);
    this.scene.add(line);
  }

  createParticles() {
    const particleCount = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 25;
      positions[i + 1] = (Math.random() - 0.5) * 25;
      positions[i + 2] = (Math.random() - 0.5) * 25;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x20B2AA,
      size: 0.03,
      transparent: true,
      opacity: 0.7
    });

    const particles = new THREE.Points(geometry, material);
    this.particles.push(particles);
    this.scene.add(particles);
  }

  setupEventListeners() {
    // Start button
    const startButton = document.getElementById('startExploring');
    if (startButton) {
      startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.startExploring();
      });
    }

    // UI controls
    const focusBtn = document.getElementById('focusModeBtn');
    const browseBtn = document.getElementById('browseModeBtn');
    const resetBtn = document.getElementById('resetViewBtn');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const backBtn = document.getElementById('backToConstellation');

    if (focusBtn) focusBtn.addEventListener('click', () => this.toggleFocusMode(true));
    if (browseBtn) browseBtn.addEventListener('click', () => this.toggleFocusMode(false));
    if (resetBtn) resetBtn.addEventListener('click', () => this.resetView());
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', () => this.closeSidebar());
    if (backBtn) backBtn.addEventListener('click', () => this.backToConstellation());

    // Mouse events - add after renderer is ready
    setTimeout(() => {
      if (this.renderer && this.renderer.domElement) {
        const canvas = this.renderer.domElement;
        canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        canvas.addEventListener('click', (e) => this.onMouseClick(e));
        canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
        canvas.addEventListener('wheel', (e) => this.onMouseWheel(e));
        canvas.style.cursor = 'grab';
      }
    }, 300);

    // Window events
    window.addEventListener('resize', () => this.onWindowResize());
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
  }

  setupProgressTracking() {
    const progressNodes = document.getElementById('progressNodes');
    if (progressNodes) {
      progressNodes.innerHTML = '';
      researchData.researchNodes.forEach(node => {
        const progressNode = document.createElement('div');
        progressNode.className = 'progress-node';
        progressNode.setAttribute('data-node-id', node.id);
        progressNode.title = node.title;
        progressNodes.appendChild(progressNode);
      });
    }
    this.updateProgress();
  }

  onMouseMove(event) {
    const now = Date.now();
    if (now - this.lastMouseMove < 16) return; // Throttle to ~60fps
    this.lastMouseMove = now;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Camera rotation
    if (this.isMouseDown) {
      const deltaX = event.clientX - this.mouseX;
      const deltaY = event.clientY - this.mouseY;

      // Convert to spherical coordinates for smooth rotation
      const spherical = new THREE.Spherical();
      spherical.setFromVector3(this.camera.position);
      
      spherical.theta -= deltaX * 0.005;
      spherical.phi += deltaY * 0.005;
      
      // Clamp phi to prevent flipping
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
      
      this.camera.position.setFromSpherical(spherical);
      this.camera.lookAt(0, 0, 0);
      
      this.isAutoRotating = false;
      
      this.renderer.domElement.style.cursor = 'grabbing';
    }

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Update tooltip position
    if (this.tooltip) {
      this.tooltip.style.left = (event.clientX + 15) + 'px';
      this.tooltip.style.top = (event.clientY + 15) + 'px';
    }

    // Check for hover only if not dragging
    if (!this.isMouseDown) {
      this.checkHover();
    }
  }

  onMouseDown(event) {
    this.isMouseDown = true;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.renderer.domElement.style.cursor = 'grabbing';
  }

  onMouseUp(event) {
    this.isMouseDown = false;
    this.renderer.domElement.style.cursor = 'grab';
    
    // Resume auto rotation after delay
    setTimeout(() => {
      if (!this.selectedNode && !this.isMouseDown) {
        this.isAutoRotating = true;
      }
    }, 2000);
  }

  onMouseWheel(event) {
    event.preventDefault();
    
    const zoomSpeed = 0.1;
    const direction = event.deltaY > 0 ? 1 : -1;
    const currentDistance = this.camera.position.length();
    const newDistance = currentDistance * (1 + direction * zoomSpeed);
    
    // Clamp zoom distance
    const clampedDistance = Math.max(4, Math.min(25, newDistance));
    this.camera.position.normalize().multiplyScalar(clampedDistance);
  }

  onMouseClick(event) {
    // Only process clicks if we weren't dragging
    const clickThreshold = 5; // pixels
    const dragDistance = Math.sqrt(
      Math.pow(event.clientX - this.mouseX, 2) + 
      Math.pow(event.clientY - this.mouseY, 2)
    );
    
    if (dragDistance < clickThreshold) {
      this.checkSelection();
    }
  }

  onKeyDown(event) {
    switch(event.code) {
      case 'Escape':
        this.closeSidebar();
        break;
      case 'Space':
        event.preventDefault();
        this.toggleFocusMode(!this.isFocusMode);
        break;
      case 'KeyR':
        this.resetView();
        break;
    }
  }

  checkHover() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // Get all sphere meshes for intersection testing
    const spheres = [];
    this.nodeGroups.forEach(group => {
      if (group.userData.sphere) {
        spheres.push(group.userData.sphere);
      }
    });
    
    const intersects = this.raycaster.intersectObjects(spheres);

    if (intersects.length > 0) {
      const intersectedSphere = intersects[0].object;
      const nodeGroup = intersectedSphere.parent;
      
      if (this.hoveredNode !== nodeGroup) {
        // Reset previous
        if (this.hoveredNode) {
          this.hoveredNode.userData.targetScale = 1;
        }

        // Set new hovered node
        this.hoveredNode = nodeGroup;
        this.hoveredNode.userData.targetScale = 1.2;
        
        // Show tooltip
        this.showTooltip(this.hoveredNode.userData);
        
        this.renderer.domElement.style.cursor = 'pointer';
      }
    } else {
      if (this.hoveredNode) {
        this.hoveredNode.userData.targetScale = 1;
        this.hoveredNode = null;
        this.hideTooltip();
        this.renderer.domElement.style.cursor = 'grab';
      }
    }
  }

  checkSelection() {
    if (this.hoveredNode) {
      this.selectNode(this.hoveredNode);
    }
  }

  selectNode(node) {
    this.selectedNode = node;
    this.visitedNodes.add(node.userData.id);
    this.isAutoRotating = false;
    
    // Focus camera
    this.focusOnNode(node);
    
    // Show content
    this.showContent(node.userData);
    
    // Update progress
    this.updateProgress();
    
    // Hide tooltip
    this.hideTooltip();
  }

  focusOnNode(node) {
    const nodePos = node.position.clone();
    const distance = 3;
    const direction = nodePos.clone().normalize();
    const targetPosition = direction.multiplyScalar(distance);
    targetPosition.add(new THREE.Vector3(1, 0.5, 1));
    
    this.animateCameraTo(targetPosition, nodePos);
  }

  animateCameraTo(targetPos, lookAtPos) {
    const startPos = this.camera.position.clone();
    const startLookAt = new THREE.Vector3(0, 0, 0);
    const startTime = Date.now();
    const duration = 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = this.easeInOutCubic(progress);

      this.camera.position.lerpVectors(startPos, targetPos, eased);
      
      const currentLookAt = new THREE.Vector3().lerpVectors(startLookAt, lookAtPos, eased);
      this.camera.lookAt(currentLookAt);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  showContent(nodeData) {
    // Update sidebar content
    const titleEl = document.getElementById('sidebarTitle');
    const summaryEl = document.getElementById('contentSummary');
    const keyPointsEl = document.getElementById('keyPoints');
    const tipEl = document.getElementById('hyperfocusTip');

    if (titleEl) titleEl.textContent = nodeData.title;
    if (summaryEl) summaryEl.textContent = nodeData.content.summary;
    if (tipEl) tipEl.textContent = nodeData.content.hyperfocusTip;

    if (keyPointsEl) {
      keyPointsEl.innerHTML = '<h3>Key Points</h3>';
      const ul = document.createElement('ul');
      nodeData.content.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        ul.appendChild(li);
      });
      keyPointsEl.appendChild(ul);
    }

    // Show sidebar
    if (this.sidebar) {
      this.sidebar.classList.remove('hidden');
    }
  }

  showTooltip(nodeData) {
    if (!this.tooltip) return;
    
    const titleEl = this.tooltip.querySelector('.tooltip-title');
    const descEl = this.tooltip.querySelector('.tooltip-description');
    
    if (titleEl) titleEl.textContent = nodeData.title;
    if (descEl) descEl.textContent = nodeData.description;
    
    this.tooltip.classList.remove('hidden');
  }

  hideTooltip() {
    if (this.tooltip) {
      this.tooltip.classList.add('hidden');
    }
  }

  closeSidebar() {
    if (this.sidebar) {
      this.sidebar.classList.add('hidden');
    }
    this.selectedNode = null;
    setTimeout(() => {
      this.isAutoRotating = true;
    }, 500);
  }

  backToConstellation() {
    this.closeSidebar();
    this.resetView();
  }

  resetView() {
    this.camera.position.set(8, 5, 8);
    this.camera.lookAt(0, 0, 0);
    this.selectedNode = null;
    this.isAutoRotating = true;
  }

  toggleFocusMode(enable) {
    this.isFocusMode = enable;
    
    const app = document.querySelector('.app');
    if (app) {
      app.classList.toggle('focus-mode', enable);
    }
    
    // Update button states
    const focusBtn = document.getElementById('focusModeBtn');
    const browseBtn = document.getElementById('browseModeBtn');
    
    if (focusBtn) {
      focusBtn.classList.toggle('btn--primary', enable);
      focusBtn.classList.toggle('btn--secondary', !enable);
    }
    if (browseBtn) {
      browseBtn.classList.toggle('btn--primary', !enable);
      browseBtn.classList.toggle('btn--secondary', enable);
    }
  }

  startExploring() {
    if (this.instructions) {
      this.instructions.classList.add('hidden');
    }
  }

  updateProgress() {
    const totalNodes = researchData.researchNodes.length;
    const visitedCount = this.visitedNodes.size;
    const percentage = (visitedCount / totalNodes) * 100;
    
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
      progressFill.style.width = percentage + '%';
    }
    
    // Update progress indicators
    document.querySelectorAll('.progress-node').forEach(node => {
      const nodeId = node.getAttribute('data-node-id');
      if (nodeId) {
        node.classList.toggle('visited', this.visitedNodes.has(nodeId));
        node.classList.toggle('active', this.selectedNode?.userData.id === nodeId);
      }
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Auto rotation
    if (this.isAutoRotating && !this.selectedNode) {
      const time = Date.now() * 0.0002;
      const radius = this.camera.position.length();
      this.camera.position.x = Math.cos(time) * radius;
      this.camera.position.z = Math.sin(time) * radius;
      this.camera.lookAt(0, 0, 0);
    }

    // Animate node scales
    this.nodeGroups.forEach(group => {
      const userData = group.userData;
      if (userData.targetScale !== undefined) {
        userData.originalScale = THREE.MathUtils.lerp(
          userData.originalScale || 1, 
          userData.targetScale, 
          0.1
        );
        group.scale.setScalar(userData.originalScale);
        
        // Pulse effect for visited nodes
        if (this.visitedNodes.has(userData.id) && userData.sphere) {
          const pulse = Math.sin(Date.now() * 0.003) * 0.1 + 1;
          userData.sphere.material.emissiveIntensity = 0.35 * pulse;
        }
      }
    });

    // Animate particles
    this.particles.forEach(particle => {
      particle.rotation.y += 0.001;
    });

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    if (!this.camera || !this.renderer || !this.sceneContainer) return;

    const width = this.sceneContainer.clientWidth;
    const height = this.sceneContainer.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
}

// Initialize app
function initApp() {
  if (typeof THREE !== 'undefined') {
    console.log('Initializing Constellation App...');
    window.app = new ConstellationApp();
  } else {
    console.log('Waiting for Three.js...');
    setTimeout(initApp, 100);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
