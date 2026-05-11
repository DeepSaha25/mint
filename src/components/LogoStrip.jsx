import { logoCloud } from '../data/siteData.js';

export default function LogoStrip() {
  return (
    <section className="bg-white px-6 pb-[138px] pt-7 md:pb-[286px] md:pt-0">
      <div className="mx-auto grid max-w-[910px] grid-cols-2 items-center gap-x-16 gap-y-8 text-center sm:grid-cols-4">
        {logoCloud.map((logo) => (
          <div
            key={logo}
            className={`text-[18px] font-bold tracking-tight ${logo === 'coinbase' ? 'text-[#0052ff]' : logo === 'PayPal' ? 'text-[#003087]' : logo === 'HubSpot' ? 'text-[#243342]' : 'text-ink'}`}
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
