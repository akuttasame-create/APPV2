/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Activity, 
  MessageCircle, 
  Tv, 
  ChevronLeft, 
  ExternalLink,
  Film,
  Trophy,
  Baby,
  BookOpen,
  Newspaper,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "w-32 h-32" }: { className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    <div className="relative">
      {/* Recreating the stylized 'C' globe logo from the image */}
      <svg viewBox="0 0 100 100" className="w-full h-full animate-glow">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#9d50bb" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGrad)" strokeWidth="2" strokeDasharray="10 5" opacity="0.3" />
        <path 
          d="M50 10 A40 40 0 1 1 49.9 10" 
          fill="none" 
          stroke="url(#logoGrad)" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeDasharray="150 100"
        />
        <path 
          d="M50 25 A25 25 0 1 0 50.1 25" 
          fill="none" 
          stroke="url(#logoGrad)" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeDasharray="80 40"
          opacity="0.8"
        />
        <circle cx="50" cy="50" r="8" fill="url(#logoGrad)" />
      </svg>
    </div>
    <div className="mt-4 text-center">
      <h1 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-click-blue to-click-purple">
        CLICK
      </h1>
      <p className="text-sm tracking-[0.3em] text-click-blue/80 uppercase">telecom</p>
    </div>
  </div>
);

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Logo className="w-48 h-48" />
      </motion.div>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 text-lg font-light tracking-wide text-gray-400"
      >
        Conectando <span className="font-semibold text-white">você ao futuro</span>
      </motion.p>
    </motion.div>
  );
};

interface WebViewProps {
  url: string;
  title: string;
  onBack: () => void;
}

const WebViewScreen: React.FC<WebViewProps> = ({ url, title, onBack }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-40 flex flex-col bg-black"
    >
      <div className="flex items-center p-4 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <button onClick={onBack} className="p-2 mr-2 rounded-full hover:bg-white/10">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-medium truncate">{title}</h2>
      </div>
      <div className="relative flex-1">
        <iframe 
          src={url} 
          className="w-full h-full border-none"
          title={title}
          allow="geolocation; microphone; camera"
        />
      </div>
    </motion.div>
  );
};

interface TVScreenProps {
  onBack: () => void;
  onLearnMore: () => void;
}

const TVScreen: React.FC<TVScreenProps> = ({ onBack, onLearnMore }) => {
  const categories = [
    { name: 'Filmes', icon: Film, color: 'from-red-500 to-orange-500' },
    { name: 'Esportes', icon: Trophy, color: 'from-blue-500 to-cyan-500' },
    { name: 'Infantil', icon: Baby, color: 'from-yellow-400 to-orange-400' },
    { name: 'Documentários', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
    { name: 'Notícias', icon: Newspaper, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-click-gradient"
    >
      <div className="sticky top-0 z-10 flex items-center p-4 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <button onClick={onBack} className="p-2 mr-2 rounded-full hover:bg-white/10">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-medium">TV Click Telecom</h2>
      </div>

      <div className="p-6">
        <div className="p-8 mb-8 overflow-hidden rounded-3xl glass-card relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-click-purple/20 blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <Tv className="w-12 h-12 mb-4 text-click-purple" />
            <h3 className="mb-2 text-3xl font-bold">Experiência Completa</h3>
            <p className="text-gray-400">O melhor conteúdo para você e sua família, com qualidade digital impecável.</p>
            <div className="inline-block px-4 py-2 mt-6 font-bold rounded-full bg-gradient-to-r from-click-blue to-click-purple">
              Mais de 120 canais disponíveis
            </div>
          </div>
        </div>

        <h4 className="mb-4 text-xl font-semibold px-2">Categorias</h4>
        <div className="grid grid-cols-1 gap-4 mb-8">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center p-4 rounded-2xl glass-card group hover:bg-white/5 transition-colors">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} mr-4`}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-medium">{cat.name}</span>
              <ArrowRight className="ml-auto w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>

        <button 
          onClick={onLearnMore}
          className="w-full py-5 text-xl font-bold transition-all rounded-2xl bg-white text-black hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
        >
          Saiba mais
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

// --- Main App ---

type ScreenState = 'splash' | 'home' | 'central' | 'speedtest' | 'tv';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('splash');

  const handleWhatsApp = (customMessage?: string) => {
    const phone = "5584987237525";
    const defaultMsg = "Olá, sou cliente da Click Telecom e preciso de suporte.";
    const message = encodeURIComponent(customMessage || defaultMsg);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const navButtons = [
    { 
      id: 'central', 
      label: 'Central do Assinante', 
      icon: FileText, 
      color: 'from-blue-600/20 to-click-blue/20',
      iconColor: 'text-click-blue'
    },
    { 
      id: 'speedtest', 
      label: 'Teste de Velocidade', 
      icon: Activity, 
      color: 'from-purple-600/20 to-click-purple/20',
      iconColor: 'text-click-purple'
    },
    { 
      id: 'whatsapp', 
      label: 'Suporte WhatsApp', 
      icon: MessageCircle, 
      color: 'from-emerald-600/20 to-green-400/20',
      iconColor: 'text-emerald-400'
    },
    { 
      id: 'tv', 
      label: 'TV Click Telecom', 
      icon: Tv, 
      color: 'from-pink-600/20 to-click-purple/20',
      iconColor: 'text-pink-400'
    },
  ];

  return (
    <div className="min-h-screen bg-click-gradient text-white font-sans selection:bg-click-blue/30 overflow-x-hidden">
      <AnimatePresence>
        {screen === 'splash' && (
          <SplashScreen onFinish={() => setScreen('home')} />
        )}
      </AnimatePresence>

      <main className="max-w-md mx-auto p-6 flex flex-col min-h-screen justify-center">
        {/* Header */}
        <header className="flex flex-col items-center pt-4">
          <Logo className="w-32 h-32" />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
            className="text-center my-12"
          >
            <h2 className="text-2xl font-light text-gray-300">
              Bem-vindo à <span className="font-bold text-white">Click Telecom</span>
            </h2>
          </motion.div>
        </header>

        {/* Grid Buttons */}
        <div className="grid grid-cols-2 gap-4">
          {navButtons.map((btn, idx) => (
            <motion.button
              key={btn.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.3 + (idx * 0.1) }}
              onClick={() => {
                if (btn.id === 'whatsapp') handleWhatsApp();
                else if (btn.id === 'central') window.open('https://clicktelecom.c.sgp.net.br/accounts/central/login', '_blank');
                else if (btn.id === 'speedtest') window.open('https://play.google.com/store/apps/details?id=org.zwanoo.android.speedtest&hl=pt_BR', '_blank');
                else setScreen(btn.id as ScreenState);
              }}
              className={`relative flex flex-col items-center justify-center p-6 rounded-3xl glass-card overflow-hidden group transition-all hover:scale-105 active:scale-95`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${btn.color} opacity-50 group-hover:opacity-80 transition-opacity`}></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className={`p-4 mb-4 rounded-2xl bg-black/40 ${btn.iconColor}`}>
                  <btn.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-center leading-tight">{btn.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-gray-500">
          <p>© 2024 Click Telecom. Todos os direitos reservados.</p>
        </footer>
      </main>

      {/* Overlays */}
      <AnimatePresence>
        {screen === 'tv' && (
          <TVScreen 
            key="tv"
            onBack={() => setScreen('home')} 
            onLearnMore={() => handleWhatsApp("Olá, gostaria de saber mais sobre os planos de TV da Click Telecom.")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
