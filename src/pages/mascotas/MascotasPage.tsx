import { CollectionPage } from "@/app/components/Storefront";
import { collections } from "@/data/catalog";

export default function MascotasPage() {
  return <CollectionPage config={collections.mascotas} />;
}
