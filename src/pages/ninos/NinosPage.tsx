import { CollectionPage } from "@/app/components/Storefront";
import { collections } from "@/data/catalog";

export default function NinosPage() {
  return <CollectionPage config={collections.ninos} />;
}
