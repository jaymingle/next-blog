import Link from "next/link"
import Image from "next/image"

export default function Login() {
    return (
        <main style={{ padding: "2rem 1rem" }}>
            <div className="auth-container">
                <h1 className="auth-title">Log In</h1>

                <form className="form">
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
                        <input type="password" id="password" className="form-input" placeholder="Your password" />
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <Link href="#" style={{ color: "var(--primary)" }}>
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                        Log In
                    </button>
                </form>

                <div className="auth-divider">
                    <span className="auth-divider-text">OR</span>
                </div>

                <button className="social-btn">
                    <Image src="/placeholder.svg?height=24&width=24&text=G" alt="Google" width={24} height={24} />
                    Continue with Google
                </button>

                <p style={{ textAlign: "center", marginTop: "2rem" }}>
                    Don't have an account?{" "}
                    <Link href="/signup" style={{ color: "var(--primary)" }}>
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    )
}
