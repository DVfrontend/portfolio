'use client'

import data from "@/data/socials.json";
import { useEffect, useState } from "react";
import type { Socials } from "@/types";

export default function SocialsComponent() {
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    setSocials(data);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Социальные сети</h1>
      <ul className="list-disc">
        {socials.map((social) => (
          <li key={social.id}>
            <b>{social.name}</b> — {social.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
