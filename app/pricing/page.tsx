'use client';

import { motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const corePlanFeatures = [
    {
        title: 'First Mockup in 72hrs',
        description: 'Initial design concepts delivered in 3 days with quality-focused execution'
    },
    {
        title: 'Single Project Queue',
        description: 'Dedicated project queue ensuring focused attention on your requirements'
    },
    {
        title: 'Basic Design Iterations',
        description: 'Three rounds of design refinements to achieve your desired outcomes'
    },
    {
        title: 'Dedicated Senior Designer',
        description: 'Experienced designer assigned to bring your vision to life effectively'
    },
    {
        title: 'Standard Development',
        description: 'Standard development using proven frameworks for reliable results'
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

    // Memoize derived values to prevent unnecessary recalculations
    const { features, price } = useMemo(() => ({
        features: selectedPlan === 'core' ? corePlanFeatures : proPlanFeatures,
        price: selectedPlan === 'core' ? '5,499' : '9,800'
    }), [selectedPlan]);

    return (
        <div className="bg-[#fff] cursor-none overflow-x-hidden md:px-10 md:pt-50 px-6 pt-15 tracking-[-.04em]  min-h-screen">

            <div
                className="fixed w-6 h-6 z-100 bg-[#ff4400] rounded-full pointer-events-none hidden md:block"
                style={{ left: cursor.x - 12, top: cursor.y - 12 }}
            />
            <div className='flex flex-col items-center justify-center gap-6 md:gap-15 gap-10 '>
            <div className='md:pt-10 pt-6 pb-15 gap-15 flex flex-col items-center justify-center w-full'>

                {/* Header */}
                <header

                    className="border-b border-[#e6e6e6] w-full pb-3"
                >
                    <div className="flex items-center justify-center gap-[16px] flex-col-reverse md:flex-row  pb-3 ">
                        <div className="flex items-start gap-1 md:pe-6 md:border-r  border-[#c0c0c0] ">
                            <div className="pt-[5px]">
                                <Image src="/title-circle.svg" alt="" width={16} height={16} />
                            </div>
                            <span className="font-medium md:text-[35px] text-[32px] md:text-[#c0c0c0]  text-[#929298] leading-[1.2em] tracking-[-.04em]">Membership Plans</span>
                        </div>
                        <p className="text-[17px] text-[#333336] border-b border-[#c0c0c0] md:border-none md:pb-0 pb-2">
                            pricing
                        </p>
                    </div>
                </header>
                <section
                    className="text-center flex flex-col items-center justify-center gap-6"
                >
                    <h1
                        className="text-5xl text-[#333336] md:text-6xl lg:text-7xl font-semibold leading-[1.1em] tracking-[-.04em]"
                    >
                        Your passport to flexible
                        <br />
                        design revisions
                    </h1>
                    <p
                        className="text-[32px] md:text-[35px] font-medium text-[#8a8a91]  mx-auto leading-[1.2em] tracking-[-.04em]"
                    >
                        Get unlimited creativity and all premium features
                        <br className='hidden md:inline-block' />
                        with our monthly All-In-One plan.
                    </p>
                </section>
            </div>

            {/* Main Content */}
            <main className=" w-full">

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-[80px] min-h-[700px]">
                    {/* Left - Placeholder Image */}

                    <div
                        key={selectedPlan}

                        className="flex flex-col items-center  min-h-[500px]"
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden shadow-sm border border-[#e6e6e6]/50">
                            {/* Background Image */}
                            <div
                                key={`bg-${selectedPlan}`}

                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={selectedPlan === 'core' ? '/core-plan.png' : '/pro-plan.png'}
                                    alt={`${selectedPlan} plan background`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Placeholder Image Content */}
                            <div
                                className="flex flex-col items-center justify-center w-full h-full relative z-10"
                            >
                                {/* Overlay Text */}
                                <div className="absolute top-6 left-6 text-left">
                                    <p className="md:text-[19px] text-[17px] leading-[1.4em] font-medium text-[#ff4400]">Arpeggio</p>
                                    <p className="md:text-[28px] text-[24px] leading-[1.2em] font-medium text-[#333336]">{selectedPlan === 'core' ? 'Core' : 'Pro'} Plan</p>
                                </div>
                                <div className="absolute bottom-6 left-6 text-left">
                                    <p className="mt-4 text-center flex ">
                                        <span className="text-[17px] text-[#ff4400]">*</span>&nbsp;<span className="text-[17px] text-[#333336] font-medium"> Pause or cancel whenever you wish.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Center - Pricing & CTA */}


                    <div
                        key={`pricing-${selectedPlan}`}
                        className="flex flex-col items-center justify-center md:px-0 px-6  min-h-[500px] md:pt-0 pt-10 gap-12"
                    >
                        {/* Plan Toggle */}
                        <div className="flex flex-col justify-center items-center gap-8">
                            <div className="inline-flex items-center   justify-center rounded-full  border border-black">
                                <button
                                    onClick={() => setSelectedPlan('core')}
                                    className={`p-4 rounded-full font-medium text-sm transition-all cursor-none ${selectedPlan === 'core'
                                        ? 'bg-[#333336] text-white shadow-sm'
                                        : 'text-[#333336] '
                                        }`}

                                >
                                    <span className="flex items-center gap-3 text-[17px] leading-[1.2em]">
                                        Core Plan {selectedPlan === 'core'
                                            ? <Image src="/core-icon.svg" alt="" width={20} height={20} />
                                            : <Image src="/core-icon-dark.svg" alt="" width={20} height={20} />
                                        }
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedPlan('pro')}
                                    className={`p-4 rounded-full font-medium text-sm transition-all cursor-none ${selectedPlan === 'pro'
                                        ? 'bg-[#333336] text-[#fafafa] shadow-sm'
                                        : 'text-[#333336] '
                                        }`}

                                >
                                    <span className="flex items-center gap-3 text-[17px] leading-[1.2em]">
                                        Pro Plan <Image src="/pro-icon.svg" width={20} height={20} alt="" />
                                    </span>
                                </button>
                            </div>
                            <p className="text-[32px] md:text-[48px] text-[#8a8a91] text-center font-medium  leading-[1.2em] tracking-[-0.04em]">
                            Simple pricing, powerful <br className='hidden md:inline-block' /> features, no hidden fees
                        </p>
                        </div>
                        


                        <div className="flex flex-col items-center gap-[9px]">
                            <div className="flex  justify-center gap-3 ">
                                <span className="text-[40px] md:text-7xl font-semibold text-[#333336]  tracking-[-.04em] leading-[1.1em]">${price}</span>
                                <span className="text-[17px] text-[#333336]  tracking-[-.04em] font-medium">/month</span>
                            </div>
                            <p className="text-center">
                                <span className="text-[17px] text-[#ff4400]">*</span> <span className="text-[17px] text-[#8a8a91]">Minimal booking period — 2 months.</span>
                            </p>
                        </div>

                        

                        <p className=" md:text-[21px] text-[19px] text-[#8a8a91] text-center font-medium  leading-[1.3em] tracking-[-0.04em]">
                            Schedule a brief call if you need
                            <br />
                            further clarification.
                        </p>

                        {/* CTA Links */}
                        <div className="flex gap-6 items-center justify-center md:leading-[2.1em] leading-[1.8em]">

                            <motion.button
                                className="font-medium hover:text-[#ff4400] text-[24px] md:text-[28px] flex flex-col items-start cursor-none w-fit"
                                initial="initial"
                                whileHover="hover"
                            >
                                select plan
                                <svg
                                    width="100%"
                                    height="2"
                                    viewBox="0 0 120 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[#ff4400] w-full"
                                    preserveAspectRatio="none"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="1"
                                        x2="200"
                                        y2="1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        variants={{
                                            initial: { pathLength: 0.06 },
                                            hover: { pathLength: 1 },
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </svg>
                            </motion.button>
                            <motion.button
                                className="font-medium hover:text-[#ff4400]  text-[24px] md:text-[28px] flex flex-col items-start cursor-none w-fit"
                                initial="initial"
                                whileHover="hover"
                            >
                                quick call

                                <svg
                                    width="100%"
                                    height="2"
                                    viewBox="0 0 100 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[#ff4400] w-full"
                                    preserveAspectRatio="none"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="1"
                                        x2="200"
                                        y2="1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        variants={{
                                            initial: { pathLength: 0.06 },
                                            hover: { pathLength: 0.9 },
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>


                    {/* Right - Features List */}

                    <div
                        key={`features-${selectedPlan}`}

                        className="flex justify-center  pt-10 md:pt-0"
                    >
                        <div className=' flex flex-col justify-center w-[350px]'>
                            {features.map((feature, index) => (
                                <div
                                    key={index}

                                    className="py-4 px-2 border-b border-[#e6e6e6]/50 last:border-b-0 flex gap-4 items-start group"
                                >
                                    <div

                                        className="flex-shrink-0 mt-0.5"
                                    >
                                        <Image src="/check.svg" width={20} height={20} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-medium text-[#333336] text-[21px]  leading-[1.3em] tracking-[-.04em]">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[17px] text-[#929298] leading-[1.4em] tracking-[-.04em]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            </div>
        </div>
    );
}
