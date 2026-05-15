import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Project selection",
    body: `Explore our website to discover the house model that resonates with your vision, preferred size, design, and layout. Enhance your chosen home with additional features to create your ideal living space. Submit your customization requests to us!`,
  },
  {
    number: "02",
    title: "Consultation & production visit",
    body: `Visit our office in Riga or arrange an online consultation with our team of experts and gather any necessary information. You are also invited to explore our production facilities and view our completed houses in Latvia for an in-person experience of our product.`,
  },
  {
    number: "03",
    title: "Contract & first payment",
    body: `Once you have selected your ideal house and decided on any preferred additions, we proceed to sign the contract. At this stage, the client is required to make an initial payment of 50% of the total amount.`,
  },
  {
    number: "04",
    title: "Submission of documents to building authorities",
    body: `Upon signing the agreement, we will provide you with all the requisite documents and plans necessary for submission to your local building authorities. We offer to adjust each house to your specific local requirements. This ensures a smooth and compliant process for obtaining the necessary approvals and permits for your project.`,
  },
  {
    number: "05",
    title: "Beginning of house construction",
    body: `Construction of your house commences at our production facility. The timeframe for completion is contingent upon the size and design of your chosen home. Throughout the process, we maintain regular communication, providing updates on progress and the work accomplished at each stage.`,
  },
  {
    number: "06",
    title: "Selecting finishing materials",
    body: `We understand the importance of creating a perfect house that aligns with your vision. To achieve this, we provide you with a wide range of options for finishing materials. You can choose from a variety of colors and styles for exterior and interior walls, flooring, roof, and windows to ensure that every detail matches your preferences and brings your dream home to life.`,
  },
  {
    number: "07",
    title: "Installation of foundation",
    body: `While we are in the process of constructing your house, it is essential that you prepare the foundation at your site. You can use pillars, screw piles, concrete foundations, or other alternatives based on your preferences. We will provide all the necessary information, including a foundation plan and communication plan, to ensure that you can prepare the site effectively and choose the best option for your project.`,
  },
  {
    number: "08",
    title: "Delivery and installation",
    body: `Once your house is complete, we are ready to ship it to your location. Advance organization of transportation is essential to ensure a smooth and successful delivery process. The method of shipment may vary based on the chosen house model and construction method. Whether it's delivered fully finished, in multiple modules, or panelized, it's important to note that crane services will be required both at our production facility and on your site.`,
  },
  {
    number: "09",
    title: "Connection to utilities",
    body: `After the house is securely placed on its foundation and all necessary construction work is completed, which may include site-specific requirements, your final step is to connect your existing utilities to the prepared outputs within the house. These connections involve water, sewage, and electricity. After this, your new house will be ready for you to move in and enjoy!`,
  },
];

// Scroll to the anchor from URL hash after page load
const useScrollToAnchor = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);
};

const HowItWorksPage = () => {
  useScrollToAnchor();

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <div className="bg-warm-gray pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            The process
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            How it works
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From choosing your model to moving in — 9 clear steps to your new
            NordiK home. Each step explained so you always know what comes next.
          </p>
        </div>
      </div>

      {/* Sticky mini-nav on desktop */}
      <div className="sticky top-[62px] z-30 hidden border-b border-border bg-background/95 backdrop-blur-md lg:block">
        <div className="mx-auto max-w-7xl px-6">
          <ol className="flex gap-0 overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden">
            {steps.map((s) => (
              <li key={s.number} className="shrink-0">
                <a
                  href={`#step-${s.number}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm
                             text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="font-bold tabular-nums text-accent">{s.number}</span>
                  <span className="hidden xl:inline">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <ol className="space-y-0">
          {steps.map((step, i) => {
            const prev = steps[i - 1];
            const next = steps[i + 1];

            return (
              <li
                key={step.number}
                id={`step-${step.number}`}
                className="scroll-mt-32"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-8 py-14"
                >
                  {/* Left: number + connector */}
                  <div className="flex flex-col items-center">
                    {/* Circle */}
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                                 border-2 border-accent bg-accent/10"
                    >
                      <span className="text-base font-bold tabular-nums text-accent">
                        {step.number}
                      </span>
                    </div>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className="mt-4 flex-1 w-px bg-border" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="min-w-0 flex-1 pb-4">
                    <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {step.title}
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {step.body}
                    </p>

                    {/* Step navigation */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      {i === steps.length - 1 && (
                        <Link
                          to="/contactos"
                          className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3
                                     text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
                        >
                          Start your project <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                      <div className="flex gap-3 text-sm">
                        {prev && (
                          <a
                            href={`#step-${prev.number}`}
                            className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground"
                          >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            {prev.number}. {prev.title}
                          </a>
                        )}
                        {next && (
                          <a
                            href={`#step-${next.number}`}
                            className="inline-flex items-center gap-1.5 font-medium text-accent hover:opacity-80"
                          >
                            Next: {next.number}. {next.title}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Divider between steps (except last) */}
                {i < steps.length - 1 && (
                  <div className="ml-[3.5rem] border-t border-border/50" />
                )}
              </li>
            );
          })}
        </ol>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-border bg-card px-8 py-10 text-center shadow-sm"
        >
          <h3 className="text-xl font-semibold text-foreground">
            Ready to start your project?
          </h3>
          <p className="mt-2 text-base text-muted-foreground">
            Request a free quote and our team will guide you through every step.
          </p>
          <Link
            to="/contactos"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5
                       text-base font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Request a free quote <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
