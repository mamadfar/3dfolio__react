import {FC} from "react";
import {IServices} from "../../models/constants.model";
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion";

interface IServiceCardProps extends IServices {
    index: number,
}

const ServiceCard: FC<IServiceCardProps> = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full" transitionSpeed={450} glareMaxOpacity={45}>
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
};

export default ServiceCard;
