import { Info as InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./../Tooltip";
import InfoContent from "./InfoContent";

const Info = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <InfoIcon className="text-gray-300" />
      </TooltipTrigger>
      <TooltipContent
        className="transition-all duration-200"
        side="bottom"
        align="center"
        sideOffset={20}
      >
        <InfoContent />
      </TooltipContent>
    </Tooltip>
  );
};

export default Info;
