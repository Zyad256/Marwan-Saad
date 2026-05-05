import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Activity, Lock, Network, Terminal as TerminalIcon, ChevronRight,
  Cpu, Radar, MapPin, Mail, Linkedin, Github, ArrowRight, CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Terminal, Line } from "@/components/Terminal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { label: "FORTIGATE", value: "7.4", sub: "FortiOS", icon: Shield },
  { label: "PROTOCOLS", value: "12+", sub: "OSPF·EIGRP·BGP", icon: Network },
  { label: "LABS", value: "20+", sub: "SOC scenarios", icon: Radar },
  { label: "UPTIME", value: "99.9%", sub: "lab fabric", icon: Activity },
];

const quickSkills = [
  { icon: Shield, title: "Network Security", desc: "FortiGate, IPS, VPN, threat prevention" },
  { icon: Network, title: "Routing & Switching", desc: "OSPF, EIGRP, VLAN, HSRP, ACL" },
  { icon: TerminalIcon, title: "SOC Tooling", desc: "Wireshark, Nmap, Burp, Kali, GNS3" },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="grid lg:grid-cols-5 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 panel-glow p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(600px circle at 0% 0%, oklch(0.82 0.17 195 / 0.18), transparent 60%)" }} />

          <div className="relative">
            <div className="flex items-center gap-2 chip mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
              AVAILABLE FOR SOC / NETWORK SECURITY ROLES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Marwan Saad
              <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-cyber)" }}>
                Network Security Engineer
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Designing, securing, and optimizing enterprise networks using
              <span className="text-primary"> Fortinet</span>,
              <span className="text-primary"> Cisco</span>, and advanced routing/security technologies.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> Giza, Egypt</span>
              <span className="opacity-40">|</span>
              <span>CS Student · Networking & Security</span>
              <span className="opacity-40">|</span>
              <span className="text-accent">CCNP Security · in_progress</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm text-primary-foreground glow-cyber transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--gradient-cyber)" }}
              >
                <TerminalIcon className="h-4 w-4" />
                ./view_projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/5 px-5 py-2.5 font-mono text-sm text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="h-4 w-4" /> contact.sh
              </Link>
              <a
                href="https://www.linkedin.com/in/marwan-saad-8.../"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Status panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 panel p-5 flex flex-col min-w-0"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Activity className="h-4 w-4 text-accent" />
              SECURITY · STATUS
            </div>
            <span className="font-mono text-[10px] text-accent">● LIVE</span>
          </div>

          <Terminal title="soc-monitor — fortigate-01">
            <Line user="$" comment="initialize">whoami</Line>
            <Line user=">"><span className="text-primary">marwan_saad</span> · netsec_engineer</Line>
            <Line user="$" comment="health">show system status</Line>
            <Line user=">">FortiOS <span className="text-primary">v7.4.3</span> | uptime <span className="text-primary">142d</span></Line>
            <Line user="$">show ipsec tunnel</Line>
            <Line user=">">tunnel-HQ-DC <span className="text-accent">UP</span> · phase2 <span className="text-accent">OK</span></Line>
            <Line user="$">tail -f ips.log</Line>
            <Line user="!"><span className="text-warn">ALERT</span> sig=8472 blocked · src=10.0.4.21</Line>
            <Line user="$"><span className="blink">▌</span></Line>
          </Terminal>

          <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
            {[
              ["Firewall", "active"],
              ["VPN", "encrypted"],
              ["IPS", "monitoring"],
              ["Logs", "streaming"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between rounded border border-border/60 bg-background/40 px-3 py-2">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-accent inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> {v}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="panel p-4 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{s.label}</span>
              <s.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 text-2xl font-bold text-glow-cyber text-primary">{s.value}</div>
            <div className="font-mono text-[11px] text-muted-foreground">{s.sub}</div>
          </motion.div>
        ))}
      </section>

      {/* QUICK SKILLS */}
      <section className="mt-20">
        <SectionHeading
          tag="modules.core"
          title="Security Modules"
          description="Three pillars driving every engagement — defense, routing, and tooling."
          icon={<Cpu className="h-3.5 w-3.5" />}
        />
        <div className="grid md:grid-cols-3 gap-4">
          {quickSkills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="panel p-6 group hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:glow-cyber transition-shadow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/skills" className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary hover:gap-2 transition-all">
                view module <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 panel-glow p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(800px circle at 50% 0%, oklch(0.85 0.20 145 / 0.15), transparent 60%)" }} />
        <div className="relative">
          <div className="chip mx-auto mb-4"><Lock className="h-3 w-3" /> RECRUITERS · SECURE CHANNEL OPEN</div>
          <h2 className="text-3xl sm:text-4xl font-bold">Need a network security engineer?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Let's design the secure infrastructure your team deserves. Reach out for SOC, NetSec, or CCNP Security roles.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/in/marwan-saad-8.../" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm text-primary-foreground glow-cyber"
              style={{ background: "var(--gradient-cyber)" }}>
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <a href="mailto:marwansaad12@gmail.com" className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-colors">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm hover:border-primary/40 hover:text-primary transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
