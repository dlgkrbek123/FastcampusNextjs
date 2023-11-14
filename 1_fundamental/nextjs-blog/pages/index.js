export default function Home({ time }) {
  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  };
}
