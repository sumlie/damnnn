import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import { openUrl } from "@tauri-apps/plugin-opener";

import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/ui/tooltip";

export function AddressFieldOpenButton({
  value,
}: {
  value: string;
}) {
  const handleOpenInBrowser = async () => {
    if (!value) return;

    try {
      await openUrl(value);
    } catch (error) {
      console.error("Failed to open URL:", error);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleOpenInBrowser}
          >
            <ArrowUturnRightIcon className="text-muted-foreground scale-95" />
          </Button>
        }
      />
      <TooltipContent>Open in browser</TooltipContent>
    </Tooltip>
  );
}
