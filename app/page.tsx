import type { Metadata } from "next";
import { HomePage } from "./components/HomePage";
import { JsonLd, buildHomeJsonLd } from "./components/JsonLd";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Finergy Finance | RBI Registered NBFC – Personal & Business Finance",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Finergy Finance | RBI Registered NBFC – Personal & Business Finance",
    description: siteConfig.description,
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildHomeJsonLd()} />
      <HomePage />
    </>
  );
}
