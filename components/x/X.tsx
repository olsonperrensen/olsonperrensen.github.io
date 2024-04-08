/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/p94FwrOkMNz
 */
import Link from "next/link"
import * as React from "react"
import Image from 'next/image';
import profilePic from "@/public/my-image.jpg"
import ContactForm from "../ContactForm";

export function X() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Projects
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Skills
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 border-b">
                    <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-10 md:px-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hi, I&apos;m Max</h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                I build things for the web. I&apos;m a software developer with a passion for computers.
                            </p>
                        </div>
                        <Image
                            alt="Avatar"
                            className="mx-auto rounded-full border border-gray-200 aspect-square overflow dark:border-gray-800"
                            height={200}
                            src={profilePic}
                            width={200}
                        />
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Here are a few projects I&apos;ve been working on. Want to see more? Follow me on GitHub.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <Link
                                    className="inline-flex h-9 items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                                    href="https://github.com/olsonperrensen/"
                                    target="_blank"
                                >
                                    Follow on GitHub
                                </Link>
                            </div>
                            <div className="grid gap-4 md:gap-8">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Sbdinc Forms</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Sales Orders managing portal. Features include invoice scanning, vendor registration,
                                        and a track & trace of Purchase Orders & Good Receipts.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Cats & Dogs Surfing</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        A pet adoption website for animal enthusiasts. It provides a set of functionalities typical of a web shop.
                                        Object Orient Programming was used here. Made with PHP.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">TrainAM</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Vietnamese Train App. TrainAM is a free, beautiful, and high-quality Angular & Django train purchase platform based on the Belgian NMBS app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                I have experience with the following technologies and frameworks.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">JavaScript</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    The most popular programming language for the web.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">React</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A JavaScript library for building user interfaces.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">TypeScript</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A typed superset of JavaScript that compiles to plain JavaScript.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Angular</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A TypeScript library for building user interfaces.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Next.js</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">A React framework for production.</p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">.NET</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A multipurpose framework developed by Microsoft for rapid development.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactForm />
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Iturria. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/mxi-dev/overlay/1711815166798/single-media-viewer/">
                        Curriculum Vitae
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/mxi-dev/">
                        LinkedIn
                    </Link>
                </nav>
            </footer>
        </div>
    )
}


function MountainIcon(props: any) {
    return (


        <svg {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" version="1.0"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M0 960 l0 -960 960 0 960 0 0 960 0 960 -960 0 -960 0 0 -960z m960
       478 c-83 -216 -156 -399 -162 -406 -40 -48 -9 51 123 393 168 434 167 431 181
       417 7 -7 -39 -137 -142 -404z m-210 248 c0 -8 -66 -67 -147 -131 -82 -64 -147
       -119 -146 -122 1 -2 67 -56 147 -119 125 -99 169 -145 139 -144 -16 1 -328
       253 -328 265 0 12 312 264 328 265 4 0 7 -6 7 -14z m570 -116 c88 -69 159
       -129 159 -135 0 -10 -308 -256 -330 -264 -6 -2 -9 5 -7 15 1 10 66 68 144 128
       77 61 141 115 143 119 1 5 -62 59 -141 121 -79 62 -145 120 -146 130 -2 10 1
       17 7 15 6 -2 83 -60 171 -129z m-891 -1037 c36 -134 66 -241 69 -239 2 3 32
       112 67 243 l62 238 92 3 91 3 0 -316 0 -316 -57 3 -58 3 -3 250 -4 250 -62
       -235 c-34 -129 -65 -243 -69 -253 -6 -15 -16 -17 -64 -15 l-57 3 -65 250 -66
       250 -3 -252 -2 -253 -60 0 -60 0 0 315 0 316 93 -3 92 -3 64 -242z m773 49
       c60 -37 68 -67 68 -255 l0 -166 -47 -8 c-27 -4 -93 -8 -148 -7 -80 0 -108 4
       -139 19 -55 28 -79 64 -79 119 0 93 63 135 206 136 72 0 87 3 87 16 0 67 -97
       91 -218 52 -18 -5 -35 -8 -37 -6 -2 2 2 26 9 53 11 47 15 51 57 62 70 20 198
       11 241 -15z m265 -18 c15 -20 37 -48 48 -61 l20 -25 48 61 47 61 65 0 c36 0
       65 -3 65 -6 0 -3 -34 -50 -75 -103 -41 -54 -75 -103 -75 -108 0 -5 36 -58 80
       -116 44 -59 80 -109 80 -112 0 -3 -31 -5 -69 -5 l-69 0 -48 65 c-26 36 -51 65
       -54 65 -3 0 -28 -29 -55 -65 l-49 -65 -63 0 c-35 0 -63 3 -63 6 0 4 36 56 81
       115 l81 109 -76 102 c-42 57 -76 106 -76 111 0 4 29 7 65 7 62 0 65 -1 92 -36z"/>
                <path d="M996 324 c-44 -44 -1 -84 91 -84 l63 0 0 50 0 50 -69 0 c-50 0 -74
       -4 -85 -16z"/>
            </g>
        </svg>

    )
}