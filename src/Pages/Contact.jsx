import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("General Inquiry");
  const [form, setForm] = useState({
    firstName: "",
    lastname: "",
    email: "",
    contact: "",
    reason: "",
    message: "",
  });

  const countries = [
    "Technical Support",
    "Feature Request",
    "Billing Question",
    "Partnership Opportunity",
    "Other",
  ];
  const handleSelect = (reason) => {
    setSelected(reason);
    setIsOpen(false);
  };
  const changehandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    setForm({
      firstName: "",
      lastname: "",
      email: "",
      contact: "",
      reason: "",
      message: "",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl text-slate-900 mb-6 font-semibold">
              Get in <span className="text-[#0099F3]">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                <h2 className="text-3xl text-slate-900 mb-6">
                  Send us a Message
                </h2>

                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John"
                        required
                        name="firstName"
                        value={form.firstName}
                        onChange={changehandler}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Doe"
                        required
                        name="lastname"
                        value={form.lastname}
                        onChange={changehandler}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                      required
                      name="email"
                      value={form.email}
                      onChange={changehandler}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 01234 56789"
                      name="contact"
                      value={form.contact}
                      onChange={changehandler}
                    />
                  </div>

                  <div className=" w-full flex flex-col text-sm relative">
                    <div
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3   rounded-lg focus:outline-none  text-base ${!isOpen ? `border border-slate-300` : `border-2 border-blue-400`}`}
                    >
                      {selected}
                      <span>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
                    </div>

                    {isOpen && (
                      <ul className="w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
                        {countries.map((reason) => (
                          <li
                            key={reason}
                            className="px-4 py-2 hover:bg-[#0097F5] hover:text-white cursor-pointer"
                            onClick={() => handleSelect(reason)}
                          >
                            {reason}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                      name="message"
                      value={form.message}
                      onChange={changehandler}
                    />
                  </div>

                  <button
                    onSubmit={formHandler}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl text-slate-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-slate-600 mb-8">
                  We're here to help! Reach out to us through any of these
                  channels and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">support@smartmedai.com</p>
                      <p className="text-sm text-slate-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">+91 01234 56789</p>
                      <p className="text-sm text-slate-500">
                        Mon–Fri, 9am–6pm IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">Office</h3>
                      <p className="text-slate-600">
                        Sector 24, Cyber City Road
                        <br />
                        Gurugram, Haryana 122001
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-xl text-slate-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-18 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl text-slate-900 mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-slate-600 mb-8">
              Check out our help center for instant answers to common questions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg text-slate-900 mb-2">📚 Help Center</h3>
                <p className="text-sm text-slate-600">
                  Browse our knowledge base
                </p>
              </a>
              <a className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg text-slate-900 mb-2">💬 Live Chat</h3>
                <p className="text-sm text-slate-600">
                  Chat with our support team
                </p>
              </a>
              <a className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg text-slate-900 mb-2">
                  📖 Documentation
                </h3>
                <p className="text-sm text-slate-600">
                  Read our detailed guides
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
