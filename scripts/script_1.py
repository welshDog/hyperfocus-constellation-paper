# Create the complete folder structure and remaining files
import os
import json

# Create folder structure
folders = [
    "src",
    "data", 
    "docs",
    "assets/images",
    "assets/badges",
    "community",
    ".github/workflows",
    ".github/ISSUE_TEMPLATE",
    ".github/PULL_REQUEST_TEMPLATE",
    "tests",
    "scripts"
]

for folder in folders:
    os.makedirs(folder, exist_ok=True)
    print(f"📁 Created folder: {folder}")

# Create package.json
package_json = {
    "name": "hyperfocus-constellation-paper",
    "version": "1.0.0",
    "description": "🌟 Revolutionary 3D interactive research paper on vibe coding and hyperfocus superpowers",
    "main": "src/index.html",
    "homepage": "https://lyndz-williams.github.io/hyperfocus-constellation-paper",
    "scripts": {
        "start": "python -m http.server 8000",
        "dev": "live-server src/ --port=8080",
        "build": "npm run optimize && npm run minify",
        "deploy": "gh-pages -d src",
        "test": "jest tests/",
        "test:accessibility": "axe-cli src/index.html",
        "lint": "eslint src/ --fix",
        "format": "prettier --write src/",
        "optimize": "node scripts/optimize-assets.js",
        "minify": "terser src/app.js -o src/app.min.js",
        "validate": "html5validator src/index.html"
    },
    "keywords": [
        "vibe-coding", "hyperfocus", "adhd", "neurodiversity", 
        "interactive-research", "3d-interface", "ai-programming",
        "accessibility", "gamification", "threejs", "revolution"
    ],
    "author": {
        "name": "Lyndz Williams",
        "email": "lyndz@hyperfocus-constellation.dev",
        "url": "https://github.com/lyndz-williams"
    },
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "https://github.com/lyndz-williams/hyperfocus-constellation-paper.git"
    },
    "bugs": {
        "url": "https://github.com/lyndz-williams/hyperfocus-constellation-paper/issues"
    },
    "dependencies": {
        "three": "^0.155.0",
        "gsap": "^3.12.0",
        "dat.gui": "^0.7.9"
    },
    "devDependencies": {
        "live-server": "^1.2.2",
        "eslint": "^8.50.0",
        "prettier": "^3.0.0",
        "jest": "^29.7.0",
        "gh-pages": "^6.0.0",
        "@axe-core/cli": "^4.8.0",
        "html5validator": "^0.4.0",
        "terser": "^5.20.0"
    },
    "engines": {
        "node": ">=16.0.0",
        "npm": ">=8.0.0"
    }
}

with open("package.json", "w") as f:
    json.dump(package_json, f, indent=2)

# Create GitHub Actions workflow for deployment
github_workflow = """name: 🚀 Deploy Hyperfocus Constellation

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: 📥 Checkout code
      uses: actions/checkout@v3
      
    - name: 🔧 Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: 📦 Install dependencies
      run: npm ci
      
    - name: 🧪 Run tests
      run: npm test
      
    - name: ♿ Accessibility test
      run: npm run test:accessibility
      
    - name: 🔍 Lint code
      run: npm run lint
      
    - name: 🏗️ Build project
      run: npm run build
      
    - name: 🚀 Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./src
        commit_message: '🌟 Deploy constellation update'
        
  accessibility-audit:
    runs-on: ubuntu-latest
    name: ♿ Accessibility Audit
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: 🔍 Run accessibility audit
      run: |
        npm install -g @axe-core/cli
        axe src/index.html --exit
        
    - name: 📊 Generate accessibility report
      run: |
        axe src/index.html --reporter html > accessibility-report.html
        
    - name: 📤 Upload accessibility report
      uses: actions/upload-artifact@v3
      with:
        name: accessibility-report
        path: accessibility-report.html
"""

with open(".github/workflows/deploy.yml", "w") as f:
    f.write(github_workflow)

# Create issue templates
bug_template = """---
name: 🐛 Bug Report
about: Report a bug to help us improve the constellation
title: '🐛 [BUG] '
labels: 'bug'
assignees: ''

---

## 🐛 **Bug Description**
A clear and concise description of what the bug is.

## 🔍 **Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## 💭 **Expected Behavior**
A clear description of what you expected to happen.

## 📱 **Device Information**
- **Device**: [e.g. iPhone12, Desktop]
- **OS**: [e.g. iOS, Windows, macOS]
- **Browser**: [e.g. Chrome, Safari, Firefox]
- **Version**: [e.g. 22]

## ♿ **Accessibility Impact**
Does this bug affect accessibility or neurodivergent users?
- [ ] Screen reader users
- [ ] Keyboard navigation
- [ ] Color contrast issues
- [ ] Hyperfocus disruption
- [ ] Other accessibility concerns

## 📸 **Screenshots/Video**
If applicable, add screenshots or screen recordings.

## 🧠 **Additional Context**
Any other context about the problem, especially if you're a neurodivergent user sharing specific challenges.

## 🎯 **BROski♾ Energy Level**
How excited are you to see this fixed? ⚡⚡⚡⚡⚡ (1-5 lightning bolts)
"""

with open(".github/ISSUE_TEMPLATE/bug_report.md", "w") as f:
    f.write(bug_template)

feature_template = """---
name: ✨ Feature Request
about: Suggest an amazing new feature for the constellation
title: '✨ [FEATURE] '
labels: 'enhancement'
assignees: ''

---

## 🌟 **Feature Description**
A clear and concise description of your awesome idea.

## 🎯 **Problem It Solves**
What problem does this feature solve? How does it help neurodivergent users?

## 💡 **Proposed Solution**
Describe your solution in detail. How would it work?

## 🧠 **Neurodivergent Benefits**
How would this feature specifically help:
- [ ] ADHD users (hyperfocus, attention, etc.)
- [ ] Autistic users (sensory, routine, etc.)  
- [ ] Dyslexic users (reading, processing, etc.)
- [ ] Other neurodivergent users

## 🎨 **Visual Mockup**
If you have sketches, mockups, or design ideas, share them!

## 🔧 **Technical Considerations**
Any technical details or implementation thoughts?

## 📱 **Device Support**
Should this work on:
- [ ] Desktop
- [ ] Mobile
- [ ] Tablet
- [ ] Screen readers
- [ ] Voice control

## 🎮 **Gamification Ideas**
Could this feature include achievements, progress tracking, or other fun elements?

## 🚀 **Priority Level**
How important is this feature?
- [ ] 🔥 Critical (blocks hyperfocus sessions)
- [ ] ⚡ High (would significantly improve experience)
- [ ] 🌟 Medium (nice to have)
- [ ] 💫 Low (future enhancement)

## 🤝 **Community Impact**
How would this benefit the broader neurodivergent developer community?

## 🎯 **BROski♾ Excitement Level**
How excited are you about this idea? 🚀🚀🚀🚀🚀 (1-5 rockets)
"""

with open(".github/ISSUE_TEMPLATE/feature_request.md", "w") as f:
    f.write(feature_template)

# Create PR template  
pr_template = """## 🌟 **What This PR Does**

Brief description of changes and motivation.

## 🎯 **Type of Change**
- [ ] 🐛 Bug fix (non-breaking change fixing an issue)
- [ ] ✨ New feature (non-breaking change adding functionality)
- [ ] 💥 Breaking change (fix or feature causing existing functionality to change)
- [ ] 📚 Documentation update
- [ ] ♿ Accessibility improvement
- [ ] 🎨 UI/UX enhancement
- [ ] 🚀 Performance optimization

## 🧪 **Testing Checklist**
- [ ] Code builds successfully
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Accessibility tested with screen reader
- [ ] Mobile/responsive design tested
- [ ] Cross-browser compatibility checked

## ♿ **Accessibility Review**
- [ ] Screen reader compatible
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators visible
- [ ] Hyperfocus-friendly (minimal distractions)
- [ ] Works with dyslexia-friendly fonts

## 🎮 **Gamification Impact**
If applicable:
- [ ] New achievements added
- [ ] Progress tracking updated
- [ ] Badge system enhanced
- [ ] User engagement improved

## 📱 **Device Testing**
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Chrome Mobile)
- [ ] Tablet (iPad, Android tablets)
- [ ] Screen readers (NVDA, JAWS, VoiceOver)

## 📸 **Visual Changes**
If UI changes, include before/after screenshots or GIFs.

## 🧠 **Neurodivergent User Impact**
How does this change affect neurodivergent users?
- ADHD users: 
- Autistic users:
- Dyslexic users:
- Other considerations:

## 🔗 **Related Issues**
Closes #issue_number
Relates to #issue_number

## 🎯 **BROski♾ Confidence Level**
How confident are you in this PR? ⭐⭐⭐⭐⭐ (1-5 stars)

## 📝 **Additional Notes**
Any other important information or special instructions.
"""

with open(".github/PULL_REQUEST_TEMPLATE.md", "w") as f:
    f.write(pr_template)

print("✅ Created GitHub templates and workflow!")
print(f"📁 Total folders created: {len(folders)}")
print("📄 Additional files created:")
print("- package.json")
print("- .github/workflows/deploy.yml") 
print("- .github/ISSUE_TEMPLATE/bug_report.md")
print("- .github/ISSUE_TEMPLATE/feature_request.md")
print("- .github/PULL_REQUEST_TEMPLATE.md")