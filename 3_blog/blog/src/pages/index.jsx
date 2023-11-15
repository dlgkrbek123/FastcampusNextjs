import Head from 'next/head';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <div className="container">
        <main>
          <img src="/images/profile.jpg" alt="hakyu" width={50} />
          <h1>
            Read this Post <Link href="/posts/first-post">엄준식</Link>
          </h1>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
      <style jsx>{`
        .container {
          background: pink;
        }

        h1 {
          color: red;
        }
      `}</style>
    </>
  );
};

export default IndexPage;
