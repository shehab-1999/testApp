// components/Intro.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000); // عرض المقدمة لـ 4 ثوانٍ
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2.5 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        أهلاً بك في موقعنا
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        نأخذك في رحلة فريدة من نوعها
      </motion.p>
    </motion.div>
  );
}
