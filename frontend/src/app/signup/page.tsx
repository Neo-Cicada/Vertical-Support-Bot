import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: "Create workspace · Vertical",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
