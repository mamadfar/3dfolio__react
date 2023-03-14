import {FC} from 'react';
import {ITestimonial} from "../../models/constants.model";
import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion";

interface IFeedbackCardProps extends ITestimonial {
    index: number;
}

const FeedbackCard: FC<IFeedbackCardProps> = ({index, testimonial, name, designation, company, image}) => {
    return (
        <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
                    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
            <p className="text-white font-black text-2xl">"</p>
            <div className="mt-1">
                <p className="text-white tracking-wider text-lg">{testimonial}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium">
                            <span className="blue-text-gradient">@</span> {name}
                        </p>
                        <p className="mt-1 text-secondary text-xs">
                            {designation} of {company}
                        </p>
                    </div>
                    <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover"/>
                </div>
            </div>
        </motion.div>
    );
};

export default FeedbackCard;
