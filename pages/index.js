import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h2 className="title-xl">etcroot.dev</h2>
      <h5 className="subtitle sm:max-w-xl">
        Full stack web developer, linux sys admin, photographer, designer & tech
        enthusiast.
      </h5>
      <i className="alert">in developement</i>
      <p>
        This site is{" "}
        <Link href="https://github.com/etcroot/etcroot.dev">
          <a
            className="alert !lowercase !text-base"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Open Source
          </a>
        </Link>
      </p>
    </Layout>
  );
}
