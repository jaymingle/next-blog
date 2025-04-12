"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="error-page">
            <h1>500</h1>
            <h2>Something went wrong!</h2>
            <p>We apologize for the inconvenience. Please try again later.</p>
            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => reset()} className="btn btn-primary">
                    Try again
                </button>
                <Link href="/" className="btn btn-outline">
                    Go Home
                </Link>
            </div>
        </div>
    )
}
