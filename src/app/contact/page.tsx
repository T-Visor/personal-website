//'use client'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bold } from "lucide-react";

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
  /*{
    id: 3,
    label: "IEEE",
    rawURL: "https://ieeexplore.ieee.org/author/37089429839",
    anchorText: "IEEE Profile"
  },*/
  {
    id: 4,
    label: "GitHub",
    rawURL: "https://github.com/T-Visor",
    anchorText: "GitHub Profile"
  },
  {
    id: 5,
    label: "EyeEm",
    rawURL: "https://www.eyeem.com/u/turkimbro/photos",
    anchorText: "EyeEm Profile"
  }
]

type ContactListItemProps = {
  label: string;
  rawURL: string;
  anchorText: string;
};

const SectionCard: React.FC<ContactListItemProps> = ({ label, rawURL, anchorText }) => (
  <p><strong>{label + ": "} </strong>
    <a href={rawURL} target="_blank" className="text-indigo-400 hover:underline">
      {anchorText}
    </a>
  </p>
);

const ContactPage: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Contact Me</h2>
    <div className="flex justify-left">
      <div className="w-full sm:w-1/2 lg:w-1/2">
        <Alert>
          <AlertDescription>
            <div className="text-lg space-y-2">
              {contactListItems.map((contactListItem) =>
                <SectionCard
                  label={contactListItem.label}
                  rawURL={contactListItem.rawURL}
                  anchorText={contactListItem.anchorText}
                />
              )}
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  </div>
)

export default ContactPage;
