import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  { y: "Aug 2025 – Nov 2025", t: "Fortinet Security Training", d: "NTI (Remotely). FortiGate firewall, VPNs, IPS, web filtering, antivirus, and application control." },
  { y: "Self-paced, 2025", t: "IBM SkillsBuild Cybersecurity", d: "60-hour intensive training covering Risk & compliance, Vulnerabilities, Network & cloud security, Security ops, and Incident response." },
  { y: "Jul 2024 – Oct 2024", t: "Network Administration — DEPI", d: "Cisco devices, Fortinet appliances, VLANs, NAT, DHCP, OSPF, EIGRP, ACLs, VPNs." },
  { y: "Sep 2022 – Jul 2026", t: "B.Sc. Computer Science", d: "Menoufia University — IT Department. Grade: 3.3 GPA." },
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading tag="resume.snapshot" title="Resume" description="Quick snapshot — full PDF available below." icon={<FileText className="h-3.5 w-3.5" />} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="panel p-5"
              >
                <div className="font-mono text-[11px] text-primary">{it.y}</div>
                <h3 className="font-semibold mt-1">{it.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="panel p-6 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-24 rounded border border-primary/40 bg-background/60 mb-4 flex flex-col items-center justify-center font-mono text-[10px] text-primary">
              <div className="w-12 h-1 bg-primary/40 mb-1 rounded" />
              <div className="w-10 h-1 bg-muted-foreground/30 mb-1 rounded" />
              <div className="w-12 h-1 bg-muted-foreground/30 mb-1 rounded" />
              <div className="w-8 h-1 bg-muted-foreground/30 rounded" />
              <span className="mt-2">CV.pdf</span>
            </div>
            <h3 className="font-semibold">Full CV</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-4">PDF · 2 page · ATS-friendly</p>
            <a
              href="/cv.pdf"
              download="Marwan_Saad_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-md font-medium text-sm text-primary-foreground hover:opacity-90 transition w-full inline-flex items-center justify-center gap-2 glow-cyber"
              style={{ background: "var(--gradient-cyber)" }}
            >
              <FileText className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
