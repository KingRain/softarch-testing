"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FlaskConical,
  Globe,
  GitBranch,
  Wallet,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import TopicPytest from "@/components/TopicPytest";
import TopicSelenium from "@/components/TopicSelenium";
import TopicJenkins from "@/components/TopicJenkins";
import DummyCryptoWallet from "@/components/DummyCryptoWallet";

type TabId = "pytest" | "selenium" | "jenkins" | "dummy-wallet";

interface TopicConfig {
  id: TabId;
  index: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const topics: TopicConfig[] = [
  {
    id: "pytest",
    index: "01",
    title: "Unit Testing with PyTest",
    subtitle: "Python scripts & test assertions",
    icon: FlaskConical,
  },
  {
    id: "selenium",
    index: "02",
    title: "UI Testing with Selenium",
    subtitle: "Browser automation & login flow",
    icon: Globe,
  },
  {
    id: "jenkins",
    index: "03",
    title: "CI/CD Pipeline with Jenkins",
    subtitle: "Installation & automated builds",
    icon: GitBranch,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("pytest");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNextTab = (): TabId | null => {
    if (activeTab === "pytest") return "selenium";
    if (activeTab === "selenium") return "jenkins";
    if (activeTab === "jenkins") return "dummy-wallet";
    return null;
  };

  const nextTab = getNextTab();

  return (
    <div className="min-h-screen bg-paper flex flex-col text-charcoal">
      {/* Top Navigation Bar - Wise Style */}
      <header className="sticky top-0 z-30 h-16 border-b border-pebble/20 bg-paper/95 backdrop-blur px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-card text-forest-ink hover:bg-fog"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-forest-ink text-lime-voltage font-black text-sm tracking-tighter">
              ST
            </span>
            <div className="leading-tight">
              <span className="font-extrabold text-base tracking-tight text-obsidian block">
                TestingGuide
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate block -mt-0.5">
                PyTest • Selenium • Jenkins
              </span>
            </div>
          </Link>
        </div>

        {/* Top Right Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/dummy-wallet"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-pill border border-forest-ink bg-paper px-3.5 py-1.5 text-xs font-semibold text-forest-ink hover:bg-linen-mist transition"
          >
            <Wallet className="h-3.5 w-3.5 text-spruce" />
            <span>Open Dummy App</span>
            <ExternalLink className="h-3 w-3 text-pebble" />
          </Link>
          <button
            type="button"
            onClick={() => setActiveTab("dummy-wallet")}
            className="inline-flex items-center gap-1.5 rounded-pill bg-lime-voltage px-3.5 py-1.5 text-xs font-semibold text-forest-ink hover:opacity-90 transition"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Try Dummy</span> Wallet
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar Navigation */}
        <aside
          className={`
            fixed md:sticky top-16 z-20 h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-pebble/20 bg-paper p-5 transition-transform duration-200
            ${mobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate px-2 block">
              Core Topics
            </span>
          </div>

          {/* Topics List */}
          <nav className="space-y-1.5">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const isActive = activeTab === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTab(topic.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3.5 py-3 rounded-pill text-left transition text-xs font-medium
                    ${
                      isActive
                        ? "bg-lime-voltage text-forest-ink font-bold shadow-sm"
                        : "text-charcoal hover:bg-linen-mist/60"
                    }
                  `}
                >
                  <span
                    className={`
                      flex h-6 w-6 shrink-0 items-center justify-center rounded-pill font-mono text-[11px] font-semibold
                      ${isActive ? "bg-forest-ink text-lime-voltage" : "bg-fog text-slate"}
                    `}
                  >
                    {topic.index}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="truncate font-semibold">{topic.title}</div>
                    <div
                      className={`truncate text-[11px] ${
                        isActive ? "text-forest-ink/80" : "text-slate"
                      }`}
                    >
                      {topic.subtitle}
                    </div>
                  </div>
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? "text-forest-ink" : "text-pebble"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Interactive Dummy App Section in Sidebar */}
          <div className="mt-8 pt-6 border-t border-pebble/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate px-2 block mb-2">
              Practice Target
            </span>
            <button
              onClick={() => {
                setActiveTab("dummy-wallet");
                setMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3.5 py-3 rounded-pill text-left transition text-xs font-medium
                ${
                  activeTab === "dummy-wallet"
                    ? "bg-forest-ink text-paper font-bold"
                    : "text-charcoal hover:bg-linen-mist/60 border border-pebble/30"
                }
              `}
            >
              <div
                className={`
                  flex h-6 w-6 shrink-0 items-center justify-center rounded-pill
                  ${
                    activeTab === "dummy-wallet"
                      ? "bg-lime-voltage text-forest-ink"
                      : "bg-fog text-forest-ink"
                  }
                `}
              >
                <Wallet className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="truncate font-semibold">Dummy Crypto Login</div>
                <div
                  className={`truncate text-[11px] ${
                    activeTab === "dummy-wallet" ? "text-fog/70" : "text-slate"
                  }`}
                >
                  Live test target page
                </div>
              </div>
            </button>

            <div className="mt-3 px-2">
              <Link
                href="/dummy-wallet"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[11px] text-spruce hover:underline"
              >
                <ExternalLink className="h-3 w-3" /> Standalone URL: /dummy-wallet
              </Link>
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="mt-8 rounded-card bg-fog/70 p-3.5 text-xs text-charcoal border border-pebble/20">
            <span className="font-bold text-forest-ink block mb-1">Testing Tip</span>
            <p className="text-[11px] leading-relaxed text-slate">
              Copy the code blocks into your project directory to run Python pytest and Selenium tests locally!
            </p>
          </div>
        </aside>

        {/* Main Content View */}
        <main className="flex-1 min-w-0 p-6 sm:p-10 md:p-12">
          <div className="max-w-3xl mx-auto">
            {activeTab === "pytest" && <TopicPytest />}
            {activeTab === "selenium" && <TopicSelenium />}
            {activeTab === "jenkins" && <TopicJenkins />}
            {activeTab === "dummy-wallet" && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-pill bg-linen-mist px-3 py-1 text-xs font-semibold text-forest-ink mb-3">
                    Target Site
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-obsidian">
                    WiseVault Crypto Dummy Login
                  </h1>
                  <p className="mt-3 text-base text-charcoal leading-relaxed">
                    This is the live dummy website that Selenium automated tests run against.
                    You can try testing it manually here or run the Selenium script on <code className="font-mono text-sm bg-fog px-1.5 py-0.5 rounded text-forest-ink">http://localhost:3000/dummy-wallet</code>.
                  </p>
                </div>

                <div className="pt-2">
                  <DummyCryptoWallet />
                </div>
              </div>
            )}

            {/* Bottom Next Topic Navigation */}
            {nextTab && (
              <div className="mt-14 pt-8 border-t border-pebble/20 flex justify-end">
                <button
                  onClick={() => {
                    setActiveTab(nextTab);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-pill bg-forest-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-spruce transition shadow-sm"
                >
                  <span>
                    {nextTab === "dummy-wallet"
                      ? "Try Dummy Crypto Wallet"
                      : `Next Topic: ${
                          topics.find((t) => t.id === nextTab)?.title || ""
                        }`}
                  </span>
                  <ChevronRight className="h-4 w-4 text-lime-voltage" />
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
