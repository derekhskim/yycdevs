import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { format } from "date-fns";
import React from "react";
const navigation = [
  {
    name: "Pixels YYC",
    href: "https://pixelsyyc.com/",
    icon: GlobeIcon,
  },
  {
    name: "GitHub",
    href: "",
    icon: GitHubLogoIcon,
  },
  {
    name: "Discord",
    href: "https://discord.gg/y5JKKkHYgN",
    icon: DiscordLogoIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {format(new Date(), "yyyy")} Rocket Punch Studios, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
