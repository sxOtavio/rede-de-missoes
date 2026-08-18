'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';

import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="flex flex-col  flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#F3F4F8]">
        <Header />
        <Hero />
        <MainContent />
        <Footer/>
      </main>
    </div>
  );
}
