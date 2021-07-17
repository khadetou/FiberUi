import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Fiber UI",
  keywords: "Web development programming",
  description: "A ui reproduced in order to master the web design tools",
};

export default Meta;
