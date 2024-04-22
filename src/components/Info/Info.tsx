import { Info as InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./../Tooltip";
import InfoContent from "./InfoContent";

const Info = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <InfoIcon className="text-gray-300" />
      </TooltipTrigger>
      <TooltipContent>
        <InfoContent />
      </TooltipContent>
    </Tooltip>
  );
};

export default Info;
