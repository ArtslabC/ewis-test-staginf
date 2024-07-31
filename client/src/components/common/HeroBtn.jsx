import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const HeroBtn = ({ link, text = "Explore More", theme = "default" }) => {
  return (
    <a
      href={link}
      className={`group w-fit transition-transform   py-1 px-6 font-Rubik text-base border-solid border-2 rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-x-2
         ${
           theme == "default"
             ? "bg-black text-white border-black hover:bg-primary hover:border-primary hover:text-white"
             : theme == "primary"
             ? "bg-white text-black border-white hover:border-black hover:bg-black hover:text-white "
             : ""
         }
        `}
    >
      {text}
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
        <ArrowTrendingUpIcon
          className={` h-6 w-6  transition-transform group-hover:translate-x-2 
            ${
              theme == "default"
                ? "text-white group-hover:text-white"
                : theme == "primary"
                ? "text-black group-hover:text-white"
                : ""
            }
            `}
          aria-hidden="true"
        />
      </div>
    </a>
  );
};

export default HeroBtn;
