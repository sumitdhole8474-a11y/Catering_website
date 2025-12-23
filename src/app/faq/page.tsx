import FAQsection from "@/components/FAQsection";
import { FAQ_DATA } from "@/faqdata";

export default function FAQPage() {
  return (
    <>
      {/* ✅ GOOGLE FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.flatMap((cat) =>
              cat.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              }))
            ),
          }),
        }}
      />

      <FAQsection />
    </>
  );
}
