import {FC} from 'react';
import {IProject} from "../../models/constants.model";
import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
import {github, link} from "../../assets";
import {fadeIn} from "../../utils/motion";

interface IProjectCardProps extends IProject {
    index: number;
}

const ProjectCard: FC<IProjectCardProps> = ({index, name, description, tags, image, source_code_link, app_link}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                glareMaxOpacity={45}
                transitionSpeed={450}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
            >
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute inset-0 flex m-3 card-img_hover">
                        {source_code_link && (
                            <a className="black-gradient mr-auto w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                               href={source_code_link} target="_blank">
                                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
                            </a>
                        )}
                        {app_link && (
                            <a className="black-gradient ml-auto w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                               href={app_link} target="_blank">
                                <img src={link} alt="link" className="w-1/2 h-1/2 object-contain"/>
                            </a>
                        )}
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-xl">{name}</h3>
                    <p className="mt-2 text-secondary text-sm">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                        <p key={tag.id} className={`text-sm mt-4 ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
