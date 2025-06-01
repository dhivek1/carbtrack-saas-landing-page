'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Container';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Benefits = () => {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <Container className="flex flex-col md:flex-row items-center gap-12">
        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/carbon-tracker-dashboard.png"
            alt="Carbon emission tracker interface"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={fadeUp}
            viewport={{ once: true }}
          >
            Smarter Emission Tracking
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 text-lg"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeUp}
            viewport={{ once: true }}
          >
            Monitor, analyze, and reduce your carbon footprint with ease. Our smart platform empowers individuals and organizations to act sustainably.
          </motion.p>

          <ul className="space-y-4 text-gray-700">
            {[
              {
                icon: '🌱',
                title: 'Automatic Categorization',
                desc: 'Emissions are sorted by source—transport, electricity, and lifestyle.',
              },
              {
                icon: '🎯',
                title: 'Personal Goals',
                desc: 'Set monthly or yearly CO₂ reduction targets with intelligent tracking.',
              },
              {
                icon: '📈',
                title: 'Insights & Forecasts',
                desc: 'AI-powered analytics show you how to stay on track and improve.',
              },
            ].map((item, i) => (
              <motion.li
                key={item.title}
                className="flex items-start gap-3"
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <span className="text-green-600 text-xl">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong><br />
                  {item.desc}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
};

export default Benefits;
