import { useRouter } from "next/router";
import Image from "next/image";

// export async function getServerSideProps({params}: any) {
//   const { name } = params;
//   return {
//     props: {
//       name,
//     },
//   };
// }

export default function GreetPage(props: any) {
  const { query } = useRouter();
  console.log(query);

  return (
    <>
      <h1>Hello, {query.name}!</h1>
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        width={500}
        height={200}
        alt="A beautiful English Setter"
        layout="responsive"
      />
    </>
  );
}
