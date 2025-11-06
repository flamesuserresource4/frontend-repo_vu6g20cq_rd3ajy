import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTASection from './components/CTASection';

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} GetaiCertified. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
