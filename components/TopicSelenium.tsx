"use client";

import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function TopicSelenium() {
  const installCmd = `# 1. Install Selenium (Selenium 4+ has built-in automatic driver management)
pip install selenium

# Optional: If you prefer webdriver-manager
pip install webdriver-manager`;

  const seleniumScript = `# test_selenium_login.py
# Automated UI test for the WiseVault Crypto Login page

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Target URL: Live Vercel production deployment
TARGET_URL = "https://softarch-testing.vercel.app/dummy-wallet"
# Alternatively for local development: TARGET_URL = "http://localhost:3000/dummy-wallet"

def test_successful_login():
    print("\\n[TEST 1] Testing Successful Login Flow...")
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # 1. Open the dummy website
        driver.get(TARGET_URL)

        # 2. Locate form input elements by their unique IDs
        wallet_input = driver.find_element(By.ID, "wallet-address")
        password_input = driver.find_element(By.ID, "password")
        login_button = driver.find_element(By.ID, "login-btn")

        # 3. Enter valid demo credentials
        wallet_input.clear()
        wallet_input.send_keys("demo@wallet.com")

        password_input.clear()
        password_input.send_keys("Password123!")

        # 4. Click the login button
        login_button.click()

        # 5. Wait for status message and assert success
        status_element = WebDriverWait(driver, 8).until(
            EC.presence_of_element_located((By.ID, "status-message"))
        )

        assert "Login successful" in status_element.text
        print("  -> SUCCESS: Login successful message confirmed!")

        # 6. Verify dashboard balance appears
        balance_element = driver.find_element(By.ID, "balance-display")
        assert "$14,250.00" in balance_element.text
        print("  -> SUCCESS: Wallet unlocked with correct balance!")

    finally:
        time.sleep(2)  # Pause briefly to see the result
        driver.quit()


def test_invalid_login():
    print("\\n[TEST 2] Testing Invalid Credentials Flow...")
    driver = webdriver.Chrome()

    try:
        driver.get(TARGET_URL)

        # Enter wrong credentials
        driver.find_element(By.ID, "wallet-address").send_keys("wrong@wallet.com")
        driver.find_element(By.ID, "password").send_keys("WrongPass999")
        driver.find_element(By.ID, "login-btn").click()

        # Assert error message appears
        status_element = WebDriverWait(driver, 8).until(
            EC.presence_of_element_located((By.ID, "status-message"))
        )
        assert "Invalid credentials" in status_element.text
        print("  -> SUCCESS: Invalid login error detected properly!")

    finally:
        time.sleep(2)
        driver.quit()


if __name__ == "__main__":
    test_successful_login()
    test_invalid_login()
    print("\\nAll Selenium tests passed successfully! ✨")
`;

  const runScriptCmd = `# Run the Selenium test script directly against the live URL
python test_selenium_login.py`;

  return (
    <div className="space-y-8">
      {/* Title & Introduction */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-pill bg-linen-mist px-3 py-1 text-xs font-semibold text-forest-ink mb-3">
          Topic 2
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-obsidian">
          UI Automation with Selenium
        </h1>
        <p className="mt-3 text-base text-charcoal leading-relaxed max-w-2xl">
          Selenium automates real browsers to test user interface flows just like a human would:
          clicking buttons, entering text into inputs, and verifying visual results.
        </p>
      </div>

      {/* Target Dummy Site Notification Banner with Live Vercel URL */}
      <div className="rounded-card border border-forest-ink/20 bg-linen-mist p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-spruce block mb-1">
            Target Website Under Test (Live)
          </span>
          <p className="text-sm font-semibold text-forest-ink">
            WiseVault Crypto Wallet Dummy Login Page
          </p>
          <p className="text-xs text-slate mt-0.5">
            Deployed live at:{" "}
            <a
              href="https://softarch-testing.vercel.app/dummy-wallet"
              target="_blank"
              rel="noreferrer"
              className="font-mono font-bold text-forest-ink underline hover:text-spruce"
            >
              https://softarch-testing.vercel.app/dummy-wallet
            </a>
          </p>
        </div>
        <Link
          href="/dummy-wallet"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-pill bg-forest-ink px-4 py-2 text-xs font-semibold text-paper hover:bg-spruce transition shrink-0"
        >
          Open Dummy Site <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Step 1: Installation */}
      <div>
        <h2 className="text-xl font-bold text-obsidian tracking-tight mb-2">
          1. Install Selenium
        </h2>
        <p className="text-xs text-slate mb-2">
          Run this in your terminal. Modern Selenium (version 4.6+) automatically downloads and configures ChromeDriver for you.
        </p>
        <CodeBlock filename="terminal" language="bash" code={installCmd} />
      </div>

      {/* Step 2: Selenium Test Script */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-obsidian tracking-tight">
            2. Python Selenium Test Script (<code className="font-mono text-base text-forest-ink">test_selenium_login.py</code>)
          </h2>
        </div>
        <p className="text-xs text-slate mt-1 mb-2">
          This script tests both a valid login (unlocks wallet) and an invalid login against the live Vercel URL.
        </p>
        <CodeBlock filename="test_selenium_login.py" language="python" code={seleniumScript} />
      </div>

      {/* Step 3: Run Script */}
      <div>
        <h2 className="text-xl font-bold text-obsidian tracking-tight mb-2">
          3. Run the Automation
        </h2>
        <p className="text-xs text-slate mb-2">
          Execute the script from your terminal to launch Chrome and run the automated login flow:
        </p>
        <CodeBlock filename="terminal" language="bash" code={runScriptCmd} />
      </div>

      {/* Key Element Selectors Cheat Sheet */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-forest-ink mb-3">
          DOM Element Selectors Used
        </h3>
        <div className="overflow-x-auto rounded-card border border-pebble/30 bg-paper">
          <table className="w-full text-left text-xs">
            <thead className="bg-fog/60 border-b border-pebble/20 text-charcoal font-bold">
              <tr>
                <th className="px-4 py-2.5">UI Element</th>
                <th className="px-4 py-2.5">HTML Selector</th>
                <th className="px-4 py-2.5">Selenium Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pebble/10 text-charcoal">
              <tr>
                <td className="px-4 py-2.5 font-medium">Address Input</td>
                <td className="px-4 py-2.5 font-mono text-spruce">id=&quot;wallet-address&quot;</td>
                <td className="px-4 py-2.5 font-mono">driver.find_element(By.ID, &quot;wallet-address&quot;)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Password Input</td>
                <td className="px-4 py-2.5 font-mono text-spruce">id=&quot;password&quot;</td>
                <td className="px-4 py-2.5 font-mono">driver.find_element(By.ID, &quot;password&quot;)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Unlock Button</td>
                <td className="px-4 py-2.5 font-mono text-spruce">id=&quot;login-btn&quot;</td>
                <td className="px-4 py-2.5 font-mono">driver.find_element(By.ID, &quot;login-btn&quot;)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">Status / Alert</td>
                <td className="px-4 py-2.5 font-mono text-spruce">id=&quot;status-message&quot;</td>
                <td className="px-4 py-2.5 font-mono">WebDriverWait(driver, 8)...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Takeaway Tip */}
      <div className="rounded-card border border-spruce/30 bg-linen-mist/60 p-4 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-spruce shrink-0 mt-0.5" />
        <div className="text-xs text-forest-ink leading-relaxed">
          <strong className="block font-bold mb-1">Headless Tip for CI/CD Pipelines:</strong>
          To run tests silently in CI/CD without an actual browser GUI, configure headless mode:
          <br />
          <code className="font-mono bg-paper px-1.5 py-0.5 rounded border border-pebble/30 mt-1 inline-block">
            options = webdriver.ChromeOptions(); options.add_argument(&quot;--headless=new&quot;)
          </code>
        </div>
      </div>
    </div>
  );
}
