import React from "react";
import { heroStyles } from "../assets/dummyStyles";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const clerk = useClerk();

  const handleSignedInPrimary = () => {
    navigate("/app/create-invoice");
  };

  const handleSignedOutPrimary = () => {
    try {
      if (clerk && typeof clerk.openSignUp === "function") {
        clerk.openSignUp();
      }
    } catch (err) {
      console.error("failed to open clerk signup modal:", err);
    }
  };
  return (
    <section className={heroStyles.section}>
      {/* //NOTE - Background gradient for heroStyles */}
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>

      {/* //NOTE - Grid patterns for heroStyles */}
      <div className={heroStyles.gridPattern}></div>
      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.content}>
            <div className={heroStyles.contentInner}>
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                  AI - Powered Invoicing App
                </span>
              </div>
              {/* //NOTE - main heading */}
              <h1 className={heroStyles.heading}>
                <div className={heroStyles.headingLine1}>Professional</div>
                <span className={heroStyles.headingLine2}>
                  Generated Invoices
                </span>
                <br />
                <span className={heroStyles.headingLine3}>In Seconds</span>
              </h1>

              {/* Description */}
              <p className={heroStyles.description}>
                Turn conversations into invoices instantly.{" "}
                {/* <span className={heroStyles.descriptionHighlight}>
                  Paste any text
                </span>{" "} */}
                AI extracts items, calculates totals, and generates
                professional, ready-to-send invoices in seconds.
              </p>
            </div>

            {/* //NOTE - CTA Btn */}
            <div className={heroStyles.ctaContainer}>
              <SignedIn>
                <button
                  type="button"
                  onClick={handleSignedInPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span className={heroStyles.previewButtonText}>
                    Send Your First Invoice
                  </span>
                  <svg
                    className={heroStyles.primaryButtonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedIn>

              <SignedOut>
                <button
                  type="button"
                  onClick={handleSignedOutPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span className={heroStyles.previewButtonText}>
                    Send Your First Invoice
                  </span>
                  <svg
                    className={heroStyles.primaryButtonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedOut>

              <a href="#features" className={heroStyles.secondaryButton}>
                <span className="">See How It Works</span>
                <svg
                  className={heroStyles.secondaryButtonIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* //LINK - Features Section */}
            <div className={heroStyles.featuresGrid}>
              {[
                { icon: "🤖", label: "AI-Powered", desc: "Smart text parsing" },
                {
                  icon: "⚡",
                  label: "Lightning Fast",
                  desc: "Generate in seconds",
                },
                {
                  icon: "🎨",
                  label: "Professional",
                  desc: "Branded templates",
                },
              ].map((feature, index) => (
                <div key={index} className={heroStyles.featureItem}>
                  <div className={heroStyles.featureIcon}>{feature.icon}</div>
                  <div className={heroStyles.featureText}>
                    <div className={heroStyles.featureLabel}>
                      {feature.label}
                    </div>
                    <div className={heroStyles.featureDesc}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* //NOTE - Right side */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
