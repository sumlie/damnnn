import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/ui/tooltip";

export function TitlebarNavigation() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <p className="text-heading text-sm tracking-wide">Damnnn</p>
      </div>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon-sm">
                <ChevronLeftIcon />
              </Button>
            }
          />
          <TooltipContent>Back</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon-sm">
                <ChevronLeftIcon className="rotate-180" />
              </Button>
            }
          />
          <TooltipContent>Forward</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
