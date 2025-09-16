class HyperfocusTracker {
  constructor() {
    this.sessionActive = false;
    this.startTime = null;
    this.achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    this.sessionCount = localStorage.getItem('sessionCount') || 0;
  }

  startSession(sessionType = 'focus') {
    this.sessionActive = true;
    this.startTime = Date.now();
    
    // Switch to hyperfocus mode UI
    document.body.classList.add('hyperfocus-mode');
    
    // Optional: Play focus sounds
    this.playFocusAudio();
    
    // Gentle time awareness (non-intrusive)
    this.startTimeTracking();
    
    console.log(`🧠 Hyperfocus session started! You've got this, BROski♾!`);
  }

  endSession() {
    if (!this.sessionActive) return;
    
    const sessionDuration = Date.now() - this.startTime;
    const minutes = Math.round(sessionDuration / 60000);
    
    this.sessionActive = false;
    document.body.classList.remove('hyperfocus-mode');
    
    // Track achievement
    this.checkAchievements(minutes);
    
    // Show celebration
    this.showSessionComplete(minutes);
    
    // Save stats
    this.sessionCount++;
    localStorage.setItem('sessionCount', this.sessionCount);
  }

  checkAchievements(minutes) {
    const achievements = [
      { threshold: 25, name: "Focus Starter", emoji: "🎯" },
      { threshold: 60, name: "Hyperfocus Hero", emoji: "⚡" },
      { threshold: 120, name: "Deep Work Master", emoji: "🧠" },
      { threshold: 240, name: "BROski♾ Legend", emoji: "👑" }
    ];

    achievements.forEach(achievement => {
      if (minutes >= achievement.threshold && !this.achievements.includes(achievement.name)) {
        this.unlockAchievement(achievement);
      }
    });
  }

  unlockAchievement(achievement) {
    this.achievements.push(achievement.name);
    localStorage.setItem('achievements', JSON.stringify(this.achievements));
    
    // Show achievement notification
    this.showAchievement(achievement);
  }

  showAchievement(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
      <div class="achievement-content">
        <span class="achievement-emoji">${achievement.emoji}</span>
        <span class="achievement-text">Achievement Unlocked: ${achievement.name}</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 5000);
  }
}

// Initialize tracker
const hyperfocusTracker = new HyperfocusTracker();
