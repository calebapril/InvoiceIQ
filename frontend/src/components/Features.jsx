import React from "react";
import { featuresStyles } from "../assets/dummyStyles";

const FeatureCard = ({ title, desc, icon, delay = 0 }) => (
  <div
    className={featuresStyles.featureCard}
    style={{
      transitionDelay: `${delay}ms`,
    }}
  >
    <div className={featuresStyles.featureCardGradient}></div>
    <div className={featuresStyles.featureCardBorder}></div>
    <div className={featuresStyles.featureCardContent}>
      <div className={featuresStyles.featureCardIconContainer}>{icon}</div>

      <div className={featuresStyles.featureCardTextContainer}>
        <h4 className={featuresStyles.featureCardTitle}>{title}</h4>
        <p className={featuresStyles.featureCardDescription}>{desc}</p>

        {/* Subtle CTA indicator */}
        <div className={featuresStyles.featureCardCta}>
          <span className={featuresStyles.featureCardCtaText}>Learn more</span>
          <svg
            className={featuresStyles.featureCardCtaIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "AI Invoice Parsing",
      desc: "Paste any text and our AI converts it into a properly formatted invoice with all the important details filled in for you.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
    },
    {
      title: "Smart Email Reminders",
      desc: "Generate smart reminder emails in one click, automatically tailored with the right tone and personal details.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      title: "Professional PDF Export",
      desc: "Export beautifully branded PDF invoices with reliable email sending and complete delivery tracking.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className={featuresStyles.section}>
      <div className={featuresStyles.backgroundBlob1}></div>
      <div className={featuresStyles.backgroundBlob2}></div>
      <div className={featuresStyles.backgroundBlob3}></div>

      <div className={featuresStyles.container}>
        <div className={featuresStyles.headerContainer}>
          <div className={featuresStyles.badge}>
            <span className={featuresStyles.badgeDot}></span>
            <span className={featuresStyles.badgeText}>Powerful Features</span>
          </div>

          <h2 className={featuresStyles.title}>
            Built for{" "}
            <span className={featuresStyles.titleGradient}>
              Speed and Clarity
            </span>
          </h2>

          <p className={featuresStyles.subtitle}>
            An intelligent, distraction-free interface built to help you create,
            send, and track invoices effortlessly, while delivering a
            professional experience.
          </p>
        </div>

        <div className={featuresStyles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>

        {/* //NOTE - bottom cta */}
        <div className={featuresStyles.bottomCtaContainer}>
          <button className={featuresStyles.bottomCtaButton}>
            <span className="">{featuresStyles.bottomCtaButtonText}</span>
            {/* Bottom CTA */}
            <svg
              className={featuresStyles.bottomCtaButtonIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
