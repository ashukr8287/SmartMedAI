import { Link } from "react-router";
import {
  Activity,
  Pill,
  Heart,
  TrendingUp,
  Bell,
  Brain,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: Pill,
      title: "Smart Medicine Reminders",
      description:
        "Never miss a dose with intelligent reminders tailored to your schedule.",
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description:
        "Track vital metrics like blood pressure, sugar levels, and heart rate in one place.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Get personalized health recommendations based on your data patterns.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Diabetes Patient",
      comment:
        "SmartMed AI has transformed how I manage my medications. I never miss a dose anymore!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Senior Citizen",
      comment:
        "The health tracking features help me stay on top of my blood pressure. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Caregiver",
      comment:
        "Perfect for managing my parents' medications. The reminders are a lifesaver!",
      rating: 5,
    },
  ];

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prev = () =>
    goTo((currentSlide - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentSlide + 1) % testimonials.length);

  // Show 3 cards on desktop: current-1, current, current+1
  const getVisibleIndices = () => {
    const len = testimonials.length;
    return [
      (currentSlide - 1 + len) % len,
      currentSlide,
      (currentSlide + 1) % len,
    ];
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="md:py-18 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className=" group inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                  <Star className="w-4 h-4 group-hover:fill-current" />
                  <span className="text-sm">AI-Powered Health Management</span>
                </div>

                <h1 className="text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight font-semibold">
                  Never Miss Your{" "}
                  <span className="text-[#0099F3]">Medicine</span> Again
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  SmartMed AI helps you manage medications, track health
                  metrics, and stay on top of your wellness journey with
                  intelligent reminders and personalized insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/signup"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Start Free Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/features"
                    className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="flex items-center gap-8 mt-12 justify-center md:justify-start">
                  <div>
                    <p className="text-3xl text-slate-900">50K+</p>
                    <p className="text-sm text-slate-600">Active Users</p>
                  </div>
                  <div>
                    <p className="text-3xl text-slate-900">1M+</p>
                    <p className="text-sm text-slate-600">Reminders Sent</p>
                  </div>
                  <div>
                    <p className="text-3xl text-slate-900">4.9★</p>
                    <p className="text-sm text-slate-600">User Rating</p>
                  </div>
                </div>
              </div>

              <div className=" bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900">Today's Health</p>
                    <p className="text-xs text-slate-500">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100">
                    <Heart className="w-6 h-6 text-red-600 mb-2" />
                    <p className="text-sm text-slate-600">Heart Rate</p>
                    <p className="text-2xl text-slate-900">
                      72 <span className="text-sm">bpm</span>
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <Activity className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="text-sm text-slate-600">Blood Pressure</p>
                    <p className="text-2xl text-slate-900">120/80</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="w-5 h-5 rounded text-green-600"
                    />
                    <div className="flex-1">
                      <p className="text-slate-900">Aspirin</p>
                      <p className="text-xs text-slate-600">100mg - 8:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <input
                      type="checkbox"
                      readOnly
                      className="w-5 h-5 rounded text-green-600"
                    />
                    <div className="flex-1">
                      <p className="text-slate-900">Metformin</p>
                      <p className="text-xs text-slate-600">500mg - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Features */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-slate-900 mb-4 font-semibold">
                Why Choose <span className="text-[#0099F3]">SmartMed</span> AI?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to manage your health in one intelligent
                platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/features"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                View All Features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl text-slate-900 mb-4 font-semibold">
                <span className="text-[#0099F3]">Loved</span> by Thousands of
                Users
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                See what our users have to say about their experience with
                SmartMed AI.
              </p>
            </div>

            {/* Slider */}
            <div className="relative">
              {/* Cards — Desktop: 3 visible, Mobile: 1 */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {getVisibleIndices().map((tIdx, position) => {
                  const testimonial = testimonials[tIdx];
                  const isCenter = position === 1;
                  return (
                    <div
                      key={tIdx}
                      className={`bg-white rounded-2xl border p-8 transition-all duration-500 flex flex-col gap-4
                      ${
                        isCenter
                          ? "border-blue-200 shadow-xl scale-105 z-10"
                          : "border-slate-200 shadow-sm opacity-70"
                      }`}
                    >
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      {/* Quote */}
                      <p className="text-slate-700 italic flex-1">
                        "{testimonial.comment}"
                      </p>
                      {/* Author */}
                      <div className="flex items-center gap-3 mt-2">
                        {/* <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                      >
                        {testimonial.avatar}
                      </div> */}
                        <div>
                          <p className="text-slate-900 font-semibold text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile: single card */}
              <div className="md:hidden">
                <div className="bg-white rounded-2xl border border-blue-200 shadow-xl p-8 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentSlide].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ),
                    )}
                  </div>
                  <p className="text-slate-700 italic">
                    "{testimonials[currentSlide].comment}"
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {/* <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[currentSlide].color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {testimonials[currentSlide].avatar}
                  </div> */}
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">
                        {testimonials[currentSlide].name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonials[currentSlide].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prev / Next Buttons
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button> */}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300
                  ${
                    idx === currentSlide
                      ? "w-6 h-2.5 bg-blue-500"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join SmartMed AI today and never miss a medication again. Start
              your journey to better health management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-all shadow-lg text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Landing;
