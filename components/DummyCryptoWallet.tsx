"use client";

import { useState } from "react";
import { KeyRound, ShieldCheck, Wallet, ArrowUpRight, ArrowDownLeft, Lock, RefreshCw } from "lucide-react";

interface DummyCryptoWalletProps {
  standalone?: boolean;
}

export default function DummyCryptoWallet({ standalone = false }: DummyCryptoWalletProps) {
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<{ text: string; type: "idle" | "success" | "error" }>({
    text: "",
    type: "idle",
  });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [balance, setBalance] = useState(14250.0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Valid demo credentials
    const validAddresses = ["demo@wallet.com", "0x71C2a8d11B3eF8e682A49eF9f", "admin"];
    const validPass = "Password123!";

    if (validAddresses.includes(address.trim()) && password === validPass) {
      setStatus({
        text: "Login successful! Wallet unlocked.",
        type: "success",
      });
      setIsUnlocked(true);
    } else {
      setStatus({
        text: "Invalid credentials. Please verify wallet address and password.",
        type: "error",
      });
      setIsUnlocked(false);
    }
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    setPassword("");
    setStatus({
      text: "Wallet locked successfully.",
      type: "idle",
    });
  };

  const fillDemoCredentials = () => {
    setAddress("demo@wallet.com");
    setPassword("Password123!");
    setStatus({ text: "", type: "idle" });
  };

  return (
    <div className={`w-full max-w-xl mx-auto ${standalone ? "py-10 px-4" : ""}`}>
      {/* Container Card */}
      <div className="rounded-largeCard border border-pebble/30 bg-paper shadow-card overflow-hidden">
        {/* Header Bar */}
        <div className="bg-forest-ink text-paper px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-lime-voltage text-forest-ink font-black text-lg">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-paper flex items-center gap-2">
                WiseVault Crypto
                <span className="rounded-pill bg-lime-voltage/20 px-2 py-0.5 text-[11px] font-mono font-medium text-lime-voltage">
                  Dummy App
                </span>
              </h2>
              <p className="text-xs text-fog/70">Target page for Selenium automated login testing</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-voltage animate-pulse" />
            <span className="text-xs text-lime-voltage font-medium">Network: Testnet</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          {!isUnlocked ? (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-obsidian tracking-tight">Unlock Your Vault</h3>
                <p className="text-sm text-slate mt-1">
                  Enter your registered address or email to test the authentication flow.
                </p>
              </div>

              {/* Demo Credentials Helper Pill */}
              <div className="mb-6 rounded-card border border-pebble/20 bg-fog/60 p-3.5 text-xs text-charcoal">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-forest-ink flex items-center gap-1.5">
                    <KeyRound className="h-3.5 w-3.5 text-spruce" /> Valid Test Credentials:
                  </span>
                  <button
                    type="button"
                    onClick={fillDemoCredentials}
                    className="inline-flex items-center gap-1 font-semibold text-spruce underline hover:text-forest-ink"
                  >
                    <RefreshCw className="h-3 w-3" /> Auto-fill
                  </button>
                </div>
                <div className="font-mono text-[12px] space-y-0.5 text-charcoal">
                  <div>
                    <span className="text-slate">Address / Email:</span>{" "}
                    <code className="bg-paper px-1.5 py-0.5 rounded border border-pebble/30 font-bold">
                      demo@wallet.com
                    </code>
                  </div>
                  <div>
                    <span className="text-slate">Password:</span>{" "}
                    <code className="bg-paper px-1.5 py-0.5 rounded border border-pebble/30 font-bold">
                      Password123!
                    </code>
                  </div>
                </div>
              </div>

              {/* Status Message for Selenium assertion */}
              {status.text && (
                <div
                  id="status-message"
                  className={`mb-5 rounded-card px-4 py-3 text-sm font-medium border ${
                    status.type === "success"
                      ? "border-spruce/30 bg-linen-mist text-forest-ink"
                      : status.type === "error"
                      ? "border-alarm-red/30 bg-red-50 text-alarm-red"
                      : "border-pebble/30 bg-fog text-charcoal"
                  }`}
                >
                  {status.text}
                </div>
              )}

              {/* Login Form with precise Selenium Target IDs */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="wallet-address" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Wallet Address / Email
                  </label>
                  <input
                    id="wallet-address"
                    name="walletAddress"
                    type="text"
                    required
                    placeholder="e.g. demo@wallet.com or 0x71C..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-input border border-pebble px-4 py-2.5 text-sm text-obsidian placeholder:text-pebble focus:border-forest-ink focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Password / Private Key
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter Password123!"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-input border border-pebble px-4 py-2.5 text-sm text-obsidian placeholder:text-pebble focus:border-forest-ink focus:outline-none transition"
                  />
                </div>

                <button
                  id="login-btn"
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-pill bg-lime-voltage px-6 py-3 text-base font-semibold text-forest-ink hover:opacity-90 active:scale-[0.99] transition shadow-sm"
                >
                  <Lock className="h-4 w-4" /> Unlock Wallet
                </button>
              </form>
            </div>
          ) : (
            /* Dashboard View after successful login */
            <div id="wallet-dashboard" className="space-y-6">
              <div
                id="status-message"
                className="rounded-card border border-spruce/30 bg-linen-mist px-4 py-3 text-sm font-semibold text-forest-ink flex items-center gap-2"
              >
                <ShieldCheck className="h-5 w-5 text-spruce shrink-0" />
                <span>{status.text || "Login successful! Wallet unlocked."}</span>
              </div>

              {/* Balance Card */}
              <div className="rounded-largeCard bg-forest-ink text-paper p-6 relative overflow-hidden">
                <div className="text-xs uppercase tracking-wider text-lime-voltage font-semibold">
                  Vault Balance (USDT / USD)
                </div>
                <div id="balance-display" className="text-4xl font-black tracking-tight text-paper mt-2">
                  ${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-linen-mist/80">
                  <span className="font-mono">Account: {address || "demo@wallet.com"}</span>
                </div>
              </div>

              {/* Quick Actions (Dummy) */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBalance((prev) => prev + 500)}
                  className="flex items-center justify-center gap-2 rounded-card border border-pebble/30 bg-fog p-3 text-sm font-semibold text-forest-ink hover:bg-linen-mist transition"
                >
                  <ArrowDownLeft className="h-4 w-4 text-spruce" /> Receive +$500
                </button>
                <button
                  type="button"
                  onClick={() => setBalance((prev) => Math.max(0, prev - 250))}
                  className="flex items-center justify-center gap-2 rounded-card border border-pebble/30 bg-fog p-3 text-sm font-semibold text-forest-ink hover:bg-linen-mist transition"
                >
                  <ArrowUpRight className="h-4 w-4 text-alarm-red" /> Send -$250
                </button>
              </div>

              {/* Logout Button */}
              <button
                id="logout-btn"
                type="button"
                onClick={handleLogout}
                className="w-full rounded-pill border border-forest-ink bg-paper px-6 py-2.5 text-sm font-semibold text-forest-ink hover:bg-fog transition text-center"
              >
                Lock Wallet / Log Out
              </button>
            </div>
          )}
        </div>

        {/* Footer info for testing */}
        <div className="border-t border-pebble/20 bg-fog/50 px-6 py-3 text-center text-xs text-slate">
          Selector IDs for automation: <code className="text-forest-ink font-semibold">#wallet-address</code>,{" "}
          <code className="text-forest-ink font-semibold">#password</code>,{" "}
          <code className="text-forest-ink font-semibold">#login-btn</code>,{" "}
          <code className="text-forest-ink font-semibold">#status-message</code>
        </div>
      </div>
    </div>
  );
}
