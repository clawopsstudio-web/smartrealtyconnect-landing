'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '🎯',
      title: 'We Identify Your Target Market',
      description: 'Tell us your service area and ideal client profile. Our AI maps out the neighborhoods, price ranges, and property types where your opportunities are.',
    },
    {
      number: '02',
      icon: '🤖',
      title: 'AI Discovers Motivated Prospects',
      description: 'Our AI scours Reddit, public records, social media, and 100+ data sources to find people who are actively thinking about buying or selling.',
    },
    {
      number: '03',
      icon: '✅',
      title: 'We Qualify & Warm Them Up',
      description: 'Each lead is vetted for motivation, timeline, and budget. We send personalized outreach that makes them want to talk to YOU.',
    },
    {
      number: '04',
      icon: '📅',
      title: 'Appointments Delivered to Your Calendar',
      description: 'Qualified, pre-interested leads book directly on your calendar. You show up, build rapport, and close.',
    },
  ];

  return (
    <section id="how" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            From Cold Prospecting to<br />
            <span className="text-blue-600">Calendar Full of Leads</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A simple, proven process that replaces hours of cold calling with AI-powered lead discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0" />
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full border border-slate-100 relative z-10">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-blue-600 font-bold text-sm mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#book" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/25"
          >
            Get Started Today
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
