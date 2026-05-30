import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-apple-black dark:text-apple-white">
            About
          </h2>
          <p className="text-lg leading-relaxed text-apple-black/60 dark:text-apple-white/60 font-light max-w-xl mx-auto">
            热爱摄影，热爱生活。通过镜头捕捉光影瞬间，记录每一个值得被记住的画面。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
