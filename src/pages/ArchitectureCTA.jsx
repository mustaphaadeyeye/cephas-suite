
import { useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";
import { X } from "lucide-react";

const ModernizeSection = () => {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <div className="">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(135deg, #1233CC 0%, #0F3CCF 15%, #0B44D2 30%, #074CD4 45%, #0596F1 70%, #0083EA 85%, #0089EC 100%)",
          }}
          className="rounded-[20px] px-6 py-12 sm:px-8 sm:py-14 md:py-16 text-center mt-5 mb-5 mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-[#FFFFFFB2]"
          >
            Not sure where to start?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#FFFFFF] mx-auto w-full sm:w-4/5 md:w-3/5 lg:w-2/5 font-bold text-2xl sm:text-[28px] md:text-[32px] leading-snug sm:leading-[35px]"
          >
            Let us map the right architecture for your business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-white/80 text-sm md:text-[16px] mt-4 max-w-xl mx-auto leading-relaxed font-normal"
          >
            Reach out to our expert consultants who will guide you in choosing
            the best solutions tailored to your company's unique needs no
            sales call necessary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setShowCallModal(true)}
              className="bg-white text-blue-700 cursor-pointer font-bold text-sm px-6 py-3 rounded-[8px] hover:bg-gray-100 transition-colors"
            >
              Book a call
            </button>
          </motion.div>
        </motion.div>
      </Wrapper>

      {/* Book a Call Modal */}
      {showCallModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 overflow-y-auto"
          onClick={() => setShowCallModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl my-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Book a Call
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Tell us a little about yourself and we'll get in touch to
                schedule a call.
              </p>
            </div>

            {/* Form */}
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setShowCallModal(false);
              }}
            >
              {/* Full Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Company Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company Email
                </label>

                <input
                  type="email"
                  name="companyEmail"
                  placeholder="Enter your company email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Preferred Date
                </label>

                <input
                  type="date"
                  name="preferredDate"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Preferred Time
                </label>

                <input
                  type="time"
                  name="preferredTime"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us what you would like to discuss"
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-500 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors"
              >
                Book a Call
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ModernizeSection;

