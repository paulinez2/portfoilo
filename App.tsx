import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { CaseStudy } from './components/CaseStudy';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen dark">
      {/* Black gradient background that fades as you scroll */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black/95 to-background pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <CaseStudy />
          <Resume />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>&copy; 2025 Pauline Zhu. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}