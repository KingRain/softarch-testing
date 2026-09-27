# wallet.py
# Simple crypto wallet application logic

class CryptoWallet:
    def __init__(self, initial_balance=0.0):
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative")
        self.balance = float(initial_balance)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be greater than zero")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be greater than zero")
        if amount > self.balance:
            raise ValueError("Insufficient balance")
        self.balance -= amount
        return self.balance
