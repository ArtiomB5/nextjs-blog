import { GetServerSideProps } from "next/types";
import posts from "../../data/posts";
import PostHead from "../components/PostHead";

export function getServerSideProps({ params }: any) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);
  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }: any) {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
}
