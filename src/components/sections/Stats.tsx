const stats = [
  { value: "8", unit: "ans", label: "d'expérience en mer" },
  { value: "340+", unit: "", label: "clients satisfaits" },
  { value: "15", unit: "", label: "destinations proposées" },
  { value: "2", unit: "", label: "yachts d'exception" },
];

export default function Stats() {
  return (
    <section className="bg-narval-teal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center py-6 md:py-0 px-6">
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-display text-white"
                  style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300 }}>
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-display text-narval-slate"
                    style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 300 }}>
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
