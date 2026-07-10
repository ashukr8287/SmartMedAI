import { Link } from "react-router-dom";
import { Heart, Target, Users, Award, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description:
        "We put patients first in everything we do, designing solutions that truly help improve lives.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We leverage cutting-edge AI technology to create smarter, more effective health solutions.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "Healthcare should be accessible to everyone. We make our platform simple and affordable.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every feature, ensuring the highest quality healthcare tools.",
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
              <span className="text-[#0099F3]">About</span> SmartMed AI
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize medication management and
              health tracking through the power of artificial intelligence.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl text-slate-900 mb-6">Our Mission</h2>

                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  At SmartMed AI, our mission is to make health management
                  simple, organized, and accessible for everyone. We aim to help
                  people remember their medicines on time and keep track of
                  their important health data through a smart and easy-to-use
                  digital platform.
                </p>

                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  Launched in 2026 as a college project by three students —
                  Ashu, Aman, and Anish — SmartMed AI was designed to
                  demonstrate how modern web technologies and intelligent
                  systems can be used to solve real-world healthcare problems.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  By combining a clean user interface with smart reminders and
                  health tracking features, our goal is to build a platform that
                  helps users stay consistent with their medications and
                  maintain a healthier lifestyle.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
                  <p className="text-4xl text-blue-600 mb-2">50K+</p>
                  <p className="text-slate-700">Active Users</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                  <p className="text-4xl text-purple-600 mb-2">1M+</p>
                  <p className="text-slate-700">Reminders Sent</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                  <p className="text-4xl text-green-600 mb-2">85%</p>
                  <p className="text-slate-700">Adherence Rate</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
                  <p className="text-4xl text-orange-600 mb-2">4.9★</p>
                  <p className="text-slate-700">User Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The principles that guide everything we do at SmartMed AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-200 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-slate-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                SmartMed AI was developed as a college project by three friends
                — Ashu, Aman, and Anish — who wanted to create a smart solution
                for managing medicines and health data. During our studies in
                computer science, we realized that many people find it difficult
                to remember their medicines and keep track of important health
                information.
              </p>

              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Inspired by this problem, we decided to build a platform that
                could help users receive timely medicine reminders and monitor
                basic health metrics in one place. By combining our knowledge of
                web development and modern technologies, we created SmartMed AI
                to make health management simpler and more organized.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                This project represents our effort to apply technology to solve
                real-life problems. As students and developers, we are proud of
                building SmartMed AI together and hope to continue improving it
                with more features and smarter solutions in the future.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of a community that's revolutionizing health management.
              Start your journey today.
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
                to="/contact"
                className="flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
