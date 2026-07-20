import {
  MinusIcon,
  ArrowsPointingOutIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { getCurrentWindow } from "@tauri-apps/api/window";

import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

export function TitlebarControls() {
  const appWindow = getCurrentWindow();

  const handleMinimalize = () => {
    appWindow.minimize();
  };

  const handleToggleMaximize = () => {
    appWindow.toggleMaximize();
  };

  const handleClose = () => {
    appWindow.close();
  };

  return (
    <div className="relative z-10 flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleMinimalize}
            >
              <MinusIcon />
            </Button>
          }
        />
        <TooltipContent>Minimize</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleToggleMaximize}
            >
              <ArrowsPointingOutIcon className="scale-90" />
            </Button>
          }
        />
        <TooltipContent>Maximize</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleClose}
            >
              <XMarkIcon className="scale-115" />
            </Button>
          }
        />
        <TooltipContent>Close</TooltipContent>
      </Tooltip>
    </div>
  );
}
