"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Container } from "@/components/ui/Container";

const BEHOLD_FEED_ID = "1993DwdeVuDukLXO8xlh";
const BEHOLD_FEED_URL = `https://feeds.behold.so/${BEHOLD_FEED_ID}`;

type BeholdPost = {
  id: string;
  caption?: string;
  prunedCaption?: string;
  permalink: string;
  sizes: {
    small: {
      width: number;
      height: number;
      mediaUrl: string;
    };
  };
};

type BeholdFeed = {
  posts?: BeholdPost[];
};

function postAlt(post: BeholdPost, index: number) {
  const caption = (post.prunedCaption || post.caption || "")
    .replace(/\s+/g, " ")
    .trim();

  return caption
    ? `Food Allergy Certified Instagram post: ${caption.slice(0, 120)}`
    : `Food Allergy Certified Instagram post ${index + 1}`;
}

export function LetsGetSocial() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    let controller: AbortController | undefined;
    let requested = false;

    const loadMobileFeed = async () => {
      if (!mobileQuery.matches || requested) return;

      requested = true;
      controller = new AbortController();

      try {
        const response = await fetch(BEHOLD_FEED_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Behold feed returned ${response.status}`);
        }

        const feed = (await response.json()) as BeholdFeed;
        const nextPosts = feed.posts?.slice(0, 4) ?? [];

        if (nextPosts.length < 4) {
          throw new Error("Behold feed returned fewer than four posts");
        }

        setPosts(nextPosts);
        setStatus("ready");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
        setStatus("error");
      }
    };

    void loadMobileFeed();
    mobileQuery.addEventListener("change", loadMobileFeed);

    return () => {
      mobileQuery.removeEventListener("change", loadMobileFeed);
      controller?.abort();
    };
  }, []);

  return (
    <section className="pb-[34px] pt-6 sm:pb-20 sm:pt-4">
      <Container>
        <h2 className="text-center font-serif text-[24px] font-bold text-ink sm:text-[34px]">
          Let&rsquo;s get social
        </h2>

        <div
          data-testid="mobile-social-grid"
          aria-busy={status === "loading"}
          className="mx-auto mt-[17px] grid max-w-[304px] grid-cols-2 gap-[18px] sm:hidden"
        >
          {Array.from({ length: 4 }, (_, index) => {
            const post = posts[index];

            if (!post) {
              return (
                <div
                  key={`social-placeholder-${index}`}
                  aria-hidden="true"
                  className="aspect-[4/5] bg-black/10"
                />
              );
            }

            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open Instagram post ${index + 1}`}
                className="relative block aspect-[4/5] overflow-hidden focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              >
                <Image
                  src={post.sizes.small.mediaUrl}
                  alt={postAlt(post, index)}
                  fill
                  unoptimized
                  sizes="(max-width: 639px) 143px"
                  className="object-cover"
                />
              </a>
            );
          })}
        </div>

        {status === "error" && (
          <p className="sr-only" role="status">
            The social feed is temporarily unavailable.
          </p>
        )}

        <div className="mt-10 hidden sm:block">
          <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
        </div>
      </Container>

      <Script
        id="behold-widget-script"
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="afterInteractive"
      />
    </section>
  );
}
