import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <ContactSection />
      <Footer />
    </div>
  );
}
