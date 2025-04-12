import Link from "next/link"
import Image from "next/image"

export default function Signup() {
    return (
        <main style={{ padding: "2rem 1rem" }}>
            <div className="auth-container">
                <h1 className="auth-title">Create an Account</h1>

                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input type="text" id="name" className="form-input" placeholder="Your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="email" id="email" className="form-input" placeholder="Your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" id="password" className="form-input" placeholder="Create a password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password" className="form-label">
                            Confirm Password
                        </label>
                        <input type="password" id="confirm-password" className="form-input" placeholder="Confirm your password" />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            I agree to the{" "}
                            <Link href="#" style={{ color: "var(--primary)" }}>
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" style={{ color: "var(--primary)" }}>
                                Privacy Policy
                            </Link>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                        Sign Up
                    </button>
                </form>

                <div className="auth-divider">
                    <span className="auth-divider-text">OR</span>
                </div>

                <button className="social-btn">
                    <Image src="/placeholder.svg?height=24&width=24&text=G" alt="Google" width={24} height={24} />
                    Sign up with Google
                </button>

                <p style={{ textAlign: "center", marginTop: "2rem" }}>
                    Already have an account?{" "}
                    <Link href="/login" style={{ color: "var(--primary)" }}>
                        Log in
                    </Link>
                </p>
            </div>
        </main>
    )
}
