import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import logoUrl from "@assets/overmind_logo_1772015753116.png";
import heroBg from "@/assets/images/hero-bg.png";
import maestroMockup from "@/assets/images/maestro-mockup.png";
import team1 from "@/assets/images/team_1.jpg";
import team2 from "@/assets/images/team_2.jpg";
import team3 from "@/assets/images/team_3.jpg";
import team4 from "@/assets/images/team_4.jpg";
import team5 from "@/assets/images/team_5.jpg";
import team6 from "@/assets/images/team_6.jpg";

const teamMembers = [
  { name: "Bello Quamdeen", title: "CEO", image: team1 },
  { name: "Ewuoso Emmanual", title: "CTO", image: team2 },
  { name: "Kushimo Mosopefoluwa", title: "Lead Designer", image: team3 },
  { name: "Kesena Ovesuor", title: "Senior Engineer", image: team4 },
  { name: "Adebawojo Mosopefoluwa", title: "Product Manager", image: team5 },
  { name: "Okpokpo Trust", title: "Marketing Lead", image: team6 },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Abstract background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blob bg-primary/20 w-[600px] h-[600px] -top-[200px] -left-[200px]"></div>
        <div className="blob bg-blue-500/20 w-[500px] h-[500px] top-[40%] -right-[150px] animation-delay-2000"></div>
        <div className="blob bg-purple-500/20 w-[800px] h-[800px] -bottom-[300px] left-[20%] animation-delay-4000"></div>
      </div>

      {/* 1. Global Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logoUrl} alt="Overmind Logo" className="h-8 w-8 object-contain invert" />
            <span className="text-xl font-bold tracking-tight text-white">Overmind</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Product</a>
            <a href="#team" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Team</a>
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all"
            data-testid="button-contact"
          >
            Contact Us
          </Button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* 2. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Abstract tech background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-white/80">Innovating the Future</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Tackling Real-World Problems <br className="hidden md:block" />
                <span className="text-gradient-primary">with Software.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                We are Overmind Technologies. Building the next generation of digital solutions to empower businesses and individuals globally.
              </motion.p>
              
              <motion.div variants={fadeIn} className="pt-8">
                <Button 
                  size="lg" 
                  className="bg-white text-background hover:bg-white/90 rounded-full px-8 h-14 text-base font-semibold group"
                  data-testid="button-explore"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-12 md:p-20 overflow-hidden relative"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light text-white/90 leading-tight">
                    Founded <br />
                    <span className="font-bold text-white">November 19, 2025.</span>
                  </h2>
                  <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
                </div>
                <div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    At Overmind, we believe that the most complex challenges require elegant, scalable solutions. Our mission is to engineer software that not only solves today's problems but anticipates tomorrow's needs, blending cutting-edge artificial intelligence with intuitive design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Product Spotlight (Maestro) */}
        <section id="product" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Product Spotlight</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Meet Maestro</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={maestroMockup} 
                    alt="Maestro AI Learning Platform" 
                    className="w-full h-auto rounded-xl object-cover relative z-10"
                  />
                  {/* Laptop base placeholder representation */}
                  <div className="h-4 bg-gray-800 rounded-b-xl border-t border-gray-700 relative z-10 w-[110%] -ml-[5%] shadow-xl">
                    <div className="w-1/4 h-1 bg-gray-600 mx-auto rounded-b-md"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 space-y-8"
              >
                <p className="text-2xl font-light text-white/90 leading-relaxed">
                  An AI-powered learning platform that generates <span className="font-semibold text-white">personalized lessons</span> based on your preferences and resources.
                </p>
                
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">✓</div>
                    <span>Adaptive curriculum that evolves with your progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">✓</div>
                    <span>Integrates seamlessly with your existing study materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">✓</div>
                    <span>Real-time feedback and intelligent assessments</span>
                  </li>
                </ul>

                <a 
                  href="https://www.maestrolearningplatform.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors group"
                  data-testid="link-maestro"
                >
                  <span className="border-b border-primary/50 group-hover:border-white pb-0.5 transition-colors">
                    www.maestrolearningplatform.com
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Team Grid Section */}
        <section id="team" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Minds Behind Overmind</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A collective of engineers, designers, and visionaries dedicated to pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                  data-testid={`card-team-${index}`}
                >
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:bg-primary/40 group-hover:blur-xl transition-all duration-500"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full relative z-10 border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium tracking-wide text-sm uppercase">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 6. Clean Footer */}
      <footer className="relative mt-20">
        {/* Subtle gradient divider line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
             <img src={logoUrl} alt="Overmind Logo" className="h-6 w-6 object-contain invert opacity-70" />
             <span className="text-muted-foreground font-medium">Overmind</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Overmind Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}