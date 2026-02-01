'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { tr } from 'motion/react-client';

const corePlanFeatures = [
  {
    title: 'First Mockup in 72hrs',
    description: 'Initial design concepts delivered in 3 days with quick turnaround.'
  },
  {
    title: 'Single Project Queue',
    description: 'Work on dedicated projects tailored to your needs.'
  },
  {
    title: 'Basic Design Iterations',
    description: 'Three revision rounds included with each project.'
  },
  {
    title: 'Dedicated Senior Designer',
    description: 'Experienced designer assigned to bring ideas to life.'
  },
  {
    title: 'Standard Development',
    description: 'Professional development using standard practices.'
  }
];

const proPlanFeatures = [
  {
    title: 'First Mockup in 48hrs',
    description: 'Immediate project kickoff with accelerated premium delivery time.'
  },
  {
    title: 'Priority Project Handling',
    description: 'Priority queue with enhanced team focus and rapid delivery.'
  },
  {
    title: 'Unlimited Design Iterations',
    description: 'Unlimited design refinements until perfect alignment is achieved.'
  },
  {
    title: 'Full Creative Team',
    description: 'Complete creative team access with senior experts and art direction.'
  },
  {
    title: 'Framer Development',
    description: 'Advanced Framer development optimized for SEO and responsiveness.'
  }
];

interface CursorPosition {
  x: number;
  y: number;
}

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<'core' | 'pro'>('core');
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = selectedPlan === 'core' ? corePlanFeatures : proPlanFeatures;
  const price = selectedPlan === 'core' ? '5,499' : '9,800';

  return (
    <div className="min-h-screen bg-background text-foreground cursor-none overflow-x-hidden md:px-10 px-6 ">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 z-100 bg-accent rounded-full pointer-events-none"
        animate={{
          x: cursor.x - 12,
          y: cursor.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40"
      >
        <div className="max-w-7xl mx-auto py-3 flex items-center justify-center gap-[16px] flex-col-reverse md:flex-row">
          <div className="flex items-start gap-1 md:pe-6 md:border-r  border-[#c0c0c0] ">
            <div className="pt-[10px]">
              <img src="/title-circle.svg" alt="" className='w-[16px] h-[16px]' />
            </div>
            <span className="font-medium md:text-[35px] text-[32px] text-[#8A8A91]">Membership Plans</span>
          </div>
          <p className="text-[17px] text-[#333336] border-b md:border-none md:pb-0 pb-2">
            pricing
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className=" mx-auto py-[60px]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl text-[#333336] md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight tracking-tight"
          >
            Your passport to flexible
            <br />
            design revisions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[32px] md:text-[35px] font-medium text-[#8a8a91] mb-12 max-w-3xl mx-auto leading-tight"
          >
            Get unlimited creativity and all premium features

            with our monthly all-in-one plan.
          </motion.p>
        </motion.section>



        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-[80px] min-h-[700px]">
          {/* Left - Placeholder Image */}
          
            <motion.div
              key={selectedPlan}

              className="flex flex-col items-center  min-h-[500px]"
            >
              <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden shadow-sm border border-border/50">
                {/* Background Image */}
                <motion.div
                  key={`bg-${selectedPlan}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={selectedPlan === 'core' ? '/core-plan.png' : '/pro-plan.png'}
                    alt={`${selectedPlan} plan background`}
                    className="w-full h-full object-cover"
                  />
                  {/* Optional overlay for better text readability */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" /> */}
                </motion.div>

                {/* Placeholder Image Content */}
                <motion.div

                  className="flex flex-col items-center justify-center w-full h-full relative z-10"
                >
                  {/* Overlay Text */}
                  <div className="absolute top-6 left-6 text-left leading-tight">
                    <p className="text-[19px] font-medium text-accent">Arpeggio</p>
                    <p className="text-[28px] font-medium text-foreground">{selectedPlan === 'core' ? 'Core' : 'Pro'} Plan</p>
                  </div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="mt-4 text-center flex ">
                      <span className="text-[17px] text-accent">*</span> <span className="text-[17px] text-[#333336] text-semibold">Pause or cancel whenever you wish.</span>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Disclaimer */}

            </motion.div>
          

          {/* Center - Pricing & CTA */}
          

            <motion.div
              key={`pricing-${selectedPlan}`}

              className="flex flex-col items-center justify-center pt-[40px] px-6"
            >
              {/* Plan Toggle */}
              <motion.div
               
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-1 bg-muted rounded-full  border border-black">
                  <motion.button
                    onClick={() => setSelectedPlan('core')}
                    className={`p-4 rounded-full font-medium text-sm transition-all cursor-none ${selectedPlan === 'core'
                        ? 'bg-foreground text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                    Core Plan {selectedPlan === 'core'
                        ? <img src="core-icon.svg" alt="" />
                        : <img src="core-icon-dark.svg" alt="" />
                      }
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedPlan('pro')}
                    className={`p-4 rounded-full font-medium text-sm transition-all cursor-none ${selectedPlan === 'pro'
                        ? 'bg-foreground text-background shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      Pro Plan <img src="pro-icon.svg" alt="" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
              <p className="text-[32px] md:text-[48px] text-[#8a8a91] mb-12 md:mb-8 text-center font-medium leading-tight">Simple pricing, powerful <br className='hidden md:inline-block'/> features, no hidden fees</p>

              <motion.div
               
                className="mb-[9px]"
              >
                <div className="flex  justify-center gap-3">
                  <span className="text-[40px] md:text-7xl font-bold text-foreground">${price}</span>
                  <span className="text-[17px] text-[#333336]">/month</span>
                </div>
              </motion.div>

              <p className="mb-12 md:mb-8 text-center">
                <span className="text-[17px] text-accent">*</span> <span className="text-[17px] text-[#8a8a91]">Minimal booking period — 2 months.</span>
              </p>

              <p className="text:[19px] md:text-[21px] text-[#8a8a91] mb-12 md:mb-8 text-center leading-relaxed">
                Schedule a brief call if you need
                <br />
                further clarification.
              </p>

              {/* CTA Links */}
              <div className="flex gap-6 items-center justify-center">

                <motion.button
                  className="font-semibold hover:text-accent text-[24px] md:text-[28px] flex flex-col items-start hidden cursor-none"
                  initial="initial"
                  whileHover="hover"
                >
                  select plan

                  <svg
                    width="90%"
                    height="2"
                    viewBox="0 0 200 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-accent" 
                  >
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="200"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      variants={{
                        initial: { pathLength: 0.1 },
                        hover: { pathLength: 1 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </svg>
                </motion.button>
                <motion.button
                  className="font-semibold hover:text-accent text-[24px] md:text-[28px] flex flex-col items-start cursor-none"
                  initial="initial"
                  whileHover="hover"
                >
                select plan
                  <svg
                    width="100%"
                    height="2"
                    viewBox="0 0 150 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-accent" 
                  >
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="200"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      variants={{
                        initial: { pathLength: 0.1 },
                        hover: { pathLength: 1},
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </svg>
                </motion.button>
                <motion.button
                  className="font-semibold hover:text-accent  text-[24px] md:text-[28px] flex flex-col items-start cursor-none"
                  initial="initial"
                  whileHover="hover"
                >
                  quick call

                  <svg
                    width="90%"
                    height="2"
                    viewBox="0 0 150 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-accent" 
                  >
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="200"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      variants={{
                        initial: { pathLength: 0.1 },
                        hover: { pathLength: 0.9 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          

          {/* Right - Features List */}
          
            <motion.div
              key={`features-${selectedPlan}`}

              className="flex flex-col gap-0 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  
                  className="py-5 border-b border-border/50 last:border-b-0 flex gap-4 items-start group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    {/* <Check className="w-5 h-5 text-accent" strokeWidth={2.5} /> */}
                    <img src="check.svg" className="w-5 h-5 " alt="" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#333336] text-[21px] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[17px] text-[#929298] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          
        </div>
      </main>
    </div>
  );
}
