import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container mx-auto  px-4 bg-black">
        <p>
          Hi, you've made it to Jarrods Blog. I love to keep fit, and busy so this blog is more of a
          way to show off my portfolio, ideas, and a little bit about me.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
