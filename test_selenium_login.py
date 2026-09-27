# test_selenium_login.py
# Automated UI test for WiseVault Crypto Wallet Login

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

TARGET_URL = "https://softarch-testing.vercel.app/dummy-wallet"

def get_configured_driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1280,800")
    return webdriver.Chrome(options=options)

def test_successful_login():
    print("\n[TEST 1] Testing Successful Login Flow...")
    driver = get_configured_driver()

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

        status_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "status-message"))
        )

        assert "Login successful" in status_element.text
        print("  -> SUCCESS: Login successful message confirmed!")

        balance_element = driver.find_element(By.ID, "balance-display")
        assert "$14,250.00" in balance_element.text
        print("  -> SUCCESS: Wallet unlocked with correct balance!")

    finally:
        driver.quit()


def test_invalid_login():
    print("\n[TEST 2] Testing Invalid Credentials Flow...")
    driver = get_configured_driver()

    try:
        driver.get(TARGET_URL)

        driver.find_element(By.ID, "wallet-address").send_keys("wrong@wallet.com")
        driver.find_element(By.ID, "password").send_keys("WrongPass999")
        driver.find_element(By.ID, "login-btn").click()

        status_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "status-message"))
        )
        assert "Invalid credentials" in status_element.text
        print("  -> SUCCESS: Invalid login error detected properly!")

    finally:
        driver.quit()


if __name__ == "__main__":
    test_successful_login()
    test_invalid_login()
    print("\n[PASSED] All Selenium tests completed successfully!")
