import Link from "next/link";
import React from "react";
interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
    return (
        <>
            <div className="bg-black text-white p-2">
                <ul className="flex gap-4 ">
                <li>
                        <Link href="/dashbord">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashbord/about">About</Link>
                    </li>
                    <li>
                        <Link href="/post">Post</Link>
                    </li>
                </ul>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default DashboardLayout;