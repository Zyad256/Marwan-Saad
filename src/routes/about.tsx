import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Network, Terminal as TerminalIcon, Award, Briefcase } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Line } from "@/components/Terminal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const timeline = [
  {
    org: "NTI (Remotely)",
    title: "Fortinet Security Training",
    date: "Aug 2025 – Nov 2025",
    icon: ShieldCheck,
    points: [
      "FortiGate firewall basics, Policy configuration, VPNs",
      "Threat management, Intrusion prevention systems (IPS)",
      "Web filtering, antivirus, and application control",
    ],
    tag: "FORTINET",
  },
  {
    org: "DEPI (Cairo)",
    title: "Network Administration",
    date: "Jul 2024 – Oct 2024",
    icon: Network,
    points: [
      "Intensive training in network infrastructure, routing & switching, firewall configuration, and cybersecurity fundamentals.",
      "Hands-on experience with Cisco devices, Fortinet security appliances, and real-world network topologies.",
      "Practical experience in VLANs, NAT, DHCP, OSPF, EIGRP, ACLs, VPNs, and network troubleshooting.",
    ],
    tag: "CISCO",
  },
  {
    org: "Menoufia University",
    title: "B.Sc. Computer Science",
    date: "Sep 2022 – Jul 2026",
    icon: GraduationCap,
    points: [
      "Student of Computer Science IT department",
      "Grade: 3.3 GPA",
    ],
    tag: "ACADEMIC",
  },
];

const certs = [
  { name: "Fortinet FCP — FortiGate 7.4 Administrator", status: "issued", icon: ShieldCheck },
  { name: "IBM SkillsBuild Cybersecurity Certificate", status: "issued", icon: Award },
  { name: "CCNP Security", status: "in_progress", icon: ShieldCheck },
];

function AboutPage() {
  return (
    <PageShell>
      <SectionHeading
        tag="about.profile"
        title="Profile"
        description="A quick whoami before we dive into the technical work."
        icon={<TerminalIcon className="h-3.5 w-3.5" />}
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="panel p-6">
          <h3 className="text-xl font-semibold">Marwan Saad Abd Elsbour</h3>
          <p className="mt-3 text-muted-foreground">
            A passionate Computer Science student with hands-on experience in networking and cybersecurity. 
            Have improved practical skills through real-world college projects, DEPI internal scholarship training, and online certifications.
          </p>
          <p className="mt-3 text-muted-foreground">
            Motivated about network management, secure systems design, and mobile/web application development using modern technologies.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["FortiGate 7.4", "Cisco IOS", "OSPF", "EIGRP", "IPsec", "SSL VPN", "IPS", "Wireshark", "GNS3", "Kali"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <Terminal title="cat ~/about.md">
          <Line user="$">cat profile.yaml</Line>
          <Line user=">">name: <span className="text-primary">Marwan Saad Abd Elsbour</span></Line>
          <Line user=">">role: <span className="text-primary">Network Security Engineer</span></Line>
          <Line user=">">location: Giza, EG</Line>
          <Line user=">">focus: [SOC, NetSec, FortiGate, Cisco]</Line>
          <Line user=">">training: [DEPI, NTI]</Line>
          <Line user=">">cert_in_progress: CCNP_Security</Line>
          <Line user="$">echo $MISSION</Line>
          <Line user=">"><span className="text-accent">"design, secure, and optimize"</span></Line>
          <Line user="$"><span className="blink">▌</span></Line>
        </Terminal>
      </div>

      {/* Experience timeline */}
      <div className="mt-20">
        <SectionHeading
          tag="experience.timeline"
          title="Experience & Training"
          description="Structured training and hands-on lab time across security and networking domains."
          icon={<Briefcase className="h-3.5 w-3.5" />}
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                <div className="absolute left-0 sm:left-2 top-2 h-8 w-8 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary glow-cyber">
                  <t.icon className="h-4 w-4" />
                </div>
                <div className="panel p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <div className="font-mono text-[11px] text-primary">[{t.tag}]</div>
                      <h4 className="text-lg font-semibold">{t.title}</h4>
                      <div className="text-sm text-muted-foreground">
                        {t.org} {t.date && <span className="opacity-60">• {t.date}</span>}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary font-mono">▸</span>
                        <span className="text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <SectionHeading
          tag="certifications.badges"
          title="Certifications"
          description="Verified credentials and an actively pursued advanced track."
          icon={<Award className="h-3.5 w-3.5" />}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="panel p-5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold leading-snug">{c.name}</div>
                  <div className={`mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase rounded-full px-2 py-0.5 border ${
                    c.status === "issued"
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-warn/40 bg-warn/10 text-warn"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${c.status === "issued" ? "bg-accent" : "bg-warn pulse-dot"}`} />
                    {c.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
