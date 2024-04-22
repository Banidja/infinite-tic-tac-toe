import { Info as InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./../Tooltip";
import InfoContent from "./InfoContent";

const Info = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon className="text-gray-300" />
        </TooltipTrigger>
        <TooltipContent>
          <InfoContent />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Info;
