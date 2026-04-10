import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import {
  AuthInput,
  OAuthButton,
  AuthFormContainer,
  AuthDivider,
  AuthLegal,
} from "@/components/AuthForm";

type AuthMode = "signup" | "login";

interface AuthFormData {
  email: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
}

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("signup");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormData>();

  const password = watch("password");

  const onSubmit = (data: AuthFormData) => {
    console.log("Auth form:", { mode, ...data });
    // In a real app, this would call an auth API
    navigate("/");
  };

  const handleOAuth = (provider: "google" | "github") => {
    console.log(`OAuth sign-up with ${provider}`);
    // In a real app, this would redirect to OAuth provider
    navigate("/");
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-inter text-jade mb-2">
              {mode === "signup" ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-gray-600">
              {mode === "signup" ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-jade font-semibold hover:underline"
                  >
                    Log in
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-jade font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </>
              )}
            </p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <OAuthButton provider="google" onClick={() => handleOAuth("google")} />
            <OAuthButton provider="github" onClick={() => handleOAuth("github")} />
          </div>

          {/* Divider */}
          <AuthDivider />

          {/* Form */}
          <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
            {mode === "signup" && (
              <AuthInput
                label="Full Name"
                placeholder="John Doe"
                {...register("fullName", { required: "Full name is required" })}
                error={errors.fullName?.message}
              />
            )}

            <AuthInput
              label="Work Email"
              type="email"
              placeholder="stephanie@mycompany.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
            />

            <AuthInput
              label="Password"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              error={errors.password?.message}
            />

            {mode === "signup" && (
              <AuthInput
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                error={errors.confirmPassword?.message}
              />
            )}

            {/* Legal text */}
            <AuthLegal />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-jade text-white font-bold text-lg py-3 rounded-lg hover:bg-jade/90 transition-colors"
            >
              {mode === "signup" ? "Create Account" : "Sign In"}
            </button>
          </AuthFormContainer>

        </div>
      </div>
    </Layout>
  );
}
