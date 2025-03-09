export default function FoodDetail() {
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

