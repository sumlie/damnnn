import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { Button } from "@/shared/ui/button";

export function TitlebarNavigation() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <p className="text-heading text-sm tracking-wide">Damnnn</p>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-sm">
          <ChevronLeftIcon />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <ChevronLeftIcon className="rotate-180" />
        </Button>
      </div>
    </div>
  );
}
