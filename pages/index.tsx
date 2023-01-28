import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Widget from "./components/Widget";

const inter = Inter({ subsets: ["latin"] });

import posts from "../data/posts";

export function getServerSideProps({ params }: any) {
  const postsSlugs = posts.map((post) => post.slug);
  return {
    props: {
      postsSlugs,
    },
  };
}

export default function HomePage(props: any) {
  return (
    <>
      <Head>
        <title> Welcome to my Next.js website </title>
      </Head>
      <div>
        <Link href="/about" passHref>
          About us
        </Link>
      </div>
      <div>
        <Widget pageName="index" />
      </div>
      <div>
        {props.postsSlugs.map((slug: string) => (
          <Link key={slug} href={`/blog/${slug}`} passHref style={{display: "block"}}>
            {slug}
          </Link>
        ))}
      </div>
    </>
  );
}
