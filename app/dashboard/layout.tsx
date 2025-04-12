import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import DashboardSide from "@/components/DashboardSide";

export const metadata: Metadata = {
    title: "Dashboard | ModernBlog",
    description: "Manage your blog content",
}

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div className="dashboard">
            <DashboardSide/>
            <div className="dashboard-content">{children}</div>
        </div>
    )
}
