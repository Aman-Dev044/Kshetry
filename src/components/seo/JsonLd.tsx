/** Emits one JSON-LD graph as a script tag. Server-rendered, no hydration cost. */
export default function JsonLd({ json }: { json: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
