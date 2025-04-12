import Link from "next/link"

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link href="/" className="btn btn-primary">
                Go Home
            </Link>
        </div>
    )
}
