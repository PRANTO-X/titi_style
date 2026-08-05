import type { SVGProps } from "react";

function SocialBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SocialBase {...props}>
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.3c0-.8.3-1.4 1.5-1.4h1.3V5.4c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.4-4 4v1H7.5V14H10v7h3.5Z" />
    </SocialBase>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SocialBase {...props}>
      <path d="M12 4.3c2.5 0 2.8 0 3.8.1 1 0 1.5.2 1.9.3.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.3 1.9.1 1 .1 1.3.1 3.8s0 2.8-.1 3.8c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.3-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.2-.8a3.2 3.2 0 0 1-.8-1.2c-.1-.4-.3-.9-.3-1.9-.1-1-.1-1.3-.1-3.8s0-2.8.1-3.8c0-1 .2-1.5.3-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.3 1-.1 1.3-.1 3.8-.1Zm0 1.8c-2.5 0-2.8 0-3.8.1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5-.1 1-.1 1.3-.1 3.8s0 2.8.1 3.8c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3 1 .1 1.3.1 3.8.1s2.8 0 3.8-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5.1-1 .1-1.3.1-3.8s0-2.8-.1-3.8c0-.8-.2-1.2-.3-1.5-.1-.4-.3-.6-.6-.9a2.4 2.4 0 0 0-.9-.6c-.3-.1-.7-.3-1.5-.3-1-.1-1.3-.1-3.8-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-3.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </SocialBase>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SocialBase {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.7-1.8C18.3 5 12 5 12 5s-6.3 0-7.9.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.7 1.8c1.6.4 7.9.4 7.9.4s6.3 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </SocialBase>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SocialBase {...props}>
      <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L2 3h6.4l4.4 5.9L17.8 3Zm-1.1 16.1h1.7L7.3 4.8H5.5l11.2 14.3Z" />
    </SocialBase>
  );
}
