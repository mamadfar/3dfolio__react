import React, {FC} from 'react';
import {IExperience} from "../../models/constants.model";
import {VerticalTimelineElement} from "react-vertical-timeline-component";

interface IExperienceCardProps {
    experience: IExperience
}

const ExperienceCard: FC<IExperienceCardProps> = ({experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{background: "#1d1836", color: "#fff"}}
            contentArrowStyle={{borderRight: "7px solid #232631"}} date={experience.date}
            iconStyle={{background: experience.iconBg}}
            icon={(
                <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon} alt={experience.company_name}
                         className="w-[60%] h-[60%] object-contain"/>
                </div>
            )}
        >
            <div>
                <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
                <p className="text-secondary font-semibold !m-0">{experience.company_name}</p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white-100 text-sm pl-1 tracking-wider">{point}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
