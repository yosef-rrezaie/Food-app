import MenuPage from "@/components/templates/MenuPage";

export default function Menu({ data }) {
  return <MenuPage data={data} />;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10
  };
}
