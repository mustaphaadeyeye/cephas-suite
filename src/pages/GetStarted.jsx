import React, { useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const BLUE = "#4F5FE8";

const industries = [
  "Technology",
  "Finance & Banking",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail & E-commerce",
  "Logistics",
  "Other",
];

const teamSizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#111320] placeholder:text-gray-400 outline-none transition focus:border-[#4F5FE8] focus:ring-2 focus:ring-[#4F5FE8]/15";

const primaryBtn =
  "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#4F5FE8] py-3 text-sm font-medium text-white transition hover:bg-[#4050d6] disabled:cursor-not-allowed disabled:opacity-60";

/* ---------- Progress indicator (1/3, 2/3) ---------- */
const Progress = ({ step }) => (
  <div className="flex items-center gap-2">
    <span
      className={`h-1.5 w-1.5 rounded-full ${step > 1 ? "bg-emerald-500" : "hidden"}`}
    />
    <span className="h-1.5 w-5 rounded-full" style={{ background: BLUE }} />
    {[2, 3].map((n) =>
      n > step ? (
        <span key={n} className="h-1.5 w-1.5 rounded-full bg-gray-200" />
      ) : null
    )}
    <span className="ml-1 text-[11px] text-gray-400">{step}/3</span>
  </div>
);

/* ---------- Google icon ---------- */
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
    <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.100 0 24s.9 7.600 2.600 10.800l7.900-6.100z" />
    <path fill="#34A853" d="M24 48c6.3 0 11.600-2.100 15.500-5.700l-7.500-5.800c-2.100 1.400-4.800 2.300-8 2.300-6.300 0-11.600-4.100-13.500-9.800l-7.900 6.100C6.500 42.600 14.600 48 24 48z" />
  </svg>
);

/* ---------- Step 1: Create account ---------- */
const StepAccount = ({ data, setData, onNext }) => {
  const [showPw, setShowPw] = useState(false);
  const valid =
    data.fullName.trim() && /\S+@\S+\.\S+/.test(data.email) && data.password.length >= 8;

  const submit = (e) => {
    e.preventDefault();
    if (valid) onNext();
  };

  return (
    <form onSubmit={submit}>
      <Progress step={1} />

      <h2 className="mt-6 text-xl font-extrabold text-[#111320]">Create your account</h2>
      <p className="mt-1.5 text-xs text-[#6B7194]">
        Set up your Cephas Suite workspace in 3 quick steps.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">Full name</label>
          <input
            className={inputClass}
            placeholder="Adaeze Okonkwo"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">Work email</label>
          <input
            type="email"
            className={inputClass}
            placeholder="you@company.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">Password</label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              className={`${inputClass} pr-11`}
              placeholder="Create a strong password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              aria-label={showPw ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
            >
              {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>
      </div>

      <button type="submit" disabled={!valid} className={`${primaryBtn} mt-6`}>
        Continue <ArrowRight size={14} />
      </button>

      <p className="mx-auto mt-4 max-w-[260px] text-center text-[10px] leading-relaxed text-gray-500">
        By continuing you agree to our{" "}
        <a href="/terms" className="text-[#4F5FE8]">Terms of Service</a> and{" "}
        <a href="/privacy" className="text-[#4F5FE8]">Privacy Policy</a>.
      </p>

      <div className="my-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-100" />
        <span className="text-[10px] text-gray-400">or continue with google</span>
        <span className="h-px flex-1 bg-gray-100" />
      </div>

      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-[#111320] transition hover:bg-gray-50"
      >
        <GoogleIcon /> Sign up with Google
      </button>

      <p className="mt-5 text-center text-xs text-gray-500">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-semibold text-[#4F5FE8]">Sign in</Link>
      </p>
    </form>
  );
};

/* ---------- Step 2: About your organisation ---------- */
const StepOrg = ({ data, setData, onBack, onNext }) => {
  const valid = data.orgName.trim() && data.industry && data.teamSize;

  const submit = (e) => {
    e.preventDefault();
    if (valid) onNext();
  };

  return (
    <form onSubmit={submit}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex cursor-pointer items-center gap-1 text-[11px] text-[#4F5674] hover:text-[#111320]"
        >
          <ChevronLeft size={12} /> Back
        </button>
        <Progress step={2} />
      </div>

      <h2 className="mt-6 text-xl font-extrabold text-[#111320]">About your organisation</h2>
      <p className="mt-1.5 max-w-[240px] text-xs text-[#6B7194]">
        We use this to recommend the right modules for your team.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Organisation name
          </label>
          <input
            className={inputClass}
            placeholder="Zenith Technologies Ltd"
            value={data.orgName}
            onChange={(e) => setData({ ...data, orgName: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">Industry</label>
          <div className="relative">
            <select
              value={data.industry}
              onChange={(e) => setData({ ...data, industry: e.target.value })}
              className={`${inputClass} cursor-pointer appearance-none pr-10 ${
                data.industry ? "" : "text-gray-400"
              }`}
            >
              <option value="" disabled>Select your industry</option>
              {industries.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">Team size</label>
          <div className="space-y-2">
            {teamSizes.map((size) => {
              const active = data.teamSize === size;
              return (
                <label
                  key={size}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border bg-white px-4 py-3 text-xs text-[#111320] transition ${
                    active ? "border-[#4F5FE8] bg-[#4F5FE8]/5" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="teamSize"
                    value={size}
                    checked={active}
                    onChange={() => setData({ ...data, teamSize: size })}
                    className="h-3.5 w-3.5 cursor-pointer accent-[#4F5FE8]"
                  />
                  {size}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <button type="submit" disabled={!valid} className={`${primaryBtn} mt-6`}>
        Continue <ArrowRight size={14} />
      </button>
    </form>
  );
};

/* ---------- Step 3: Verify email (modal) ---------- */
const VerifyModal = ({ email, onClose, onVerified }) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const refs = useRef([]);
  const complete = code.every(Boolean);

  const handleChange = (i, val) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[i] = digit;
    setCode(next);
    if (digit && i < 5) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !code[i] && i > 0) refs.current[i - 1]?.focus();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    e.preventDefault();
    const next = Array(6).fill("");
    pasted.split("").forEach((d, i) => (next[i] = d));
    setCode(next);
    refs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const verify = (e) => {
    e.preventDefault();
    if (complete) onVerified(code.join(""));
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#111320]/40 px-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <form
        onSubmit={verify}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[350px] rounded-2xl bg-white p-8 text-center shadow-xl"
      >
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F5FE8]/10 text-[#4F5FE8]">
          <Mail size={18} />
        </div>

        <h2 className="mt-6 text-xl font-extrabold text-[#111320]">Check your email</h2>
        <p className="mt-2 text-xs leading-relaxed text-[#6B7194]">
          We sent a 6-digit verification code to {email || "your email address"}. Enter it
          below to activate your workspace.
        </p>

        <div className="mt-6 flex justify-between gap-2" onPaste={handlePaste}>
          {code.map((d, i) => (
            <input
              key={i}
              ref={(el) => (refs.current[i] = el)}
              value={d}
              inputMode="numeric"
              maxLength={1}
              autoFocus={i === 0}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              aria-label={`Digit ${i + 1}`}
              className="h-11 w-10 rounded-lg border border-gray-200 bg-white text-center text-base font-semibold text-[#111320] outline-none transition focus:border-[#4F5FE8] focus:ring-2 focus:ring-[#4F5FE8]/15"
            />
          ))}
        </div>

        <button type="submit" disabled={!complete} className={`${primaryBtn} mt-6`}>
          Verify &amp; Activate Workspace
        </button>

        <p className="mt-5 text-xs text-gray-500">
          Didn't receive the email?{" "}
          <button type="button" className="cursor-pointer font-semibold text-[#4F5FE8]">
            Resend code
          </button>
        </p>
      </form>
    </div>
  );
};

/* ---------- Page ---------- */
const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [showVerify, setShowVerify] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    orgName: "",
    industry: "",
    teamSize: "",
  });

  const handleVerified = (code) => {
    // TODO: send { ...data, code } to your API, then redirect to the dashboard
    console.log("Verify", { ...data, code });
    setShowVerify(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FD] pt-[78px]">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[400px] rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(17,19,32,0.06)]">
          {step === 1 && (
            <StepAccount data={data} setData={setData} onNext={() => setStep(2)} />
          )}
          {step === 2 && (
            <StepOrg
              data={data}
              setData={setData}
              onBack={() => setStep(1)}
              onNext={() => setShowVerify(true)}
            />
          )}
        </div>
      </main>

      {/* Minimal footer for this page only */}
      <footer className="border-t border-gray-100 bg-white py-5">
        <div className="flex items-center justify-center gap-6 text-[11px] text-[#6B7194]">
          <a href="/privacy" className="hover:text-[#111320]">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#111320]">Terms of Service</a>
          <a href="/help" className="hover:text-[#111320]">Help Center</a>
        </div>
      </footer>

      {showVerify && (
        <VerifyModal
          email={data.email}
          onClose={() => setShowVerify(false)}
          onVerified={handleVerified}
        />
      )}
    </div>
  );
};

export default GetStarted;