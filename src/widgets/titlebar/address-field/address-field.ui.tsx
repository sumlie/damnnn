import { useState } from "react";

import { Input } from "@/shared/ui/input";

import {
  AddressFieldCopyButton,
  AddressFieldOpenButton,
  AddressFieldSecurity,
} from "./";

export function TitlebarAddressField() {
  const [url, setUrl] = useState("https://soundcloud.com");

  return (
    <div className="relative h-7 w-1/2">
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        className="text-muted-foreground focus:text-foreground h-full w-full pr-14 pl-7 font-sans"
      />
      <AddressFieldSecurity />
      <div className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center gap-1">
        <AddressFieldCopyButton value={url} />

        <AddressFieldOpenButton value={url} />
      </div>
    </div>
  );
}
