import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Network, ShieldCheck, GitBranch, ChevronRight, Server } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Line } from "@/components/Terminal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hotel Network Capstone | Marwan Saad" },
      { name: "description", content: "Engineering case studies — hotel network with VLANs, OSPF/EIGRP redistribution, IPsec VPN, HSRP and port channels." },
    ],
  }),
  component: ProjectsPage,
});

const features = [
  { icon: Network, title: "VLAN Segmentation", desc: "Guest, staff, IoT, mgmt — fully isolated broadcast domains" },
  { icon: GitBranch, title: "OSPF + EIGRP", desc: "Multi-protocol design with mutual redistribution & filtering" },
  { icon: ShieldCheck, title: "Site-to-Site IPsec VPN", desc: "Encrypted tunnel between HQ and remote branch" },
  { icon: Server, title: "HSRP Redundancy", desc: "Active/standby gateway for zero-downtime failover" },
  { icon: Network, title: "Port Channels", desc: "LACP aggregation across distribution & access layer" },
  { icon: ShieldCheck, title: "SSH + ACL Hardening", desc: "Strict mgmt plane, role-based ACLs on every edge" },
];

const phases = [
  { tag: "PROBLEM", title: "Mixed-traffic hotel network needed segmentation, redundancy, and secure remote ops." },
  { tag: "DESIGN", title: "Three-tier topology with VLAN-per-purpose, dual-protocol core, and HSRP-protected gateways." },
  { tag: "IMPLEMENTATION", title: "Configured Cisco IOS devices end-to-end: trunks, routing, redistribution, IPsec, ACLs, SSH, port channels." },
  { tag: "RESULT", title: "99.9% uptime in lab, sub-second failover, encrypted branch link, hardened management plane." },
];

function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeading
        tag="projects.case_study"
        title="Engineering Case Studies"
        description="Real lab builds documented like production engagements."
        icon={<Building2 className="h-3.5 w-3.5" />}
      />

      {/* Capstone */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="panel-glow p-6 sm:p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(700px circle at 100% 0%, oklch(0.85 0.20 145 / 0.18), transparent 60%)" }} />

        <div className="relative">
          <div className="flex items-center gap-2 chip mb-4">
            <Building2 className="h-3 w-3" /> CAPSTONE · ENTERPRISE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Hotel Network Infrastructure</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            End-to-end design of a multi-VLAN, multi-protocol hotel network with
            redundant gateways, encrypted branch connectivity, and a hardened
            management plane.
          </p>

          {/* Topology placeholder */}
          <div className="mt-6 grid lg:grid-cols-5 gap-5">
            <div className="lg:col-span-3 panel p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-[11px] text-primary">[topology.diagram]</div>
                <div className="font-mono text-[10px] text-muted-foreground">layer-3 view</div>
              </div>
              <Topology />
            </div>

            <div className="lg:col-span-2 space-y-2">
              {phases.map((p, i) => (
                <motion.div
                  key={p.tag}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="panel p-4"
                >
                  <div className="font-mono text-[10px] tracking-widest text-primary">[{p.tag}]</div>
                  <div className="text-sm mt-1">{p.title}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f.title} className="panel p-4 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{f.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sample config */}
          <div className="mt-6">
            <Terminal title="HQ-Core# show running-config | section ospf">
              <Line user="HQ-Core#">router ospf 10</Line>
              <Line user=" "> router-id 1.1.1.1</Line>
              <Line user=" "> network 10.10.0.0 0.0.255.255 area 0</Line>
              <Line user=" "> redistribute eigrp 100 subnets metric-type 1</Line>
              <Line user="HQ-Core#">router eigrp 100</Line>
              <Line user=" "> network 192.168.0.0 0.0.255.255</Line>
              <Line user=" "> redistribute ospf 10 metric 10000 100 255 1 1500</Line>
              <Line user="HQ-Core#">crypto isakmp policy 10</Line>
              <Line user=" "> encr aes 256</Line>
              <Line user=" "> hash sha256</Line>
              <Line user=" "> authentication pre-share</Line>
              <Line user=" "> group 14</Line>
              <Line user="HQ-Core#"><span className="blink">▌</span></Line>
            </Terminal>
          </div>
        </div>
      </motion.article>
    </PageShell>
  );
}

function Node({ label, sub, x, y, accent = false }: { label: string; sub?: string; x: string; y: string; accent?: boolean }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 text-center" style={{ left: x, top: y }}>
      <div className={`mx-auto h-10 w-10 rounded-md flex items-center justify-center border ${
        accent ? "border-accent/60 bg-accent/10 text-accent glow-matrix" : "border-primary/50 bg-primary/10 text-primary"
      }`}>
        <Server className="h-5 w-5" />
      </div>
      <div className="font-mono text-[10px] mt-1 text-foreground/90">{label}</div>
      {sub && <div className="font-mono text-[9px] text-muted-foreground">{sub}</div>}
    </div>
  );
}

function Topology() {
  return (
    <div className="relative h-72 w-full rounded-md border border-border/60 bg-background/40 overflow-hidden">
      {/* grid bg */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          ["50,15", "25,45"], ["50,15", "75,45"],
          ["25,45", "15,80"], ["25,45", "40,80"],
          ["75,45", "60,80"], ["75,45", "85,80"],
          ["25,45", "75,45"],
        ].map(([a, b], i) => {
          const [x1, y1] = a.split(",").map(Number);
          const [x2, y2] = b.split(",").map(Number);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="oklch(0.82 0.17 195 / 0.5)" strokeWidth="0.3" strokeDasharray="0.8 0.6" />
          );
        })}
      </svg>

      <Node label="ISP / VPN" sub="edge" x="50%" y="15%" accent />
      <Node label="DIST-A" sub="HSRP" x="25%" y="45%" />
      <Node label="DIST-B" sub="HSRP" x="75%" y="45%" />
      <Node label="VLAN10" sub="Guest" x="15%" y="80%" />
      <Node label="VLAN20" sub="Staff" x="40%" y="80%" />
      <Node label="VLAN30" sub="IoT" x="60%" y="80%" />
      <Node label="VLAN99" sub="MGMT" x="85%" y="80%" />

      <div className="absolute bottom-2 right-2 font-mono text-[10px] text-primary inline-flex items-center gap-1">
        <ChevronRight className="h-3 w-3" /> live-topology
      </div>
    </div>
  );
}
