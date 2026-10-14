
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  Eye,
  EyeOff,
  Mail,
  LoaderCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/auth";

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

/* ---------- Progress indicator ---------- */
const Progress = ({ step }) => (
  <div className="flex items-center gap-2">
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        step > 1 ? "bg-emerald-500" : "hidden"
      }`}
    />

    <span
      className="h-1.5 w-5 rounded-full"
      style={{ background: BLUE }}
    />

    {[2, 3].map((n) =>
      n > step ? (
        <span
          key={n}
          className="h-1.5 w-1.5 rounded-full bg-gray-200"
        />
      ) : null
    )}

    <span className="ml-1 text-[11px] text-gray-400">
      {step}/3
    </span>
  </div>
);

/* ---------- Google icon ---------- */
const GoogleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"
    />
    <path
      fill="#FBBC05"
      d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.3 0 11.6-2.1 15.5-5.7l-7.5-5.8c-2.1 1.4-4.8 2.3-8 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
    />
  </svg>
);

/* ---------- Step 1: Create account ---------- */
const StepAccount = ({ data, setData, onNext, clearError }) => {
  const [showPw, setShowPw] = useState(false);

  const valid =
    data.fullName.trim().length >= 2 &&
    /\S+@\S+\.\S+/.test(data.email.trim()) &&
    data.password.length >= 8;

  const submit = (e) => {
    e.preventDefault();

    if (valid) {
      clearError();
      onNext();
    }
  };

  return (
    <form onSubmit={submit}>
      <Progress step={1} />

      <h2 className="text-xl font-extrabold text-[#111320]">
        Create your account
      </h2>

      <p className="mt-1.5 text-xs text-[#6B7194]">
        Set up your Cephas Suite workspace in 3 quick steps.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Full name
          </label>

          <input
            required
            minLength={2}
            autoComplete="name"
            className={inputClass}
            placeholder="Adaeze Okonkwo"
            value={data.fullName}
            onChange={(e) =>
              setData({ ...data, fullName: e.target.value })
            }
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Work email
          </label>

          <input
            required
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Password
          </label>

          <div className="relative">
            <input
              required
              minLength={8}
              maxLength={128}
              autoComplete="new-password"
              type={showPw ? "text" : "password"}
              className={`${inputClass} pr-11`}
              placeholder="Create a strong password"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
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

      <button
        type="submit"
        disabled={!valid}
        className={`${primaryBtn} mt-6`}
      >
        Continue <ArrowRight size={14} />
      </button>

      <p className="mx-auto mt-4 max-w-[260px] text-center text-[10px] leading-relaxed text-gray-500">
        By continuing you agree to our{" "}
        <a href="/terms" className="text-[#4F5FE8]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-[#4F5FE8]">
          Privacy Policy
        </a>
        .
      </p>

      <div className="my-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-100" />
        <span className="text-[10px] text-gray-400">
          or continue with google
        </span>
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
        <Link
          to="/sign-in"
          className="font-semibold text-[#4F5FE8]"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

/* ---------- Step 2: About your organisation ---------- */
const StepOrg = ({ data, setData, onBack, onNext, clearError }) => {
  const valid =
    data.orgName.trim().length > 0 &&
    data.industry &&
    data.teamSize;

  const submit = (e) => {
    e.preventDefault();

    if (valid) {
      clearError();
      onNext();
    }
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

      <h2 className="mt-6 text-xl font-extrabold text-[#111320]">
        About your organisation
      </h2>

      <p className="mt-1.5 max-w-[240px] text-xs text-[#6B7194]">
        We use this to recommend the right modules for your team.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Organisation name
          </label>

          <input
            required
            className={inputClass}
            placeholder="Zenith Technologies Ltd"
            value={data.orgName}
            onChange={(e) =>
              setData({ ...data, orgName: e.target.value })
            }
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Industry
          </label>

          <div className="relative">
            <select
              required
              value={data.industry}
              onChange={(e) =>
                setData({ ...data, industry: e.target.value })
              }
              className={`${inputClass} cursor-pointer appearance-none pr-10 ${
                data.industry ? "" : "text-gray-400"
              }`}
            >
              <option value="" disabled>
                Select your industry
              </option>

              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#111320]">
            Team size
          </label>

          <div className="space-y-2">
            {teamSizes.map((size) => {
              const active = data.teamSize === size;

              return (
                <label
                  key={size}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border bg-white px-4 py-3 text-xs text-[#111320] transition ${
                    active
                      ? "border-[#4F5FE8] bg-[#4F5FE8]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    required
                    type="radio"
                    name="teamSize"
                    value={size}
                    checked={active}
                    onChange={() =>
                      setData({ ...data, teamSize: size })
                    }
                    className="h-3.5 w-3.5 cursor-pointer accent-[#4F5FE8]"
                  />

                  {size}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!valid}
        className={`${primaryBtn} mt-6`}
      >
        Continue <ArrowRight size={14} />
      </button>
    </form>
  );
};

/* ---------- Step 3: Account creation modal ---------- */
const VerifyModal = ({
  email,
  loading,
  error,
  onClose,
  onSubmit,
}) => {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#111320]/40 px-4 backdrop-blur-[2px]"
      onClick={loading ? undefined : onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-modal-title"
        className="w-full max-w-[350px] rounded-2xl bg-white p-8 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F5FE8]/10 text-[#4F5FE8]">
          <Mail size={18} />
        </div>

        <h2
          id="signup-modal-title"
          className="mt-6 text-xl font-extrabold text-[#111320]"
        >
          Create your account
        </h2>

        <p className="mt-2 text-xs leading-relaxed text-[#6B7194]">
          Your account will be created using{" "}
          <span className="font-semibold">{email}</span>.
          Email verification is not enabled yet.
        </p>

        {error && (
          <div
            role="alert"
            className="mt-5 rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-left text-xs leading-relaxed text-red-600"
          >
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className={`${primaryBtn} mt-6`}
        >
          {loading ? (
            <>
              <LoaderCircle size={16} className="animate-spin" />
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="mt-4 cursor-pointer text-xs font-medium text-gray-500 hover:text-[#111320] disabled:opacity-50"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

/* ---------- Page ---------- */
const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [showVerify, setShowVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    orgName: "",
    industry: "",
    teamSize: "",
  });

  const handleRegister = async () => {
    if (loading) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await registerUser({
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        password: data.password,
      });

      setSuccess(
        result.message || "Your account has been created successfully."
      );

      setShowVerify(false);

      // Organisation details are collected by this UI but are not
      // persisted by the current backend registration endpoint.
      // Email verification is also not implemented yet.
      console.log("Registration successful:", result.user);
    } catch (err) {
      const validationMessages = err.details
        ?.map((item) => item.message)
        .filter(Boolean);

      setError(
        validationMessages?.length
          ? validationMessages.join(", ")
          : err.message || "Unable to create your account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FD] pt-[78px]">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[400px] rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(17,19,32,0.06)]">
          {success && (
            <div
              role="status"
              className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
            >
              {success}
              <p className="mt-1 text-xs">
                You can now sign in with your email and password.
              </p>
              <Link
                to="/sign-in"
                className="mt-3 inline-block font-semibold underline"
              >
                Go to sign in
              </Link>
            </div>
          )}

          {error && !showVerify && (
            <div
              role="alert"
              className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          {step === 1 && (
            <StepAccount
              data={data}
              setData={setData}
              onNext={() => setStep(2)}
              clearError={() => {
                setError("");
                setSuccess("");
              }}
            />
          )}

          {step === 2 && (
            <StepOrg
              data={data}
              setData={setData}
              onBack={() => {
                setError("");
                setStep(1);
              }}
              onNext={() => {
                setError("");
                setShowVerify(true);
              }}
              clearError={() => setError("")}
            />
          )}
        </div>
      </main>

      <footer className="border-t border-gray-100 bg-white py-5">
        <div className="flex items-center justify-center gap-6 text-[11px] text-[#6B7194]">
          <a href="/privacy" className="hover:text-[#111320]">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-[#111320]">
            Terms of Service
          </a>
          <a href="/help" className="hover:text-[#111320]">
            Help Center
          </a>
        </div>
      </footer>

      {showVerify && (
        <VerifyModal
          email={data.email}
          loading={loading}
          error={error}
          onClose={() => {
            setShowVerify(false);
            setError("");
          }}
          onSubmit={handleRegister}
        />
      )}
    </div>
  );
};

export default GetStarted;
