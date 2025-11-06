import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BadgeCheck } from 'lucide-react';

// Safely load Spline on the client only. If the package/scene fails, we gracefully degrade.
function SafeSplineBackground() {
  const [SplineComp, setSplineComp] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('@splinetool/react-spline')
      .then((m) => {
        if (mounted) setSplineComp(() => m.default);
      })
      .catch(() => {
        // Ignore – fallback gradient will show
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!SplineComp) return null;
  const Spline = SplineComp;
  return (
    <div className="absolute inset-0">
      <Spline scene="https://prod.spline.design/8f1y7rQnJ2eR2qj5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <SafeSplineBackground />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 w-max">
                <BadgeCheck className="h-4 w-4 text-green-600" />
                Learn AI Tools. Build Projects. Get Certified.
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Master AI in 3 Weeks
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                A structured, hands-on program covering AI fundamentals, 14+ essential tools, and a real capstone project. Earn an industry-ready certificate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#enroll" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium">
                  Enroll Now
                </a>
                <a href="#syllabus" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-medium">
                  View Syllabus
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex -space-x-2">
                  {[0,1,2,3,4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 text-yellow-500" />
                  4.9/5 by 1,200+ learners
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">3-Week Outcome-Driven Curriculum</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-black" /> Week 1: AI Fundamentals & Mindset</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-black" /> Week 2: 14+ AI Tools: ChatGPT, Midjourney, Runway, Notion AI & more</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-black" /> Week 3: Capstone Project + Certification</li>
                </ul>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ['Learners', '1.2k+'],
                    ['Avg. Time', '21 days'],
                    ['Rating', '4.9'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-slate-200 bg-white p-3">
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-xs text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
