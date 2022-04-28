/* eslint-disable react/no-string-refs */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";

export default function Support() {
  return (
    <Layout>
      <h2 className="title-xl">Wish to support me?</h2>
      <p className="md:max-w-2xl">
        I appreciate any type of support, wether it's sharing my page or
        contributing in any shape or form, down below I've put some of my
        economy based contribution options. These funds will go directly towards
        paying my rent, improving services & offering more quality content.
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-left">
          <label className="form-label">ETH</label>
          <input
            value="0x26046d34ef7879a706b48f28b2d75118604591ca"
            className="select-all"
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Alternatively, you could{" "}
            <a
              className="high-link"
              href="https://www.buymeacoffee.com/etcroot"
              target="_blank"
              rel="noreferrer nofollow"
            >
              buy me a coffee
            </a>{" "}
            ☕
          </p>
          <a
            className="mt-3 bg-gradient-to-r from-purple-500 to-blue-500 uppercase font-bold text-sm w-max place-self-center text-black rounded px-2 py-1 hover:scale-110 transition-all duration-75 ease-in"
            href="https://twitter.com/intent/tweet?text=Check%20out%20this%20site:%20https://etcroot.dev%20✨"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Share on Twitter
          </a>
        </div>
      </div>
    </Layout>
  );
}
