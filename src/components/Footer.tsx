'use client';

export default function Footer() {
  return (
    <footer className="bg-[#191816] py-14 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white">
                <span className="text-[11px] font-black leading-none">SRC</span>
              </div>
              <span className="text-xl font-bold">SmartRealtyConnect</span>
            </div>
            <p className="mt-5 max-w-md leading-7 text-[#f7efe0]/70">
              A listing growth team for real estate agents who want every property to create better conversations, follow-up, and content.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-4 space-y-3 text-[#f7efe0]/70">
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#features" className="hover:text-white">What it handles</a></li>
              <li><a href="#pricing" className="hover:text-white">Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-4 space-y-3 text-[#f7efe0]/70">
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#faq" className="hover:text-white">Questions</a></li>
              <li><a href="#book" className="hover:text-white">Get a report</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-[#f7efe0]/60">
          © 2026 SmartRealtyConnect. Built for real estate agents who want every listing worked properly.
        </div>
      </div>
    </footer>
  );
}
