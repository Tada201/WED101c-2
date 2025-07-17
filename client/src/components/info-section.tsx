import { motion } from 'framer-motion';
import { Database, Terminal, Circle, Lightbulb, Cpu, Shield, Zap } from "lucide-react";

export function InfoSection() {
  const infoContent = {
    title: "Technical Information",
    intro: "Welcome to the information hub of Aperture Science. Here you can find details about our ongoing research, safety protocols, and career opportunities.",
    sections: [
      {
        heading: "Research & Development",
        content: "Our R&D department is constantly pushing the boundaries of science. Current projects include advanced AI ethics, interdimensional travel, and the development of new, more efficient testing apparatuses."
      },
      {
        heading: "Safety Protocols",
        content: "At Aperture Science, safety is our number one priority. All personnel are required to adhere to strict safety guidelines, including proper handling of hazardous materials, mandatory emergency drills, and regular psychological evaluations. Please report any anomalies immediately."
      },
      {
        heading: "Career Opportunities",
        content: "Are you a highly motivated individual with a passion for science and a disregard for personal safety? Aperture Science is always looking for talented scientists, engineers, and test subjects. Visit our contact page to inquire about openings."
      }
    ]
  };

  return (
    <section id="info" className="p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-portal font-bold text-[hsl(195,100%,46%)] mb-12 flex items-center justify-center"
        >
          <Database className="mr-4" size={36} />
          {infoContent.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[hsl(0,0%,88%)] mb-12 text-center max-w-4xl mx-auto"
        >
          {infoContent.intro}
        </motion.p>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="test-chamber-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-[hsl(39,100%,50%)] mb-6 flex items-center">
              <Lightbulb className="mr-3" size={24} />
              Portal Technology
            </h3>
            <ul className="space-y-4 text-[hsl(0,0%,88%)]">
              <li className="flex items-center">
                <Circle className="text-[hsl(195,100%,46%)] mr-3" size={8} />
                <span>Quantum tunneling mechanics</span>
              </li>
              <li className="flex items-center">
                <Circle className="text-[hsl(195,100%,46%)] mr-3" size={8} />
                <span>Conservation of momentum</span>
              </li>
              <li className="flex items-center">
                <Circle className="text-[hsl(195,100%,46%)] mr-3" size={8} />
                <span>Spatial displacement theory</span>
              </li>
              <li className="flex items-center">
                <Circle className="text-[hsl(195,100%,46%)] mr-3" size={8} />
                <span>Handheld portal device</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="test-chamber-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-[hsl(39,100%,50%)] mb-6 flex items-center">
              <Cpu className="mr-3" size={24} />
              GLaDOS Specifications
            </h3>
            <ul className="space-y-4 text-[hsl(0,0%,88%)]">
              <li className="flex items-center">
                <Circle className="text-[hsl(39,100%,50%)] mr-3" size={8} />
                <span>Advanced AI consciousness</span>
              </li>
              <li className="flex items-center">
                <Circle className="text-[hsl(39,100%,50%)] mr-3" size={8} />
                <span>Facility-wide monitoring</span>
              </li>
              <li className="flex items-center">
                <Circle className="text-[hsl(39,100%,50%)] mr-3" size={8} />
                <span>Personality cores integration</span>
              </li>
              <li className="flex items-center">
                <Circle className="text-[hsl(39,100%,50%)] mr-3" size={8} />
                <span>Cake dispensing protocols</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Information Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {infoContent.sections.map((section, index) => {
            const icons = [Shield, Zap, Database];
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="test-chamber-card p-8 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-[hsl(195,100%,46%)] mb-4 flex items-center">
                  <Icon className="mr-3" size={20} />
                  {section.heading}
                </h3>
                <p className="text-[hsl(0,0%,88%)] leading-relaxed text-sm">
                  {section.content}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="test-chamber-card p-8 rounded-lg"
        >
          <div className="flex items-center mb-6">
            <Terminal className="text-[hsl(195,100%,46%)] mr-3" size={24} />
            <h3 className="text-2xl font-semibold text-[hsl(195,100%,46%)]">System Terminal</h3>
          </div>
          <div className="bg-black p-6 rounded font-mono text-sm">
            <div className="text-[hsl(195,100%,46%)]">aperture@glados:~$ system_status</div>
            <div className="text-green-400">GLaDOS Status: ONLINE</div>
            <div className="text-green-400">Portal Gun: READY</div>
            <div className="text-green-400">Test Chambers: 19/19 OPERATIONAL</div>
            <div className="text-[hsl(39,100%,50%)]">Cake Status: THE CAKE IS A LIE</div>
            <div className="text-white">Test Subject Status: ACTIVE</div>
            <div className="text-white">Neurotoxin Level: 0.00%</div>
            <div className="text-[hsl(195,100%,46%)]">aperture@glados:~$ <span className="animate-pulse">_</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
