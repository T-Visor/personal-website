'use client'
import { Alert, AlertDescription } from "@/components/ui/alert"

const ContactPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        
        {/* Centering and adjusting the width for desktop */}
        <div className="flex justify-left">
            <div className="w-full sm:w-1/2 lg:w-1/2">
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
        </div>
    </div>
)

export default ContactPage;
