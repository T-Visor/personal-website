'use client'
import { Alert, AlertDescription } from "@/components/ui/alert"

const ContactPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <Alert>
            <AlertDescription>
                <div className="text-lg space-y-2">
                    <p>Email: contact@example.com</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yourusername" className="text-blue-400 hover:underline">LinkedIn Profile</a></p>
                    <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-400 hover:underline">GitHub Profile</a></p>
                    <p>Instagram: @yourphotography</p>
                </div>
            </AlertDescription>
        </Alert>
    </div>
)

export default ContactPage;