import {
  TitlebarControls,
  TitlebarAddressField,
  TitlebarNavigation,
} from "./";

export function Titlebar() {
  return (
    <div className="bg-background text-foreground flex h-10 items-center justify-between px-3 select-none">
      <TitlebarNavigation />
      <TitlebarAddressField />
      <TitlebarControls />
    </div>
  );
}
