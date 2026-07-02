import { CollectionPage } from "@/app/components/Storefront";
import { collections } from "@/data/catalog";

export default function HombrePage() {
  return <CollectionPage config={collections.hombre} />;
}
