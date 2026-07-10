import { Link } from "react-router";
import { Check, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description:
        "Perfect for individuals getting started with health tracking.",
      features: [
        "Up to 3 medications",
        "Basic health tracking",
        "Daily reminders",
        "Weekly reports",
        "Mobile & desktop access",
      ],
      notIncluded: [
        "AI-powered insights",
        "Unlimited medications",
        "Advanced analytics",
        "Priority support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "₹499",
      period: "per month",
      description: "Ideal for individuals managing multiple medications.",
      features: [
        "Unlimited medications",
        "Advanced health tracking",
        "AI-powered insights",
        "Custom reminders",
        "Detailed analytics",
        "Export reports (PDF)",
        "Priority email support",
        "Family sharing (up to 3)",
      ],
      notIncluded: [],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Family",
      price: "₹799",
      period: "per month",
      description: "Best for families managing health together.",
      features: [
        "Everything in Pro",
        "Up to 6 family members",
        "Shared health dashboard",
        "Caregiver access",
        "Emergency alerts",
        "Premium support",
        "Dedicated account manager",
        "Custom integrations",
      ],
      notIncluded: [],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for Pro and Family plans. No credit card required.",
    },
    {
      question: "How secure is my health data?",
      answer:
        "We use bank-level encryption and are HIPAA compliant. Your data is encrypted both in transit and at rest.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time with no cancellation fees.",
    },
    {
      question: "Do you offer discounts for seniors?",
      answer:
        "Yes, we offer a 20% discount for seniors (65+). Contact our support team to apply the discount.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl text-slate-900 mb-6 font-semibold">
            Simple, <span className="text-[#0099F3]">Transparent</span>  Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day
            free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular
                    ? "border-blue-500 shadow-xl scale-105"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600">/{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <Link
                  to="/signup"
                  className={`block w-full py-3 rounded-lg text-center mb-8 transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-md"
                      : "border-2 border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                      <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500 line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-slate-900 mb-6">
            Need an Enterprise Solution?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We offer custom plans for healthcare providers, hospitals, and large
            organizations. Get dedicated support, custom integrations, and
            volume pricing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg text-lg"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No credit card required. 14-day free trial on all paid plans.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-all shadow-lg text-lg"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Pricing;
