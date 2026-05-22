'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I went from spending 20 hours a week on lead gen to 2 hours. My calendar is full of qualified leads who actually want to talk.",
      name: "Sarah Mitchell",
      title: "RE Agent, Keller Williams",
      location: "Austin, TX",
      result: "12 deals in 90 days",
    },
    {
      quote: "The seller leads are incredible. I found 3 families in my farm area who were thinking about selling — and I was the first agent they called.",
      name: "Marcus Johnson",
      title: "RE Agent, Compass",
      location: "Denver, CO",
      result: "+$180K in closed volume",
    },
    {
      quote: "Finally, a lead gen service that doesn't feel like spam. These people are pre-warmed and ready to buy. My conversion rate doubled.",
      name: "Jennifer Park",
      title: "RE Agent, RE/MAX",
      location: "Seattle, WA",
      result: "65% close rate",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Agents Who&apos;ve Transformed<br />
            <span className="text-blue-600">Their Business</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-blue-100 -mt-4 mb-2">&quot;</div>
              
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.title}</div>
                  <div className="text-sm text-slate-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
