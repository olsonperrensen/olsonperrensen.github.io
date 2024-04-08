/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/p94FwrOkMNz
 */
import Link from "next/link"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hi, I&apos;m John Doe</h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                I build things for the web. I&apos;m a frontend engineer with a passion for UI/UX.
                            </p>
                        </div>
                        <img
                            alt="Avatar"
                            className="mx-auto rounded-full border border-gray-200 aspect-square overflow dark:border-gray-800"
                            height="200"
                            src="/placeholder.svg"
                            width="200"
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
                                    href="#"
                                >
                                    Follow on GitHub
                                </Link>
                            </div>
                            <div className="grid gap-4 md:gap-8">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Next.js Blog Starter with MDX</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Kickstart your blog with this minimal starter. Features include syntax highlighting, component MDX,
                                        and a custom theme.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Tailwind CSS Typography Plugin</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        A highly customizable typography plugin for Tailwind CSS. It provides a set of CSS utility classes
                                        to style your typography.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Shards Vue - A High-Quality Vue.js UI Toolkit</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Shards Vue is a free, beautiful, and high-quality Vue.js UI kit based on Shards.
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
                                <h3 className="text-lg font-bold">Vue.js</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A progressive JavaScript framework for building user interfaces.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Next.js</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">A React framework for production.</p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Tailwind CSS</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    A utility-first CSS framework for rapid UI development.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                    <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Have a question or want to work together? Send me a message.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="grid gap-2">
                                <Input placeholder="Email" type="email" />
                                <Input placeholder="Subject" type="text" />
                                <Textarea placeholder="Message" />
                                <Button type="submit">Send</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}


function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}