import { motion } from "framer-motion";
import { FlaskConical, ShieldAlert, Lock, Activity, Bug, Wrench, Radar } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Line } from "@/components/Terminal";

const labs = [
  { icon: Lock, name: "IPsec VPN Lab", env: "Cisco ↔ FortiGate", status: "stable", desc: "Phase 1/2 negotiation, NAT-T, dead peer detection, dual-stack policy.", tags: ["IKEv2", "AES-256", "SHA-256"] },
  { icon: Lock, name: "SSL VPN Remote Access", env: "FortiGate", status: "stable", desc: "Portal + tunnel mode, MFA, split tunneling, granular auth groups.", tags: ["SSL", "MFA", "RBAC"] },
  { icon: ShieldAlert, name: "Firewall Rule Design & Testing", env: "FortiGate 7.4", status: "stable", desc: "Zero-trust policy stack, app-control, web filter profile chaining.", tags: ["DLP", "AppCtrl", "WebFilter"] },
  { icon: Activity, name: "Traffic Analysis", env: "Wireshark", status: "monitoring", desc: "Capture + decode TLS, ARP spoofing detection, throughput baselines.", tags: ["pcap", "TLS", "ARP"] },
  { icon: Bug, name: "IPS / Attack Simulation", env: "Kali → FortiGate", status: "armed", desc: "Nmap scans, exploit attempts blocked + signature tuning workflow.", tags: ["Nmap", "IPS", "SigTune"] },
  { icon: Wrench, name: "Troubleshooting Lab", env: "GNS3 / EVE-NG", status: "stable", desc: "Layered fault isolation across L1–L4, routing convergence drills.", tags: ["OSPF", "BGP", "ACL"] },
];

const statusColor: Record<string, string> = {
  stable: "border-accent/40 bg-accent/10 text-accent",
  monitoring: "border-primary/40 bg-primary/10 text-primary",
  armed: "border-warn/40 bg-warn/10 text-warn",
};

export function LabsSection() {
  return (
    <section id="labs" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading tag="labs.environment" title="Security Operations Lab Environment" description="Continuously running scenarios that mirror production SOC workflows." icon={<FlaskConical className="h-3.5 w-3.5" />} />

        <div className="panel p-4 flex flex-wrap items-center gap-4 mb-8 font-mono text-xs">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent pulse-dot" /><span className="text-accent">LAB FABRIC ONLINE</span></div>
          <span className="opacity-40">|</span>
          <span className="text-muted-foreground">nodes: <span className="text-primary">14</span></span>
          <span className="opacity-40">|</span>
          <span className="text-muted-foreground">tunnels: <span className="text-primary">3 active</span></span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labs.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="panel p-5 hover:border-primary/50 hover:-translate-y-1 transition-all group">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary group-hover:glow-cyber transition-shadow"><l.icon className="h-5 w-5" /></div>
                <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase rounded-full px-2 py-0.5 border ${statusColor[l.status]}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${l.status === "stable" ? "bg-accent" : l.status === "monitoring" ? "bg-primary" : "bg-warn pulse-dot"}`} />
                  {l.status}
                </span>
              </div>
              <h3 className="mt-4 font-semibold">{l.name}</h3>
              <div className="font-mono text-[11px] text-muted-foreground">{l.env}</div>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {l.tags.map((t) => (<span key={t} className="chip !text-[10px] !py-0.5">{t}</span>))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How I Work */}
        <div className="mt-20">
          <SectionHeading tag="workflow.process" title="How I Work" description="Repeatable, layer-aware methodology applied to every incident or design problem." icon={<Radar className="h-3.5 w-3.5" />} />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {["Identify OSI layer issue", "Capture traffic (Wireshark)", "Validate routing & connectivity", "Check firewall rules", "Analyze logs & security policies", "Apply fix & verify security posture"].map((step, i) => (
                <motion.div key={step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="panel p-4">
                  <div className="font-mono text-[10px] text-primary tracking-widest">STEP_{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 font-medium">{step}</div>
                </motion.div>
              ))}
            </div>
            <Terminal title="incident-response.sh">
              <Line user="$">./triage --incident=NET-2031</Line>
              <Line user=">"><span className="text-primary">[L1-L2]</span> link state ............ ok</Line>
              <Line user=">"><span className="text-primary">[L3]</span>   ospf neighbors ......... full</Line>
              <Line user=">"><span className="text-primary">[L4]</span>   tcp handshake .......... rst</Line>
              <Line user=">"><span className="text-warn">[FW]</span>    deny rule matched id=42</Line>
              <Line user="$">./remediate --policy=42 --action=allow_scoped</Line>
              <Line user=">"><span className="text-accent">[OK]</span> policy_42 updated · audit_log written</Line>
              <Line user=">"><span className="text-accent">[OK]</span> verify: 200 OK · latency 12ms</Line>
              <Line user="$"><span className="blink">▌</span></Line>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
}
