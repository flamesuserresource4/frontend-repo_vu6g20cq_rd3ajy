import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="enroll" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 sm:p-10"
        >
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-black/5" />
          <div className="absolute left-10 bottom-0 mb-[-20px] h-32 w-32 rounded-full bg-black/5" />
          <div className="relative">
            <h3 className="text-2xl font-bold">Ready to start your AI journey?</h3>
            <p className="mt-2 max-w-2xl text-slate-600">Join a cohort of motivated learners. Finish in 21 days, build a portfolio-worthy project, and earn a verified certificate.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium">Enroll for Free</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-medium bg-white">Talk to Advisor</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
