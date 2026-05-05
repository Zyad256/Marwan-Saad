import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Network, Wrench, Cpu } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

const groups = [
  {
    icon: Shield,
    title: "Network Security",
    accent: "primary",
    skills: [
      { name: "FortiGate / FortiOS 7.4", level: 92 },
      { name: "Security Policies & NAT", level: 90 },
      { name: "VPN — IPsec & SSL VPN", level: 88 },
      { name: "IPS / Threat Prevention", level: 85 },
      { name: "Web Filtering & App Control", level: 82 },
      { name: "Log Analysis & Traffic Monitoring", level: 86 },
    ],
  },
  {
    icon: Network,
    title: "Networking",
    accent: "primary",
    skills: [
      { name: "VLANs & Inter-VLAN Routing", level: 92 },
      { name: "OSPF, EIGRP, Redistribution", level: 88 },
      { name: "ACLs, NAT, PAT", level: 90 },
      { name: "HSRP & Port Channels", level: 84 },
      { name: "DHCP & Routing Protocols", level: 88 },
    ],
  },
  {
    icon: Wrench,
    title: "Security Tools",
    accent: "matrix",
    skills: [
      { name: "Wireshark", level: 90 },
      { name: "Nmap", level: 86 },
      { name: "Burp Suite", level: 78 },
      { name: "Kali Linux", level: 82 },
      { name: "Cisco Packet Tracer", level: 92 },
      { name: "GNS3 / EVE-NG", level: 88 },
    ],
  },
];

function SkillsPage() {
  return (
    <PageShell>
      <SectionHeading
        tag="skills.matrix"
        title="Skill Matrix"
        description="Hands-on competencies validated through labs, training, and capstone projects."
        icon={<Cpu className="h-3.5 w-3.5" />}
      />

      <div className="grid lg:grid-cols-3 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
            className="panel p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest">MODULE_{gi + 1}</div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
            </div>

            <div className="space-y-3.5">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="text-primary">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-background/60 border border-border/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: g.accent === "matrix" ? "linear-gradient(90deg, var(--matrix), var(--cyber))" : "var(--gradient-cyber)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <SectionHeading
        tag="certifications"
        title="Certifications & Credentials"
        description="Official verifications of my technical capabilities."
        icon={<Shield className="h-3.5 w-3.5" />}
      />
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="panel p-6 flex flex-col items-center text-center justify-center border-primary/20 hover:border-primary/50 transition-colors"
        >
          <div className="h-16 w-16 mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary glow-cyber">
            <Shield className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Fortinet Certified</h3>
          <p className="text-muted-foreground mt-2 mb-6">Fortinet Score Report Validated</p>
          <a
            href="/Certificates/scorereportFortinet.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-2.5 font-mono text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-cyber)" }}
          >
            View Certificate
          </a>
        </motion.div>
      </div>
    </PageShell>
  );
}
