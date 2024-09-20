'use client'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bold } from "lucide-react";

type ContactEntry = {
    id: number;
    label: string;
    rawURL: string;
    anchorText: string;
}

const contactListItems: ContactInfo[] = [
    {
        id: 1,
        label: "Email:",
        rawURL: "mailto:turkimbro@gmail.com",
        anchorText: "turkimbro@gmail.com"
    },
    {
        id: 2,
        label: "LinkedIn:",
        rawURL: "https://linkedin.com/in/turhan-kim",
        anchorText: "LinkedIn Profile"
    },
    {
        id: 3,
        label: "IEEE:",
        rawURL: "https://ieeexplore.ieee.org/author/37089429839",
        anchorText: "IEEE Profile"
    },
    {
        id: 4,
        label: "GitHub:",
        rawURL: "https://github.com/T-Visor",
        anchorText: "GitHub Profile"
    },
    {
        id: 5,
        label: "EyeEm:",
        rawURL: "https://www.eyeem.com/u/turkimbro/photos",
        anchorText: "EyeEm Profile"
    },
]


const ContactPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        
        {/* Centering and adjusting the width for desktop */}
        <div className="flex justify-left">
            <div className="w-full sm:w-1/2 lg:w-1/2">
                <Alert>
                    <AlertDescription>
                        <div className="text-lg space-y-2">
                            <p><strong>Email: </strong>  
                                <a href="mailto:turkimbro@gmail.com" target="_blank" className="text-blue-400 hover:underline">
                                    turkimbro@gmail.com
                                </a>
                            </p>
                            <p><strong>LinkedIn: </strong> 
                                <a href="https://linkedin.com/in/turhan-kim" target="_blank" className="text-blue-400 hover:underline">
                                    LinkedIn Profile
                                </a>
                            </p>
                            <p><strong>IEEE: </strong> 
                                <a href="https://ieeexplore.ieee.org/author/37089429839" target="_blank" className="text-blue-400 hover:underline">
                                    IEEE Xplore Profile
                                </a>
                            </p>
                            <p><strong>GitHub: </strong> 
                                <a href="https://github.com/T-Visor" target="_blank" className="text-blue-400 hover:underline">
                                    GitHub Profile
                                </a>
                            </p>
                            <p><strong>EyeEm: </strong> 
                                <a href="https://www.eyeem.com/u/turkimbro/photos" target="_blank" className="text-blue-400 hover:underline">
                                    EyeEm Profile
                                </a>
                            </p>
                        </div>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    </div>
)

export default ContactPage;
