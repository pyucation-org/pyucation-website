"use client";

// components/SubscribeEmbed.tsx
export default function SubscribeEmbed() {
    return (
      <div className="w-full max-w-md text-center space-y-8">
        <h2 className="text-2xl font-semibold text-white tracking-wide">
            Abonnieren Sie unseren kostenlosen Newsletter
        </h2>
        <iframe
          src="https://pyucation.substack.com/embed"
          className="w-full rounded-lg border"
          style={{ height: 320, background: "white" }}
          frameBorder="0"
          scrolling="no"
          loading="lazy"
          title="Abonnieren Sie pyucation auf Substack"
        />
      </div>
    );
  }
  
