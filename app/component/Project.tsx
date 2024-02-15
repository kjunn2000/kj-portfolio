import exp from "constants";
import Image from "next/image";

interface Project {
    name: string;
    description: string;
    imageUrl: string;
    skillSet: string[];
}

const projectData: Project[] = [
    {
        name: 'Straper : Online Collaboration Application',
        description: 'Advanced online collaboration app facilitating team communication, project organization through a scrum board, and efficient bug tracking features for enhanced productivity.',
        imageUrl: 'https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/08/software-company-websites-templates-featured-image.jpg',
        skillSet: ["Go", "Reactjs", "PostgreSQL"]
    },
    {
        name: 'NewLiftThriftShop : Online Second Hand Shop',
        description: 'A cloud-commerce app integrates AWS services for high availability, using AWS Beanstalk, S3, RDS. It employs microservices, AWS Lambda, CloudWatch, and X-Ray for monitoring and efficiency.',
        imageUrl: 'https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/08/applauz-software-website-template.jpg',
        skillSet: ["Python", "AWS", "Node.js", "MSSQL"]
    }
]

export default function Project() {

    const Title = () => (
        <h2 className="flex flex-col justify-center items-center flex-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <div>My Software <div className="text-blue-600 dark:text-blue-500">Project</div></div>
        </h2>
    )

    const Projects = () => (
        projectData.map((project, i) => (
            <a key={`project-${i}`} href="#" className="flex rounded-lg shadow hover:bg-gray-800">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" src={project.imageUrl} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <div>
                        {project.skillSet.map(skill => (
                            tag(skill)
                        ))}
                    </div>
                </div>
            </a>
        )
        )
    )

    const tag = (tagName: String) => (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {tagName}
        </span>
    )

    return (
        <div id="project-block" className="flex m-5 p-5 bg-gray-900">
            <div className="flex-1 flex flex-col gap-8 p-5">
                <Projects />
            </div>
            <Title />
        </div>
    );
}