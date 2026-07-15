import {
  ShieldCheckIcon,
  ClipboardIcon,
  CheckIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { openUrl } from "@tauri-apps/plugin-opener";

import { copyToClipboard } from "@/shared/lib/clipboard";
import { useCopyFeedback } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

export function TitlebarAddressField() {
  const [url, setUrl] = useState("https://soundcloud.com");
  const inputRef = useRef<HTMLInputElement>(null);

  const { copied, notifyCopied } = useCopyFeedback(1200);

  const handleCopy = async () => {
    const value = inputRef.current?.value;
    if (!value) return;

    const success = await copyToClipboard(value);

    if (success) {
      notifyCopied();
    }
  };

  const handleOpenInBrowser = async () => {
    const value = inputRef.current?.value;
    if (!value) return;

    try {
      await openUrl(value);
    } catch (error) {
      console.error("Failed to open URL:", error);
    }
  };

  return (
    <div className="relative h-7 w-1/2">
      <Input
        ref={inputRef}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        className="text-muted-foreground focus:text-foreground h-full w-full pr-14 pl-7 font-sans"
      />

      <Button
        variant="ghost"
        size="icon-sm"
        className="absolute top-1/2 left-1 -translate-y-1/2"
      >
        <ShieldCheckIcon className="text-muted-foreground" />
      </Button>

      <div className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center gap-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopy}
              >
                {copied ? (
                  <CheckIcon className="text-primary scale-95" />
                ) : (
                  <ClipboardIcon className="text-muted-foreground scale-95" />
                )}
              </Button>
            }
          />
          <TooltipContent>
            {copied ? "Copied!" : "Copy"}
          </TooltipContent>
        </Tooltip>

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
      </div>
    </div>
  );
}
