# Software Testing Guide Website

A Next.js educational guide website teaching unit testing with **PyTest**, browser UI testing with **Selenium**, and automated builds with **Jenkins**, following the Wise design system.

- **Live Production URL**: [https://softarch-testing.vercel.app](https://softarch-testing.vercel.app)
- **Live Dummy App Target**: [https://softarch-testing.vercel.app/dummy-wallet](https://softarch-testing.vercel.app/dummy-wallet)

## Features
- **Sidebar with 3 Core Topics**:
  1. **Unit Testing with PyTest**: Concept, installation, two python scripts (`wallet.py` and `test_wallet.py`) with syntax highlighting, and expected terminal output.
  2. **UI Testing with Selenium**: Browser automation, installation, element selectors table, and python automation script (`test_selenium_login.py`) running against the live Vercel URL.
  3. **Continuous Integration with Jenkins**: Docker and Java installation, project setup, and `Jenkinsfile` pipeline.
- **Embedded Dummy Crypto Wallet**: Live interactive target app (also available at standalone URL `/dummy-wallet`) with explicit HTML selector IDs for Selenium automation.
- **Wise Design System**: Adheres to `DESIGN.md` (Forest Ink, Lime Voltage, Fog surfaces, pill-shaped buttons, custom SVG logo, and Prism.js syntax highlighting).

## Getting Started

### 1. Run the Web Application Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or visit the live deployment at [https://softarch-testing.vercel.app](https://softarch-testing.vercel.app).

### 2. Run the PyTest Unit Tests
```bash
pip install pytest
pytest test_wallet.py -v
```

### 3. Run the Selenium UI Automation Test
Run directly against the live Vercel URL or local environment:
```bash
pip install selenium
python test_selenium_login.py
```
