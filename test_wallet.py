# test_wallet.py
# Pytest unit tests for CryptoWallet

import pytest
from wallet import CryptoWallet

def test_initial_balance():
    wallet = CryptoWallet(100.0)
    assert wallet.balance == 100.0

def test_deposit():
    wallet = CryptoWallet(50.0)
    result = wallet.deposit(25.0)
    assert result == 75.0
    assert wallet.balance == 75.0

def test_withdraw_success():
    wallet = CryptoWallet(100.0)
    result = wallet.withdraw(40.0)
    assert result == 60.0
    assert wallet.balance == 60.0

def test_withdraw_insufficient_funds():
    wallet = CryptoWallet(30.0)
    with pytest.raises(ValueError, match="Insufficient balance"):
        wallet.withdraw(100.0)

def test_negative_deposit_error():
    wallet = CryptoWallet(50.0)
    with pytest.raises(ValueError, match="Deposit amount must be greater than zero"):
        wallet.deposit(-10.0)
