# test_selenium_login.py
# Automated UI test for WiseVault Crypto Wallet Login

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Target URL: Live Vercel production deployment
TARGET_URL = "https://softarch-testing.vercel.app/dummy-wallet"
# Alternatively for local testing: TARGET_URL = "http://localhost:3000/dummy-wallet"

def test_successful_login():
    print("\n[TEST 1] Testing Successful Login Flow...")
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        driver.get(TARGET_URL)

        wallet_input = driver.find_element(By.ID, "wallet-address")
        password_input = driver.find_element(By.ID, "password")
        login_button = driver.find_element(By.ID, "login-btn")

        wallet_input.clear()
        wallet_input.send_keys("demo@wallet.com")

        password_input.clear()
        password_input.send_keys("Password123!")

        login_button.click()

        status_element = WebDriverWait(driver, 8).until(
            EC.presence_of_element_located((By.ID, "status-message"))
        )

        assert "Login successful" in status_element.text
        print("  -> SUCCESS: Login successful message confirmed!")

        balance_element = driver.find_element(By.ID, "balance-display")
        assert "$14,250.00" in balance_element.text
        print("  -> SUCCESS: Wallet unlocked with correct balance!")

    finally:
        time.sleep(2)
        driver.quit()


def test_invalid_login():
    print("\n[TEST 2] Testing Invalid Credentials Flow...")
    driver = webdriver.Chrome()

    try:
        driver.get(TARGET_URL)

        driver.find_element(By.ID, "wallet-address").send_keys("wrong@wallet.com")
        driver.find_element(By.ID, "password").send_keys("WrongPass999")
        driver.find_element(By.ID, "login-btn").click()

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
    print("\nAll Selenium tests completed successfully! ✨")
