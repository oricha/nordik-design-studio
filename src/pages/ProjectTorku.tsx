import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Maximize2, BedDouble, Bath, Plus, Check, ChevronDown, Home, Wrench, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import torkuHero from "@/assets/torku-hero.jpg";
import torkuInterior from "@/assets/torku-interior.jpg";
import torkuSide from "@/assets/torku-side.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [torkuHero, torkuSide, torkuInterior];

const specsLeft = [
  "Frame structure from C24 impregnated pine",
  "Insulation rockwool for floors (200 mm), walls (150 mm) and ceilings (200 mm)",
  "Wind membrane",
  "Vapor barrier film",
  "Roof membrane",
  "Electricity in all house",
  "Bathroom covered with tiles",
];

const specsRight = [
  "Roof sheets Ruukki Classic (metal roofing solution)",
  "Windows and doors PVC (3-glass Gealan Rehau)",
  "Floors in main areas covered with Laminate 33. class",
  "Installation of sewerage and water pipes in the house",
  "Interior finishing",
  "Exterior finishing",
];

type CustomOption = {
  name: string;
  items: number;
  price: number;
  added: boolean;
};

const ProjectTorku = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [customizations, setCustomizations] = useState<CustomOption[]>([
    { name: "Kitchen furniture & Appliances", items: 6, price: 3000, added: false },
    { name: "Bathroom appliances", items: 5, price: 3000, added: false },
    { name: "Heating", items: 2, price: 2500, added: false },
  ]);

  const basePrice = 32400;
  const addedExtras = customizations.filter((c) => c.added).reduce((sum, c) => sum + c.price, 0);
  const totalPrice = basePrice + addedExtras;

  const toggleCustomization = (index: number) => {
    setCustomizations((prev) =>
      prev.map((c, i) => (i === index ? { ...c, added: !c.added } : c))
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Torku cabin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-lg">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-background mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-4">
              Torku
            </h1>
            <div className="flex gap-2 mb-4">
              <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                TREND
              </span>
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                PHASE 2
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-background mb-2">
              {basePrice.toLocaleString()} € + VAT
            </p>
            <div className="flex gap-6 text-background/80 text-sm mb-6">
              <span className="flex items-center gap-1">
                <Maximize2 className="w-4 h-4" /> 48 m²
              </span>
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 2 bedrooms
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 1 bathroom
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Construction time: <strong className="text-background">3 months</strong>
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Make request
            </a>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-8 right-8 hidden md:flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-accent" : "border-background/30"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>

        {/* House Specifications */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={torkuSide}
                alt="Torku side view"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                House specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                <ul className="space-y-3">
                  {specsLeft.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Plus className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {specsRight.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Plus className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block bg-foreground text-background px-10 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Make request
              </a>
            </div>
          </div>
        </section>

        {/* Project Photos */}
        <section className="section-padding bg-warm-gray">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Project photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Torku photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* House Customisation */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                House customisation
              </h2>
              <div className="space-y-4">
                {customizations.map((opt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-border rounded-xl p-4"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{opt.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {opt.items} items | {opt.price.toLocaleString()} €
                      </p>
                    </div>
                    <button
                      onClick={() => toggleCustomization(i)}
                      className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                        opt.added
                          ? "bg-accent/20 text-accent"
                          : "bg-foreground text-background hover:opacity-90"
                      }`}
                    >
                      {opt.added ? (
                        <>
                          <Check className="w-4 h-4" /> Added
                        </>
                      ) : (
                        "Add"
                      )}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-24">
              <img
                src={torkuHero}
                alt="Torku"
                className="w-full rounded-xl mb-6"
                loading="lazy"
              />
              <div className="text-sm text-muted-foreground mb-1">BASE PACKAGE PRICE</div>
              <div className="text-lg font-semibold text-foreground mb-4">
                {basePrice.toLocaleString()} € + VAT
              </div>
              <div className="text-sm text-muted-foreground mb-1">TOTAL PRICE</div>
              <div className="text-3xl font-bold text-foreground mb-6">
                {totalPrice.toLocaleString()} € + VAT
              </div>
              <a
                href="#contact"
                className="block text-center bg-foreground text-background px-10 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Make request
              </a>
            </div>
          </div>
        </section>

        {/* Construction Options */}
        <section className="section-padding bg-warm-gray">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Construction options
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: "Completely finished house",
                  desc: "A fully finished house is a completed home that lacks furniture and appliances. All the walls are painted, floor finishes are installed, and the ceilings, electrical and plumbing fixtures, doors, and windows are in place.",
                },
                {
                  icon: Layers,
                  title: "Prefabricated panels",
                  desc: "When the panels are manufactured, they are loaded onto trucks according to a pre-planned transportation schedule. The loading plan ensures that elements arrive at each truck exactly when they are needed.",
                },
                {
                  icon: Wrench,
                  title: "Construction from materials on site",
                  desc: "The construction of the house takes place directly on the building site, which means that all the main structural elements are assembled and installed right on-site using specialized equipment and manual labor.",
                },
              ].map((option, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-xl p-8 hover-lift"
                >
                  <option.icon className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-foreground mb-3">{option.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Request Section */}
        <section id="contact" className="section-padding bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Request a consultation
            </h2>
            <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-mail"
                className="border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="tel"
                placeholder="Your phone"
                className="border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground"
              />
              <div className="md:col-span-2 flex gap-6 py-2">
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <input type="radio" name="type" defaultChecked className="accent-accent" />
                  Production
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <input type="radio" name="type" className="accent-accent" />
                  Consultation
                </label>
              </div>
              <textarea
                rows={4}
                placeholder="Message Text"
                className="md:col-span-2 border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-foreground text-background px-10 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectTorku;
