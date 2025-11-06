import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Users, Crown, GraduationCap, Wallet } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Structured 3-Week Path',
    desc: 'From fundamentals to real projects with clear weekly milestones.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Certification',
    desc: 'Shareable certificate with QR-based verification after completion.'
  },
  {
    icon: Trophy,
    title: 'Gamified Learning',
    desc: 'Earn XP, unlock badges, and climb the leaderboard as you learn.'
  },
  {
    icon: Users,
    title: 'Community & Mentors',
    desc: 'Discuss lessons, get feedback, and access mentor office hours.'
  },
  {
    icon: Wallet,
    title: 'Referral Rewards',
    desc: 'Invite friends and earn points or cashback on every signup.'
  },
  {
    icon: Crown,
    title: 'Career-Ready Projects',
    desc: 'Build a capstone project you can showcase to employers.'
  },
];

export default function Features() {
  return (
    <section id="courses" className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why GetaiCertified</h2>
          <p className="mt-3 text-slate-600">Modern curriculum, hands-on tools, and outcomes that matter. Built for ambitious learners.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
