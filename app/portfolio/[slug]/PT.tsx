"use client";
import { PortableText } from "@portabletext/react";

export default function PT({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <PortableText value={value} />
    </div>
  );
}
