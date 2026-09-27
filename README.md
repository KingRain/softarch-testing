# Software Testing Guide Website

A Next.js educational guide website teaching unit testing with **PyTest**, browser UI testing with **Selenium**, and automated builds with **Jenkins**, following the Wise design system.

## Features
- **Sidebar with 3 Core Topics**:
  1. **Unit Testing with PyTest**: Concept, installation, two python scripts (`wallet.py` and `test_wallet.py`), and expected output.
  2. **UI Testing with Selenium**: Browser automation, installation, element selectors, and python automation script (`test_selenium_login.py`).
  3. **Continuous Integration with Jenkins**: Docker and Java installation, project setup, and `Jenkinsfile` pipeline.
- **Embedded Dummy Crypto Wallet**: Live interactive target app (also available at standalone URL `/dummy-wallet`) with explicit HTML selector IDs for Selenium automation.
- **Wise Design System**: Adheres to `DESIGN.md` (Forest Ink, Lime Voltage, Fog surfaces, pill-shaped buttons, clear typography).

## Getting Started

### 1. Run the Web Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Run the PyTest Unit Tests
```bash
pip install pytest
pytest test_wallet.py -v
```

### 3. Run the Selenium UI Automation Test
With the website running on `localhost:3000`:
```bash
pip install selenium
python test_selenium_login.py
```
