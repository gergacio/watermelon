// biome-ignore assist/source/organizeImports: imports are organized by purpose
import { stackServerApp } from "@/stack/server";
import WikiEditor from "@/components/wiki-editor";

export default async function NewArticlePage() {
  await stackServerApp.getUser({ or: "redirect" });
  return <WikiEditor isEditing={false} />;
}
