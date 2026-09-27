import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DummyCryptoWallet from "@/components/DummyCryptoWallet";

export default function DummyWalletPage() {
  return (
    <main className="min-h-screen bg-fog/40 py-10 px-4">
      <div className="max-w-xl mx-auto mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-pill border border-forest-ink/20 bg-paper px-4 py-1.5 text-xs font-semibold text-forest-ink hover:bg-linen-mist transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Testing Guide
        </Link>
        <span className="text-xs font-mono text-slate">URL: /dummy-wallet</span>
      </div>

      <DummyCryptoWallet standalone={false} />
    </main>
  );
}
