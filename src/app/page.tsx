"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "About", id: "about" },
        { name: "Portfolio", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="NorCal Roofing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Reliable Roofing Solutions for Northern California"
      description="Protect your home with premium roofing installations, repairs, and maintenance. Expert craftsmanship designed to withstand California's toughest conditions."
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-shot-blue-farm-building-touching-cloudy-sky_181624-8393.jpg"
      imageAlt="New residential roof in Northern California"
      buttons={[{ text: "Get a Free Estimate", href: "#contact" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Expert Roofing Services"
      description="Comprehensive roofing care for residential properties."
      accordionItems={[
        { id: "f1", title: "Full Roof Replacements", content: "High-durability materials installed to local building codes for lifelong protection." },
        { id: "f2", title: "Emergency Leak Repair", content: "24/7 rapid response team to seal leaks and prevent structural water damage." },
        { id: "f3", title: "Preventative Maintenance Plans", content: "Scheduled seasonal inspections to clear debris and check for premature wear." },
        { id: "f4", title: "Custom Gutter Systems", content: "Integrated drainage solutions to ensure proper water diversion from your foundation." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/auto-mechanic-inflating-tire-with-air-compressor-street_651396-3561.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Decades of Local Expertise"
      description="We understand the unique climate challenges Northern California homes face and deliver high-performance roofing solutions."
      metrics={[
        { value: "1500+", title: "Projects Completed" },
        { value: "20+", title: "Years Experience" },
        { value: "100%", title: "Client Satisfaction" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-men-looking-tablet_23-2148921387.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "ProSeries", name: "Asphalt Shingles", price: "From $5k", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15478.jpg" },
        { id: "p2", brand: "ProSeries", name: "Metal Roofing", price: "From $12k", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13840.jpg" },
        { id: "p3", brand: "ProSeries", name: "Clay Tiles", price: "From $18k", rating: 5, reviewCount: "42", imageSrc: "http://img.b2bpic.net/free-photo/brick-wall-pattern-texture_1232-2595.jpg" },
      ]}
      title="Premium Roofing Materials"
      description="High-quality materials sourced for longevity and curb appeal."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "10Yr", title: "Labor Warranty", items: ["Comprehensive coverage", "Licensed craftsmanship"] },
        { id: "m2", value: "24/7", title: "Emergency Response", items: ["Same-day assessment", "Immediate protection"] },
        { id: "m3", value: "A+", title: "BBB Certified", items: ["Verified high ratings", "Proven reliability"] },
      ]}
      title="Why Choose NorCal Roofing"
      description="Your partner in residential protection and quality assurance."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Alice Johnson", date: "Jan 2024", title: "Homeowner", quote: "Professionalism defined. My roof looks better than ever!", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/middle-aged-best-friends-spending-time-together-outside_23-2148979086.jpg" },
        { id: "t2", name: "Bob Smith", date: "Feb 2024", title: "Homeowner", quote: "The team finished ahead of schedule and cleaned everything perfectly.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/photo-black-woman-caucasian-guy-have-outdoor-walk-stand-closely_273609-18072.jpg" },
      ]}
      title="Customer Reviews"
      description="Join hundreds of satisfied NorCal homeowners."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "How long is a typical roof replacement?", content: "Most residential projects are completed within 2 to 4 days, weather permitting." },
        { id: "q2", title: "Do you offer financing options?", content: "Yes, we work with several partner lenders to offer flexible monthly payment plans." },
        { id: "q3", title: "What warranty do you provide?", content: "All of our full replacements come with an industry-leading 10-year workmanship warranty." },
        { id: "q4", title: "Is a permit required for my roof?", content: "Our team handles all necessary permit applications and inspections for your city." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cropped-image-young-woman-artist-drawing-sketches_171337-14476.jpg"
      title="Frequently Asked Questions"
      description="Everything you need to know about your roofing project."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Request Your Free Roof Estimate"
      description="Our experts are ready to assess your home. Tell us about your current roofing needs and get a custom quote within 24 hours."
      inputs={[
        { name: "name", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
      ]}
      multiSelect={{ name: "service", label: "Select Service Type", options: ["Repair", "New Roof", "Inspection", "Maintenance"] }}
      textarea={{ name: "message", placeholder: "Please describe your project details...", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-surprised-man-holding-up-tablet_23-2148269250.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Services", items: [{ label: "Roof Repair", href: "#features" }, { label: "New Installs", href: "#features" }, { label: "Maintenance", href: "#features" }] },
        { title: "Resources", items: [{ label: "FAQs", href: "#faq" }, { label: "Pricing", href: "#products" }, { label: "Contact Support", href: "#contact" }] },
        { title: "Trust Signals", items: [{ label: "Licensed & Insured", href: "#" }, { label: "BBB A+ Rated", href: "#" }, { label: "10-Year Guarantee", href: "#" }] },
      ]}
      logoText="NorCal Roofing"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
