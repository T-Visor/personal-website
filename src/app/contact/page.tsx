'use client'

import { Mail, Linkedin, Github, Image } from "lucide-react"

type ContactListItem = {
  id: number;
  label: string;
  rawURL: string;
  anchorText: string;
}

const contactListItems: ContactListItem[] = [
  {
    id: 1,
    label: "Email",
    rawURL: "mailto:turkimbro@gmail.com",
    anchorText: "turkimbro@gmail.com"
  },
  {
    id: 2,
    label: "LinkedIn",
    rawURL: "https://linkedin.com/in/turhan-kim",
    anchorText: "LinkedIn Profile"
  },
  {
    id: 3,
    label: "GitHub",
    rawURL: "https://github.com/T-Visor",
    anchorText: "GitHub Profile"
  },
  {
    id: 4,
    label: "EyeEm",
    rawURL: "https://www.eyeem.com/u/turkimbro/photos",
    anchorText: "EyeEm Profile"
  }
]

const IconMap: { [key: string]: React.ReactNode } = {
  "Email": <Mail className="h-5 w-5" />,
  "LinkedIn": <Linkedin className="h-5 w-5" />,
  "GitHub": <Github className="h-5 w-5" />,
  "EyeEm": <Image className="h-5 w-5" />
}

const ContactCard: React.FC<{ contactItem: ContactListItem }> = ({ contactItem }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
    <div className="flex items-center gap-3 sm:min-w-32">
      <div className="flex-shrink-0">
        {IconMap[contactItem.label]}
      </div>
      <div>
        <span className="text-lg font-semibold">{contactItem.label}</span>
      </div>
    </div>
    <div>
      <a 
        href={contactItem.rawURL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-lg text-indigo-400 hover:underline transition-opacity break-all sm:break-normal"
      >
        {contactItem.anchorText}
      </a>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <div className="space-y-4">
        {contactListItems.map((item) => (
          <ContactCard key={item.id} contactItem={item} />
        ))}
      </div>
    </div>
  )
}

