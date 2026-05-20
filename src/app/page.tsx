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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Portfolio",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="NorCal Roofing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Reliable Roofing Solutions for Northern California"
      description="Protect your home with premium roofing installations, repairs, and maintenance. Expert craftsmanship designed to withstand California's toughest conditions."
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-shot-blue-farm-building-touching-cloudy-sky_181624-8393.jpg"
      imageAlt="New residential roof in Northern California"
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Expert Roofing Services"
      description="Comprehensive roofing care for residential properties."
      accordionItems={[
        {
          id: "f1",
          title: "Roof Repair",
          content: "Fast response for leaks, missing shingles, and storm damage.",
        },
        {
          id: "f2",
          title: "New Installations",
          content: "Full replacement services using top-tier materials.",
        },
        {
          id: "f3",
          title: "Preventative Maintenance",
          content: "Regular inspections to extend the life of your roof.",
        },
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
        {
          value: "1500+",
          title: "Projects Completed",
        },
        {
          value: "20+",
          title: "Years Experience",
        },
        {
          value: "100%",
          title: "Client Satisfaction",
        },
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
        {
          id: "p1",
          brand: "Brand",
          name: "Asphalt Shingles",
          price: "From $5k",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15478.jpg",
        },
        {
          id: "p2",
          brand: "Brand",
          name: "Metal Roofing",
          price: "From $12k",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13840.jpg",
        },
        {
          id: "p3",
          brand: "Brand",
          name: "Clay Tiles",
          price: "From $18k",
          rating: 5,
          reviewCount: "42",
          imageSrc: "http://img.b2bpic.net/free-photo/brick-wall-pattern-texture_1232-2595.jpg",
        },
        {
          id: "p4",
          brand: "Brand",
          name: "Composite Tiles",
          price: "From $15k",
          rating: 5,
          reviewCount: "67",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24747.jpg",
        },
        {
          id: "p5",
          brand: "Brand",
          name: "Wood Shakes",
          price: "From $20k",
          rating: 5,
          reviewCount: "33",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-texture-composition-close-up_23-2148291454.jpg",
        },
        {
          id: "p6",
          brand: "Brand",
          name: "Slate Tiles",
          price: "From $25k",
          rating: 5,
          reviewCount: "19",
          imageSrc: "http://img.b2bpic.net/free-photo/sun-twilight-air-blue-background_1172-233.jpg",
        },
      ]}
      title="Premium Roofing Materials"
      description="High-quality products for lasting protection and aesthetics."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "10Yr",
          title: "Labor Warranty",
          items: [
            "Comprehensive protection",
            "Local service",
          ],
        },
        {
          id: "m2",
          value: "24/7",
          title: "Emergency Support",
          items: [
            "Rapid response",
            "Always available",
          ],
        },
        {
          id: "m3",
          value: "A+",
          title: "BBB Rating",
          items: [
            "Proven excellence",
            "Customer trust",
          ],
        },
      ]}
      title="Why Choose NorCal Roofing"
      description="Quality assurance and excellence in everything we do."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice Johnson",
          date: "Jan 2024",
          title: "Homeowner",
          quote: "Excellent team and fast installation.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/middle-aged-best-friends-spending-time-together-outside_23-2148979086.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-discussing_23-2149039820.jpg",
        },
        {
          id: "t2",
          name: "Bob Smith",
          date: "Feb 2024",
          title: "Homeowner",
          quote: "Professional and clean service.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/photo-black-woman-caucasian-guy-have-outdoor-walk-stand-closely_273609-18072.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-concept-happy-young-man-searching-home-rent-holding-house-paper-maket-smiling-st_1258-160610.jpg",
        },
        {
          id: "t3",
          name: "Charlie Brown",
          date: "Mar 2024",
          title: "Homeowner",
          quote: "They exceeded all my expectations.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/full-shot-couple-decorating-home_23-2150633319.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-2457.jpg",
        },
        {
          id: "t4",
          name: "Diana Ross",
          date: "Apr 2024",
          title: "Homeowner",
          quote: "Highest quality workmanship.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/horizontal-portrait-beautiful-positive-young-european-female-blue-shirt-dress-relaxing-home-looking-front-with-easy-carefree-smile_343059-3894.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-having-breakfast-garden_23-2148060187.jpg",
        },
        {
          id: "t5",
          name: "Edward Norton",
          date: "May 2024",
          title: "Homeowner",
          quote: "Great communication throughout the job.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-people-making-home-comfortable_23-2149092041.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-eco-bag-with-fruit-country-side_1303-15264.jpg",
        },
      ]}
      title="Customer Reviews"
      description="Hear what our Northern California neighbors have to say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How long does a roof replacement take?",
          content: "Typically 2-4 days depending on size.",
        },
        {
          id: "q2",
          title: "Do you provide estimates?",
          content: "Yes, we offer free, no-obligation estimates.",
        },
        {
          id: "q3",
          title: "Are you licensed and insured?",
          content: "Absolutely, fully compliant in California.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cropped-image-young-woman-artist-drawing-sketches_171337-14476.jpg"
      title="Common Questions"
      description="Answers to the most frequently asked questions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Schedule Your Roof Consultation"
      description="Ready to get started? Send us a message and our team will be in touch shortly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your roofing needs...",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-surprised-man-holding-up-tablet_23-2148269250.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Portfolio",
              href: "#products",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="NorCal Roofing"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
