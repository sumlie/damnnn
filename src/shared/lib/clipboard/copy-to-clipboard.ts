import { writeText } from "@tauri-apps/plugin-clipboard-manager";

export async function copyToClipboard(
  text: string,
): Promise<boolean> {
  if (!text) return false;

  try {
    await writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy text:", error);
    return false;
  }
}
