import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import exp from "constants";
import { ReactComponentElement, ReactElement } from "react";

interface ContactPlatform {
    name: String;
    icon: ReactElement;
    redirectUrl: string;
    value: String;
}

const contactData: ContactPlatform[] = [
    {
        name: "phone",
        icon: <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />,
        redirectUrl: "#",
        value: "(+65) 8354 1578"
    },
    {
        name: "mail",
        icon: <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />,
        redirectUrl: "mailto:kjunn2000@gmail.com?subject=Job_Opportunity&body=Description",
        value: "kjunn2000@gmail.com"
    },
    {
        name: "github",
        icon: <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />,
        redirectUrl: "https://github.com/kjunn2000",
        value: "kjunn2000"
    },
    {
        name: "linkedin",
        icon: <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />,
        redirectUrl: "https://www.linkedin.com/in/tamkaijun ",
        value: "tamkaijun"
    },
]


export default function Footer() {


    return (

        <footer id="footer">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Kai Jun Tam. All Rights Reserved.
                    </span>
                    <div className="flex flex-col gap-4 mt-4 sm:justify-center sm:mt-0">
                        {
                            contactData.map((contact, i) => (
                                <div key={`contact-${i}`}>
                                    <a href={contact.redirectUrl} target="_blank" className="flex gap-4 text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                        {contact.icon}
                                        <span className="sr-only">{contact.name}</span>
                                        <span>{contact.value}</span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>

    );
}