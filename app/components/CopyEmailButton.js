"use client";

import { useState } from "react";

const EMAIL = "niravsaxena30@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {copied ? "Copied" : "Email me"}
    </button>
  );
}
