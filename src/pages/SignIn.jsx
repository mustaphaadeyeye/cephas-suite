import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { loginUser } from "../api/auth";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({ id, label, error, action, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
        {action}
      </div>

      <div
        className={`flex items-center gap-3 rounded-xl border bg-white px-4 transition focus-within:ring-4 ${
          error
            ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-100"
            : "border-slate-200 hover:border-slate-300 focus-within:border-[#173FD7] focus-within:ring-[#173FD7]/10"
        }`}
      >
        {children}
      </div>

      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
        >
          <AlertCircle size={14} className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({ ...previous, [name]: value }));
    setError("");
    setFieldErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setFieldErrors({});

    const errors = {};
    const email = formData.email.trim();

    if (!email) {
      errors.email = "Enter your email address.";
    } else if (!EMAIL_PATTERN.test(email)) {
      errors.email = "Enter a valid email address, like you@company.com.";
    }

    if (!formData.password) {
      errors.password = "Enter your password.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      setLoading(true);

      const result = await loginUser({ email, password: formData.password });

      // Save the JWT returned by your backend.
      localStorage.setItem("cephas_token", result.token);

      // Save the authenticated user's basic details.
      localStorage.setItem("cephas_user", JSON.stringify(result.user));

      // Change this path if your main page uses another route.
      navigate("/dashboard", { replace: true });
    } catch (err) {
      if (err.details?.length) {
        const errorsFromServer = {};

        err.details.forEach((item) => {
          errorsFromServer[item.field] = item.message;
        });

        setFieldErrors(errorsFromServer);
      }

      setError(err.message || "Unable to sign in. Check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F6FB] px-4 py-10 sm:px-6">
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#173FD7]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#C7D0E8_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative z-10 w-full max-w-[440px]">
        {/* Brand */}
        <Link
          to="/"
          className="mx-auto mb-7 flex w-fit items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#173FD7]/20"
        >
         
        </Link>

        {/* Card */}
        <div className="rounded-3xl border mt-12 border-slate-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_60px_-12px_rgba(23,63,215,0.14)] sm:p-10">
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]">
              Welcome back
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sign in to continue to your Cephas Suite workspace.
            </p>
          </header>

          {error && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Field id="email" label="Email address" error={fieldErrors.email}>
              <Mail size={18} className="shrink-0 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className="w-full bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </Field>

            <Field
              id="password"
              label="Password"
              error={fieldErrors.password}
              action={
                <Link
                  to="/forgot-password"
                  className="rounded text-xs font-semibold text-[#173FD7] transition hover:text-[#1233B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173FD7]/30"
                >
                  Forgot password?
                </Link>
              }
            >
              <LockKeyhole size={18} className="shrink-0 text-slate-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                aria-invalid={Boolean(fieldErrors.password)}
                aria-describedby={
                  fieldErrors.password ? "password-error" : undefined
                }
                className="w-full bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="-mr-1 shrink-0 rounded-md p-1 text-slate-400 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173FD7]/30"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </Field>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#173FD7] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#173FD7]/25 transition hover:bg-[#1233B8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#173FD7]/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
            New to Cephas Suite?{" "}
            <Link
              to="/get-started"
              className="rounded font-semibold text-[#173FD7] transition hover:text-[#1233B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173FD7]/30"
            >
              Create an account
            </Link>
          </div>
        </div>

       
      </div>
    </main>
  );
}