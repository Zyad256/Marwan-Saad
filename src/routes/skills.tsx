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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[
          { name: "Fortinet Cybersecurity — NTI", image: "/Certificates/Fortinet Cybersecurity NTI.png" },
          { name: "Infrastructure & Security — Cisco DEPI", image: "/Certificates/Infrastructure & Security – Cisco Network Administrator DEPI.png" },
          { name: "IBM SkillsBuild Cybersecurity", image: "/Certificates/ibm skillsbuild cybersecurity.png" },
          { name: "Fortinet Score Report", image: "/Certificates/scorereportFortinet.png" },
          { name: "Machine Learning — Coursera", image: "/Certificates/machine learning coursera.jpeg" },
        ].map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="panel overflow-hidden hover:border-primary/50 transition-colors group"
          >
            <div className="relative aspect-[4/3] bg-background/40 overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold leading-snug text-sm">{c.name}</div>
              <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase rounded-full px-2 py-0.5 border border-accent/40 bg-accent/10 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                issued
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
