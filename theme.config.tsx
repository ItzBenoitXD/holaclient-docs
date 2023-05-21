import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        alt="logo"
        src={"https://media.discordapp.net/attachments/1082632266506850344/1108449684709703770/image.png?width=46&height=46"}
        width={46}
        height={46}
      />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/ItzBenoitXD" target="_blank">
          Made with ❤ by amogus#6200
        </a>
        .
      </span>
    )
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  chat: {
    link: "https://discord.gg/CvqRH9TrYK",
  },
  primaryHue: 102,
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: "HolaClient - %s",
    };
  },
  docsRepositoryBase:
    "https://github.com/ItzBenoitXD/holaclient-docs/blob/main/",
  banner: {
    key: 'prerelease',
	dismissible: false,
    text: (
      <a href="http://freebox.itzbenoitxd.ml:49152" target="_blank">
        ⚠ If you are a normal visitor, please contact amogus#6200 on Discord or on email: itzbenoitxd@protonmail.com
      </a>
    )
  },
};

export default config;