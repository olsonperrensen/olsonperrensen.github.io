'use client';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function ContactForm(params: any) {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (!email || !subject) {
            alert("Please fill out all required fields.");
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        let tempEmailDomains = [
            "example.com",
            "temporarymail.com",
            "guerrillamail.com",
            "temp-mail.org",
            "10minutemail.net",
            "dropmail.me",
            "fakemail.net",
            "grr.la",
            "inboxbear.com",
            "mailinator.com",
            "maildrop.cc",
            "temp-mail.org",
            "trashmail.com",
            "tempail.com",
            "dispostable.com",
            "sute.jp",
            "10minutemail.co.uk",
            "givmail.com",
            "inboxalias.com", "example.com",
            "temporarymail.com",
            "guerrillamail.com",
            "temp-mail.org",
            "10minutemail.net",
            "dropmail.me",
            "fakemail.net",
            "grr.la",
            "inboxbear.com",
            "mailinator.com",
            // Additional domains:
            "mailcatch.com",
            "getnada.com",
            "mohmal.com",
            "dispostable.com",
            "throwawaymail.com",
            "yopmail.com",
            "tempail.com",
            "spambox.us",
            "maildrop.cc",
            "trashmail.com",
            "jetable.org",
            "mytrashmail.com",
            "emailfake.com",
            "sharklasers.com",
            "getairmail.com"
        ];
        let domain = email.split('@')[1];
        if (tempEmailDomains.includes(domain)) {
            alert("Temporary or disposable email addresses are not allowed.");
            return;
        }

        // Sanitize input to prevent XSS attacks (optional)
        let sanitizedSubject = subject.replace(/<[^>]*>?/gm, '');

        // Send the form data securely or perform any other necessary actions
        alert('Please send me your inqury via mail directly. Thx!')
        // Reset input fields after submission
        setEmail('');
        setSubject('');
    }
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 id="contact" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Have a question or want to work together? Send me a message.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <form className="grid gap-2" onSubmit={handleSubmit}>
                        <Input id="emailField" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                        <Input placeholder="Subject" type="text" />
                        <Textarea id="subjectField" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Message" />
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </section>)
}