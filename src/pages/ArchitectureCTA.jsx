import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";

const ModernizeSection = () => {
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
            Reach out to our expert consultants who will guide you in choosing the best solutions tailored to your company's unique needs no sales call necessary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-white text-blue-700 cursor-pointer font-bold text-sm px-6 py-3 rounded-[8px] hover:bg-gray-100 transition-colors">
              Book a call
            </button>
          </motion.div>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default ModernizeSection;