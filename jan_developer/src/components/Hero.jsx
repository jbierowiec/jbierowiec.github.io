import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button.jsx";
import { ArrowRight, Mail, Wrench } from "lucide-react";
import ThreeScene from "./ThreeScene.jsx";

const goTo = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Hero() {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2 pt-28 bg-white dark:bg-[#0b1120] transition-colors duration-500">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl"
        >
          Functional{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Engineer</span>{" "}
          & Builder
        </motion.h1>
        <p className="mb-6 max-w-xl text-slate-700 md:text-lg dark:text-white/70">
          I design and ship working software—websites, apps, and robotics
          systems—prioritizing reliability and real-world utility. Explore live
          demos, code, and manufacturing-ready builds.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => goTo("projects")}>
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#skills" variant="secondary">
            <Wrench className="h-4 w-4" /> Skills
          </Button>
          <Button href="#contact" variant="ghost">
            <Mail className="h-4 w-4" /> Contact
          </Button>
        </div>
      </div>

      <ThreeScene />
    </div>
  );
}
