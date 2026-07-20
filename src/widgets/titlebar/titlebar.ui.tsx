import { TitlebarAddressField } from "./address-field";

import { TitlebarControls, TitlebarNavigation } from "./";

export function Titlebar() {
  return (
    <div className="bg-background text-foreground relative flex h-10 items-center justify-between px-3 select-none">
      <div data-tauri-drag-region className="absolute inset-0" />
      <TitlebarNavigation />
      <TitlebarAddressField />
      <TitlebarControls />
    </div>
  );
}
