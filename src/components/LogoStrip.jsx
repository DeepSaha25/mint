function MicrosoftLogo() {
  return (
    <span className="brand-logo microsoft-logo" aria-label="Microsoft">
      <span className="ms-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span>Microsoft</span>
    </span>
  );
}

function PerplexityLogo() {
  return (
    <span className="brand-logo perplexity-logo" aria-label="Perplexity">
      <svg viewBox="0 0 34 40" aria-hidden="true">
        <path d="M16.9 2v36M4 10h25.8v20H4zM4 10l12.9 10L29.8 10M4 30l12.9-10 12.9 10M16.9 2 29.8 10M16.9 2 4 10M16.9 38 4 30M16.9 38l12.9-8" />
      </svg>
      <span>perplexity</span>
    </span>
  );
}

function HubSpotLogo() {
  return (
    <span className="brand-logo hubspot-logo" aria-label="HubSpot">
      <span>HubSp</span>
      <svg viewBox="0 0 32 34" aria-hidden="true">
        <path d="M21.5 10.5V7.1a3.6 3.6 0 1 0-2.6 0v3.4a8.2 8.2 0 0 0-4.4 2.5L8.8 8.6a3.2 3.2 0 1 0-1.7 2.1l5.8 4.5a8.2 8.2 0 1 0 8.6-4.7Zm-1.3 13.8a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" />
      </svg>
      <span>t</span>
    </span>
  );
}

function NotionLogo() {
  return (
    <span className="brand-logo notion-logo" aria-label="Notion">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M7.5 5.6 28.6 4l5.1 4.2v25.4L11.2 36 6.3 31.9V9.8l1.2-4.2Z" />
        <path d="m8.6 9.4 4.2 3.4 18.5-1.4-4-3.3L8.6 9.4Z" />
        <path d="M13.6 15.4v15.7l17.1-1.2V14.1l-17.1 1.3Z" />
        <path d="M17 27.8V16.5l2.8-.2 7.4 10.2V15.7l2.5-.2v13.1l-2.7.2-7.5-10.3v9.1l2.7.2v1.4l-7.3.5v-1.4l2.1-.5Z" />
      </svg>
      <span>Notion</span>
    </span>
  );
}

function PayPalLogo() {
  return (
    <span className="brand-logo paypal-logo" aria-label="PayPal">
      <svg viewBox="0 0 34 40" aria-hidden="true">
        <path d="M8.7 4h13.1c5.3 0 8.7 3 7.8 8.5-1 6.4-5.3 9.6-11 9.6h-4.2l-1.5 9.3H6.2L8.7 4Z" />
        <path d="M13.3 10h12.3c4.7 0 7.5 2.8 6.7 7.6-.9 5.8-4.9 8.8-10.1 8.8h-4.3L16.5 36H9.9l3.4-26Z" />
      </svg>
      <span>PayPal</span>
    </span>
  );
}

function LovableLogo() {
  return (
    <span className="brand-logo lovable-logo" aria-label="Lovable">
      <svg viewBox="0 0 32 28" aria-hidden="true">
        <defs>
          <linearGradient id="lovable-gradient" x1="4" y1="23" x2="23" y2="3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff6a3d" />
            <stop offset=".48" stopColor="#ff4fb8" />
            <stop offset="1" stopColor="#4f8cff" />
          </linearGradient>
        </defs>
        <path d="M9.2 2.5c3.7 0 6.8 3 6.8 6.8 0-3.8 3-6.8 6.8-6.8 3.9 0 7.2 3.2 7.2 7.2 0 8.5-14 16-14 16S2 18.2 2 9.7c0-4 3.2-7.2 7.2-7.2Z" fill="url(#lovable-gradient)" />
      </svg>
      <span>Lovable</span>
    </span>
  );
}

const logos = [
  <span className="brand-logo anthropic-logo">ANTHROPIC</span>,
  <span className="brand-logo coinbase-logo">coinbase</span>,
  <MicrosoftLogo />,
  <PerplexityLogo />,
  <HubSpotLogo />,
  <NotionLogo />,
  <PayPalLogo />,
  <LovableLogo />,
];

export default function LogoStrip() {
  return (
    <section className="bg-white px-6 pb-[138px] pt-7 md:pb-[286px] md:pt-0">
      <div className="mx-auto grid max-w-[910px] grid-cols-2 items-center gap-x-16 gap-y-8 text-center sm:grid-cols-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex h-10 items-center justify-center">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
