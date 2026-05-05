import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Lock } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Line } from "@/components/Terminal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marwan Saad | Network Security Engineer" },
      { name: "description", content: "Get in touch with Marwan Saad — LinkedIn, email, GitHub. Open to SOC, NetSec, and CCNP Security roles." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <SectionHeading
        tag="contact.channel"
        title="Establish Secure Channel"
        description="Open to full-time, internships, and freelance engagements in Network Security and SOC."
        icon={<Send className="h-3.5 w-3.5" />}
      />

      <div className="grid lg:grid-cols-5 gap-6">
        {/* LinkedIn primary */}
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank" rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 panel-glow p-8 group hover:-translate-y-1 transition-transform relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(600px circle at 100% 100%, oklch(0.82 0.17 195 / 0.25), transparent 60%)" }} />
          <div className="relative">
            <div className="chip mb-4"><Lock className="h-3 w-3" /> RECRUITERS · PRIORITY CHANNEL</div>
            <div className="flex items-start gap-5">
              <div className="h-16 w-16 rounded-lg border border-primary/40 bg-primary/10 flex items-center justify-center text-primary glow-cyber">
                <Linkedin className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Connect on LinkedIn</h3>
                <p className="text-muted-foreground mt-1">Best place to reach me. Resume, recommendations, and full work history live here.</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm text-primary-foreground glow-cyber"
                  style={{ background: "var(--gradient-cyber)" }}>
                  Open LinkedIn Profile →
                </div>
              </div>
            </div>
          </div>
        </motion.a>

        <div className="lg:col-span-2 grid gap-3">
          {[
            { icon: Mail, label: "Email", value: "marwan.saad@example.com", href: "mailto:marwan.saad@example.com" },
            { icon: Github, label: "GitHub", value: "@marwan-saad", href: "https://github.com/" },
            { icon: MapPin, label: "Location", value: "Giza, Egypt", href: "#" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="panel p-4 flex items-center gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="h-11 w-11 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest">{c.label.toUpperCase()}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Terminal title="ssh marwan@portfolio">
          <Line user="$">curl -s https://marwan.dev/contact.json</Line>
          <Line user=">">{'{ "available": true, "roles": ["SOC", "NetSec", "CCNP-Sec"],'}</Line>
          <Line user=">">{'  "response_time": "~24h", "channel": "linkedin" }'}</Line>
          <Line user="$">echo "Looking forward to building secure networks together."</Line>
          <Line user=">"><span className="text-accent">message_sent ✔</span></Line>
          <Line user="$"><span className="blink">▌</span></Line>
        </Terminal>
      </div>
    </PageShell>
  );
}
