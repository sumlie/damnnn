import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/ui/tooltip";

export function TitlebarNavigation() {
  return (
    <div className="relative z-10 flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1.5 px-2"
            >
              <img src="/logo.svg" width={16} height={16} />
              <p className="text-heading text-sm tracking-wide">
                Damnnn
              </p>
            </Button>
          }
        />
        <TooltipContent>
          Go Home
        </TooltipContent>
      </Tooltip>
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
