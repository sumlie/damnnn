import {
  ShieldCheckIcon,
  ClipboardIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

import { copyToClipboard } from "@/shared/lib/clipboard";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export function TitlebarAddressField() {
  const [url, setUrl] = useState("https://soundcloud.com");
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = async () => {
    if (!inputRef.current) return;

    const success = await copyToClipboard(inputRef.current.value);

    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
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
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handleCopy}
          title={isCopied ? "Copied!" : "Copy URL"}
        >
          <ClipboardIcon className="text-muted-foreground scale-95" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <ArrowUturnRightIcon className="text-muted-foreground scale-95" />
        </Button>
      </div>
    </div>
  );
}
