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
          <div className={heroStyles.demoColumn}>
            <div className={heroStyles.demoFloating1}></div>
            <div className={heroStyles.demoFloating2}></div>

            <div className={heroStyles.demoContainer}>
              <div className={heroStyles.demoCard}>
                <div className={heroStyles.cardHeader}>
                  <div className="space-y-1">
                    <div className={heroStyles.cardLogoContainer}>
                      <div className={heroStyles.cardLogo}>CD</div>
                      <div>
                        <div className={heroStyles.cardClientName}>
                          Caleb Designs
                        </div>
                        <div className={heroStyles.cardClientGst}>
                          {/* //NOTE - In Nigeria, the equivalent of a "GST number" for tax compliance is the Taxpayer Identification Number (TIN) or VAT registration number, typically a 12-digit numeric code, formatted as NNNNNNNN-NNNN. Examples include 12345678-0001, where the first 8 digits are unique to the entity and the last 4 are for branch identification.  */}
                          TIN: NNNNNNNN-NNNN
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={heroStyles.cardInvoiceInfo}>
                    <div className={heroStyles.cardInvoiceLabel}>Invoices</div>
                    <div className={heroStyles.cardInvoiceNumber}>
                      #INV-1024
                    </div>
                    <div className={heroStyles.cardStatus}>Paid</div>
                  </div>
                </div>
                <div className={heroStyles.itemsContainer}>
                  {[
                    {
                      description: "Website Design & Development",
                      amount: "₦500,000",
                    },
                    {
                      description: "Consultation (2 hours)",
                      amount: "₦50,000",
                    },
                    {
                      description: "Premium Hosting Setup",
                      amount: "₦100,000",
                    },
                  ].map((item, index) => (
                    <div key={index} className={heroStyles.itemRow}>
                      <div className="flex items-center gap-3">
                        <div className={heroStyles.itemDot}></div>
                        <span className={heroStyles.itemDescription}>
                          {item.description}
                        </span>
                      </div>
                      <span className={heroStyles.itemAmount}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={heroStyles.calculationContainer}>
                  <div className={heroStyles.calculationRow}>
                    <span className={heroStyles.calculationLabel}>
                      Subtotal
                    </span>
                    <span className={heroStyles.calculationValue}>
                      ₦600,000
                    </span>
                  </div>
                  <div className={heroStyles.calculationRow}>
                    <span className={heroStyles.calculationLabel}>
                      TIN(18%)
                    </span>
                    <span className={heroStyles.calculationValue}>₦10,000</span>
                  </div>
                  <div className={heroStyles.totalRow}>
                    <span className={heroStyles.totalLabel}>Total Amount</span>
                    <span className={heroStyles.totalValue}>₦570,000</span>
                  </div>
                </div>

                <div className={heroStyles.actionButtons}>
                  <button className={heroStyles.previewButton}>
                    <span className={heroStyles.previewButtonText}>
                      Preview
                    </span>
                  </button>
                  <button className={heroStyles.sendButton}>
                    <span className={heroStyles.sendButtonText}>
                      Send Invoice
                    </span>
                  </button>
                </div>
              </div>{" "}
              <div className={heroStyles.cornerAccent1}></div>
              <div className={heroStyles.cornerAccent2}></div>
            </div>
          </div>
        </div>

        <div className={heroStyles.cardBackground}></div>
        <div className={heroStyles.scrollIndicator}>
          <div className={heroStyles.scrollContainer}>
            <span className={heroStyles.scrollText}>Scroll to Explore</span>
            <div className={heroStyles.scrollBar}>
              <div className={heroStyles.scrollDot}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
