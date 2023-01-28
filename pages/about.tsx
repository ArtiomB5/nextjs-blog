import Head from "next/head";
import Link from "next/link";
import Widget from "./components/Widget";

export default function HomePage() {
  return (
    <>
      <Head>
        <title> About this Next.js website </title>
      </Head>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <div>
        <Widget pageName="about" />
      </div>
    </>
  );
}
