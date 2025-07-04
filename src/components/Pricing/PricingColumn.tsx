import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", {
            "shadow-lg": highlight
        })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-lg text-gray-700 mb-6">
                    Get AI-powered carbon footprint reports tailored to your company’s size, industry, and compliance needs.
                </p>
                <button
                    className={clsx(
                        "w-full py-3 px-4 rounded-full transition-colors",
                        {
                            "bg-primary hover:bg-primary-accent text-white": highlight,
                            "bg-hero-background hover:bg-gray-200 text-black": !highlight
                        }
                    )}
                >
                    Request Demo
                </button>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">FEATURES</p>
                <p className="text-foreground-accent mb-5">What you’ll get with this plan:</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingColumn;
