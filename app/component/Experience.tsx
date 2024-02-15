import exp from "constants";

interface Experience {
    company: string;
    position: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
}

const experiences: Experience[] = [
    {
        company: 'NCS Group',
        position: 'Software Engineer',
        role: 'Software Engineer',
        startDate: 'September 2022',
        endDate: 'Current',
        description: 'Led the development of large-scale, distributed microservices with Spring Boot, Spring Batch, Python, and AWS services. Expertise in frontend applications using React, Next.js, Keycloak, and Ant Design. Proficient in test-driven development, CI/CD processes with GitLab, Bamboo, Bitbucket, and container orchestration using Kubernetes. Engaged in the agile product lifecycle, collaborating with stakeholders for business and system requirements.',
    },
    {
        company: 'iFAST Capital',
        position: 'Software Engineer Intern',
        role: 'Software Engineer Intern',
        startDate: 'March 2021',
        endDate: 'August 2021',
        description: 'Orchestrated full-stack development using Java Spring, Spring Boot, and Angular 8, overseeing the creation and maintenance of online portals and enterprise web applications. Engaged in system testing, debugging, design reviews, and code evaluations, providing creative technical solutions and transforming user requirements into elegant web app/system designs.',
    },
    {
        company: 'I Parts Marketing Sdn. Bhd.',
        position: 'Freelance Software Engineer',
        role: 'Freelance Software Engineer',
        startDate: 'March 2020',
        endDate: 'March 2021',
        description: 'Partnership with iFast company to develop autopart ecommerce application using MERN stack.',
    },
    {
        company: 'TM Dynamics Sdn. Bhd.',
        position: 'Freelance Software Engineer',
        role: 'Freelance Software Engineer',
        startDate: 'October 2019',
        endDate: 'March 2020',
        description: 'Partnership with TM Dynamics company to develop in house application.',
    },
];

export default function Experience() {

    const Experiences = () => (
        experiences.map(experience => (
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{experience.company} <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">{experience.position}</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.startDate} - {experience.endDate}</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
            </li>
        ))
    )

    return (
        <div id="experience-block" className="flex m-5 p-5">

            <h2 className="flex flex-col justify-center items-center flex-1 m-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <div>My Dev <div className="text-blue-600 dark:text-blue-500">Experience</div></div>
            </h2>

            <ol className="flex-1 relative border-s border-gray-200 dark:border-gray-700">
                {<Experiences/>}
            </ol>
        </div>
    );
}