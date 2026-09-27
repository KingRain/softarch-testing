"use client";

import CodeBlock from "./CodeBlock";
import { Terminal, CheckCircle2 } from "lucide-react";

export default function TopicPytest() {
  const walletScript = `# wallet.py
# Simple wallet logic to test

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
`;

  const testScript = `# test_wallet.py
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
    # Verify that attempting to withdraw more than balance raises ValueError
    with pytest.raises(ValueError, match="Insufficient balance"):
        wallet.withdraw(100.0)

def test_negative_deposit_error():
    wallet = CryptoWallet(50.0)
    with pytest.raises(ValueError, match="Deposit amount must be greater than zero"):
        wallet.deposit(-10.0)
`;

  const runCommand = `# 1. Install pytest
pip install pytest

# 2. Run your tests with verbose output
pytest test_wallet.py -v`;

  const terminalOutput = `============================= test session starts =============================
platform win32 -- Python 3.11.x, pytest-8.x.x
collected 5 items

test_wallet.py::test_initial_balance PASSED                              [ 20%]
test_wallet.py::test_deposit PASSED                                      [ 40%]
test_wallet.py::test_withdraw_success PASSED                              [ 60%]
test_wallet.py::test_withdraw_insufficient_funds PASSED                  [ 80%]
test_wallet.py::test_negative_deposit_error PASSED                       [100%]

============================== 5 passed in 0.04s ==============================`;

  return (
    <div className="space-y-8">
      {/* Title & Introduction */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-pill bg-linen-mist px-3 py-1 text-xs font-semibold text-forest-ink mb-3">
          Topic 1
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-obsidian">
          Unit Testing with PyTest
        </h1>
        <p className="mt-3 text-base text-charcoal leading-relaxed max-w-2xl">
          Unit tests check individual functions and classes in isolation. PyTest is Python&apos;s most
          popular testing framework because it uses simple <code className="font-mono text-sm bg-fog px-1.5 py-0.5 rounded text-forest-ink">assert</code> statements instead of boilerplate classes.
        </p>
      </div>

      {/* Quick Steps Card */}
      <div className="rounded-card border border-pebble/30 bg-fog/50 p-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-forest-ink mb-3">
          Quick Workflow
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-charcoal">
          <div className="bg-paper p-3 rounded-card border border-pebble/20">
            <span className="font-bold text-forest-ink block mb-1">1. Write Code</span>
            Create your application code in <code className="font-mono text-spruce">wallet.py</code>.
          </div>
          <div className="bg-paper p-3 rounded-card border border-pebble/20">
            <span className="font-bold text-forest-ink block mb-1">2. Write Tests</span>
            Create test functions starting with <code className="font-mono text-spruce">test_</code> in <code className="font-mono text-spruce">test_wallet.py</code>.
          </div>
          <div className="bg-paper p-3 rounded-card border border-pebble/20">
            <span className="font-bold text-forest-ink block mb-1">3. Run Pytest</span>
            Run <code className="font-mono text-spruce">pytest</code> in your terminal to see all tests pass.
          </div>
        </div>
      </div>

      {/* Script 1: Source code */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-obsidian tracking-tight">
            Script 1: Application Logic (<code className="font-mono text-base text-forest-ink">wallet.py</code>)
          </h2>
        </div>
        <p className="text-xs text-slate mt-1 mb-2">
          Save this file on your computer as <code className="font-mono font-medium">wallet.py</code>.
        </p>
        <CodeBlock filename="wallet.py" language="python" code={walletScript} />
      </div>

      {/* Script 2: Pytest Test Code */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-obsidian tracking-tight">
            Script 2: Unit Test Suite (<code className="font-mono text-base text-forest-ink">test_wallet.py</code>)
          </h2>
        </div>
        <p className="text-xs text-slate mt-1 mb-2">
          Save this file in the exact same directory as <code className="font-mono font-medium">test_wallet.py</code>.
        </p>
        <CodeBlock filename="test_wallet.py" language="python" code={testScript} />
      </div>

      {/* How to Run */}
      <div>
        <h2 className="text-xl font-bold text-obsidian tracking-tight mb-2">
          How to Run the Tests
        </h2>
        <p className="text-xs text-slate mb-2">
          Open your terminal in the folder containing both files and run:
        </p>
        <CodeBlock filename="terminal" language="bash" code={runCommand} />
      </div>

      {/* Expected Output */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="h-4 w-4 text-forest-ink" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-forest-ink">
            Expected Terminal Output
          </h3>
        </div>
        <div className="rounded-card border border-pebble/30 bg-[#0e0f0c] p-4 font-mono text-xs text-lime-voltage leading-relaxed overflow-x-auto">
          <pre>{terminalOutput}</pre>
        </div>
      </div>

      {/* Summary Box */}
      <div className="rounded-card border border-spruce/30 bg-linen-mist/60 p-4 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-spruce shrink-0 mt-0.5" />
        <div className="text-xs text-forest-ink leading-relaxed">
          <strong className="block font-bold mb-1">Key Pytest Rules to Remember:</strong>
          Test filenames must start with <code className="font-mono bg-paper px-1 py-0.5 rounded">test_</code> or end with <code className="font-mono bg-paper px-1 py-0.5 rounded">_test.py</code>. Test functions must start with <code className="font-mono bg-paper px-1 py-0.5 rounded">test_()</code>. Pytest discovers them automatically.
        </div>
      </div>
    </div>
  );
}
