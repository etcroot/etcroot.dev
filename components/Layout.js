import React from "react";
import Head from "next/head";
import Menu from "./Menu";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Head>
        <title>ETCROOT.DEV {props.title ? `| ${props.title}` : ""}</title>
        <meta
          name="description"
          content="Personal landing page for etcroot, mostly socials and ways to contact me."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className="content">
        <section className="content-body">
          {props.children}
          <Menu />
        </section>
      </main>
    </React.Fragment>
  );
}
