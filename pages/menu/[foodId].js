export default function FoodDetail({ data }) {
  console.log(data);
  return <div>[foodId]</div>;
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: { foodId: food.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/data/${params.foodId}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  console.log(data);

  if (!data || !data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
}
