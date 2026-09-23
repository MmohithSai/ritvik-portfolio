import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal } from "@/content/site";

export const metadata: Metadata = { title: "Legal Notice" };

export default function LegalNoticePage() {
  return <LegalPage title={legal.notice.title} sections={legal.notice.sections} />;
}
