import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";

import { copyToClipboard } from "@/shared/lib/clipboard";
import { useCopyFeedback } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/ui/tooltip";

export function AddressFieldCopyButton({ value }: { value: string }) {
  const { copied, notifyCopied } = useCopyFeedback(1200);

  const handleCopy = async () => {
    if (!value) return;

    const success = await copyToClipboard(value);

    if (success) {
      notifyCopied();
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon-sm" onClick={handleCopy}>
            {copied ? (
              <CheckIcon className="text-primary scale-95" />
            ) : (
              <ClipboardIcon className="text-muted-foreground scale-95" />
            )}
          </Button>
        }
      />
      <TooltipContent>{copied ? "Copied!" : "Copy"}</TooltipContent>
    </Tooltip>
  );
}
