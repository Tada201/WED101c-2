import { motion } from 'framer-motion';
import { Building, Target, Lightbulb, Calendar, Users, MapPin, Atom } from "lucide-react";

export function AboutSection() {
  const contentData = {
    title: "About Aperture Science",
    paragraphs: [
      "Founded by Cave Johnson, Aperture Science is a leading scientific research organization known for its groundbreaking, albeit often dangerous, experiments. Our mission is to push the boundaries of science, for the good of all mankind... and perhaps a few test subjects.",
      "From advanced portal technology to sentient AI, Aperture Science has been at the forefront of innovation since its inception in 1947. We believe in rigorous testing, even if it means a few explosions along the way.",
      "Our facilities, located deep within the Upper Michigan Peninsula, are equipped with state-of-the-art laboratories and an endless supply of enthusiasm. We are constantly seeking new challenges and new ways to expand the horizons of scientific understanding."
    ]
  };

  const companyStats = [
    { value: "1947", label: "Founded", icon: Calendar },
    { value: "327", label: "Employees", icon: Users },
    { value: "Michigan", label: "Location", icon: MapPin },
    { value: "Molybdenum", label: "Favorite Element", icon: Atom }
  ];

  return (
    <section id="about-section" className="p-8 bg-gradient-to-b from-transparent to-[hsl(0,0%,8%)]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-portal font-bold text-[hsl(195,100%,46%)] mb-12 flex items-center justify-center"
        >
          <Building className="mr-4" size={36} />
          {contentData.title}
        </motion.h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contentData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[hsl(0,0%,88%)] leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="test-chamber-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[hsl(39,100%,50%)] mb-4 flex items-center">
                <Target className="mr-3" size={24} />
                Our Mission
              </h3>
              <p className="text-[hsl(0,0%,88%)] leading-relaxed">
                Aperture Science is a multi-billion dollar research facility dedicated to the advancement of science through rigorous testing procedures. We specialize in portal technology, artificial intelligence, and cake-related experiments.
              </p>
            </div>

            <div className="test-chamber-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[hsl(39,100%,50%)] mb-4 flex items-center">
                <Lightbulb className="mr-3" size={24} />
                Innovation Hub
              </h3>
              <p className="text-[hsl(0,0%,88%)] leading-relaxed">
                Our state-of-the-art facility houses the most advanced testing chambers, powered by our proprietary GLaDOS system. Every test subject contributes to the advancement of human knowledge.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {companyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="test-chamber-card p-8 rounded-lg text-center portal-glow">
                <Icon className="text-[hsl(195,100%,46%)] mx-auto mb-4" size={32} />
                <div className="text-3xl font-bold text-[hsl(39,100%,50%)] mb-2">{stat.value}</div>
                <div className="text-sm text-[hsl(0,0%,88%)]">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
