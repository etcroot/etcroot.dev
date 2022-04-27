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
