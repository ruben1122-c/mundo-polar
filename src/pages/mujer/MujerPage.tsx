import { CollectionPage } from "@/app/components/Storefront";
import { collections } from "@/data/catalog";

export default function MujerPage() {
  return <CollectionPage config={collections.mujer} />;
}
