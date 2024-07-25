import Header from "@/components/header"
import Link from "next/link"
const Error = () => {
    return (
        <>
            <Header />
            <main className="grid w-full h-[90vh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center text-white">
                    <p className="text-base font-semibold ">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 ">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
                        >
                            Go back home
                        </Link>
                        <a href="/contact" className="text-sm font-semibold text-gray-100">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Error