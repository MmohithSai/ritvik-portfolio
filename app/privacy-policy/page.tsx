import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return <LegalPage title={legal.privacy.title} updated={legal.privacy.updated} sections={legal.privacy.sections} />;
}
