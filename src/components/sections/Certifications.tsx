import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const certs = [
  { name: "Fortinet Cybersecurity — NTI", status: "issued", image: "/Certificates/Fortinet Cybersecurity NTI.png" },
  { name: "Infrastructure & Security — Cisco DEPI", status: "issued", image: "/Certificates/Infrastructure & Security – Cisco Network Administrator DEPI.png" },
  { name: "IBM SkillsBuild Cybersecurity", status: "issued", image: "/Certificates/ibm skillsbuild cybersecurity.png" },
  { name: "Fortinet Score Report", status: "issued", image: "/Certificates/scorereportFortinet.png" },
  { name: "Machine Learning — Coursera", status: "issued", image: "/Certificates/machine learning coursera.jpeg" },
  { name: "CCNP Security", status: "in_progress", image: null as string | null },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading tag="certifications.badges" title="Certifications & Credentials" description="Verified credentials and an actively pursued advanced track." icon={<Award className="h-3.5 w-3.5" />} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="panel overflow-hidden hover:border-primary/50 transition-colors group">
              {c.image ? (
                <div className="relative aspect-[4/3] bg-background/40 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-background/40 flex items-center justify-center">
                  <div className="text-center">
                    <ShieldCheck className="h-12 w-12 text-warn/60 mx-auto mb-2" />
                    <span className="font-mono text-xs text-warn">In Progress</span>
                  </div>
                </div>
              )}
              <div className="p-4">
                <div className="font-semibold leading-snug text-sm">{c.name}</div>
                <div className={`mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase rounded-full px-2 py-0.5 border ${c.status === "issued" ? "border-accent/40 bg-accent/10 text-accent" : "border-warn/40 bg-warn/10 text-warn"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${c.status === "issued" ? "bg-accent" : "bg-warn pulse-dot"}`} />
                  {c.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
