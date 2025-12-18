'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User } from 'lucide-react'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-white overflow-hidden font-sans">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-midnight/80 border-b border-white/5">
        <div className="relative w-32 h-10">
          <Image src="/logo-blue.png" alt="New Vision Logo" fill style={{objectFit: 'contain'}} />
        </div>
        <a href="#contact" className="hidden md:block px-6 py-2 border border-teal-400 text-teal-400 rounded-full text-xs tracking-widest hover:bg-teal-400 hover:text-midnight transition-all font-bold">
          CONTACT
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="text-teal-400 text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
            New Vision Advisory
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            L'Intelligence n'est rien <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
              sans la Direction.
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed mb-10">
            Nous fusionnons l'excellence du conseil stratégique avec la puissance de l'IA pour les leaders africains.
          </p>
          <a href="#audit" className="inline-block px-8 py-4 bg-teal-400 text-midnight font-bold rounded-full hover:scale-105 transition-transform">
            Lancer l'Audit IA Gratuit
          </a>
        </motion.div>
      </section>

      {/* 3. AUDIT SECTION (FORM) */}
      <section id="audit" className="py-24 bg-midnight relative border-t border-white/5">
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
          <h3 className="text-2xl font-serif text-center mb-2">Test de Maturité IA</h3>
          <p className="text-center text-white/50 text-xs mb-8">Évaluez votre potentiel en 30 secondes</p>
          
          <form name="ai-audit" method="POST" data-netlify="true" className="flex flex-col gap-5">
            {/* THIS HIDDEN INPUT IS CRITICAL FOR NETLIFY */}
            <input type="hidden" name="form-name" value="ai-audit" />
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-teal-400">Stratégie de Données</label>
              <select name="q1" className="bg-black/40 border border-white/10 p-3 rounded text-sm text-white focus:border-teal-400 outline-none appearance-none">
                <option>Données centralisées (Cloud/ERP)</option>
                <option>Données dispersées (Excel/Papier)</option>
                <option>Aucune stratégie définie</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-teal-400">Email Professionnel</label>
              <input type="email" name="email" placeholder="nom@entreprise.com" required className="bg-black/40 border border-white/10 p-3 rounded text-sm text-white focus:border-teal-400 outline-none" />
            </div>

            <button type="submit" className="mt-2 w-full py-4 bg-teal-400 text-midnight font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">
              Obtenir mon Score
            </button>
          </form>
        </div>
      </section>

      {/* 4. FOOTER & GENERAL MANAGER DETAILS */}
      <footer id="contact" className="bg-[#01040f] border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          
          {/* Left Column: Brand */}
          <div className="flex flex-col items-start">
            <div className="relative w-40 h-12 mb-6">
              <Image src="/logo-blue.png" alt="New Vision Logo" fill style={{objectFit: 'contain', objectPosition: 'left'}} />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Votre partenaire en transformation digitale et stratégie financière au Maroc et en Afrique.
            </p>
          </div>

          {/* Right Column: The General Manager */}
          <div className="flex flex-col gap-6">
            <h4 className="text-teal-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">Direction Générale</h4>
            
            <div className="flex items-start gap-4">
              <User className="w-5 h-5 text-gold mt-1" />
              <div>
                <p className="text-lg font-serif text-white">M. Ahmad DAHBANI</p>
                <p className="text-white/50 text-sm">General Manager</p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 my-2" />

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  Résidence le préféré 2, <br/>
                  Avenue Abdellatif Benkadour, <br/>
                  20250, Casablanca, Maroc
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                <a href="tel:+212661140450" className="text-white/70 text-sm hover:text-white transition-colors">
                  +212 661 140 450
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                <a href="mailto:a.dahbani@nvamorocco.com" className="text-white/70 text-sm hover:text-white transition-colors">
                  a.dahbani@nvamorocco.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-white/20 text-xs">
          <p>© 2025 New Vision Advisory SARL. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Casablanca • Afrique</p>
        </div>
      </footer>

    </main>
  );
}