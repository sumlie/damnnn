import {
  ShieldCheckIcon,
  ClipboardIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export function TitlebarAddressField() {
  return (
    <div className="relative h-7 w-1/2">
      <Input
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
        <Button variant="ghost" size="icon-sm">
          <ClipboardIcon className="text-muted-foreground scale-95" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <ArrowUturnRightIcon className="text-muted-foreground scale-95" />
        </Button>
      </div>
    </div>
  );
}
