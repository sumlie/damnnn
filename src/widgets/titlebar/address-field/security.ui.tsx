"use client";

import {
  ShieldCheckIcon,
  CheckIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { openUrl } from "@tauri-apps/plugin-opener";

import { Button } from "@/shared/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "@/shared/ui/tooltip";

export function AddressFieldSecurity() {
  return (
    <TooltipProvider delay={300}>
      <Tooltip>
        <Popover>
          <PopoverTrigger
            render={
              <TooltipTriggerPrimitive
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute top-1/2 left-1 -translate-y-1/2"
                  >
                    <ShieldCheckIcon className="text-muted-foreground" />
                  </Button>
                }
              />
            }
          />
          <PopoverContent
            className="w-80 p-4"
            align="start"
            side="bottom"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">Security</h3>
                <p className="text-muted-foreground mt-1 text-xs">
                  Your data stays private while using the application.
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  <span>Uses official SoundCloud authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  <span>Credentials are never stored locally</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  <span>No analytics or tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  <span>Open-source application</span>
                </li>
              </ul>
              <Button
                onClick={() =>
                  openUrl("https://github.com/sumlie/damnnn")
                }
                variant="link"
                size="sm-compact"
              >
                Learn more
                <ArrowTopRightOnSquareIcon className="size-4" />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <TooltipContent>Security</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
