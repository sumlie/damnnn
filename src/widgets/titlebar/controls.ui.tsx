import {
  MinusIcon,
  ArrowsPointingOutIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { getCurrentWindow } from "@tauri-apps/api/window";

import { Button } from "@/shared/ui/button";

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
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={handleMinimalize}
      >
        <MinusIcon />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={handleToggleMaximize}
      >
        <ArrowsPointingOutIcon className="scale-90" />
      </Button>
      <Button variant="ghost" size="icon-sm" onClick={handleClose}>
        <XMarkIcon className="scale-115" />
      </Button>
    </div>
  );
}
