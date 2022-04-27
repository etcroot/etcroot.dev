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
            >
              buy me a coffee
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
