import { Link } from "react-router";
import {
  Pill,
  Activity,
  Brain,
  TrendingUp,
  Bell,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const mainFeatures = [
    {
      icon: Pill,
      title: "Smart Medicine Reminders",
      description:
        "Never miss a dose with intelligent reminders tailored to your schedule.",
      details: [
        "Customizable reminder times",
        "Multiple medications support",
        "Dosage tracking",
        "Refill notifications",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description:
        "Track vital metrics like blood pressure, sugar levels, and heart rate.",
      details: [
        "Blood pressure tracking",
        "Blood sugar monitoring",
        "Heart rate logs",
        "Weight management",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Get personalized health recommendations based on your data patterns.",
      details: [
        "Pattern recognition",
        "Health trend analysis",
        "Personalized tips",
        "Risk alerts",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Detailed Reports",
      description:
        "Visualize your health trends with comprehensive charts and analytics.",
      details: [
        "Interactive charts",
        "Weekly summaries",
        "Monthly reports",
        "Export to PDF",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bell,
      title: "Timely Notifications",
      description: "Stay on top of your health with customizable alerts.",
      details: [
        "Medicine reminders",
        "Health metric alerts",
        "Appointment notifications",
        "Custom schedules",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is encrypted and protected.",
      details: [
        "End-to-end encryption",
        "HIPAA compliant",
        "Secure cloud storage",
        "Privacy controls",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl text-slate-900 mb-6 font-semibold">
              Powerful <span className="text-[#0099F3]">Features</span> for
              Better Health
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              <span className="font-semibold">SmartMed AI</span> provides
              everything you need to manage your medications, track your health
              metrics, and maintain a healthy lifestyle.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg text-lg"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Main Features */}
        <section className="pb-18 pt-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-slate-200 rounded-2xl hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to Experience All Features?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start using SmartMed AI today and take control of your health
              journey.
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
                to="/pricing"
                className="flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Features;
