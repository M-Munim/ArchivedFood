const PATHS: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.3V14h2.6v7h2.6z" />
  ),
  instagram: (
    <>
      <path d="M12 8.9A3.1 3.1 0 1 0 12 15.1 3.1 3.1 0 0 0 12 8.9zm0 5.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      <path d="M15.4 4.5H8.6A4.1 4.1 0 0 0 4.5 8.6v6.8a4.1 4.1 0 0 0 4.1 4.1h6.8a4.1 4.1 0 0 0 4.1-4.1V8.6a4.1 4.1 0 0 0-4.1-4.1zm3 10.9a3 3 0 0 1-3 3H8.6a3 3 0 0 1-3-3V8.6a3 3 0 0 1 3-3h6.8a3 3 0 0 1 3 3v6.8z" />
      <circle cx="15.6" cy="8.4" r=".8" />
    </>
  ),
  tiktok: (
    <path d="M16.5 5.5c.5 1 1.4 1.8 2.5 2v2.2c-1 0-2-.3-2.9-.8v4.8a4.4 4.4 0 1 1-4.4-4.4c.2 0 .4 0 .6.1v2.3a2.1 2.1 0 1 0 1.5 2V4h2.2c0 .5.1 1 .5 1.5z" />
  ),
  linkedin: (
    <>
      <path d="M7.5 9.5H5V19h2.5V9.5zM6.2 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
      <path d="M14.3 9.3c-1.3 0-2.1.7-2.5 1.4V9.5H9.3V19h2.5v-5c0-1.1.6-1.7 1.4-1.7.8 0 1.3.5 1.3 1.7v5H17v-5.4c0-2.5-1.3-3.6-3.1-3.6z" />
    </>
  ),
};

export function SocialIcon({ icon }: { icon: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-ink" aria-hidden="true">
      {PATHS[icon]}
    </svg>
  );
}
