import ProjectDescription from "./ProjectDescription";
const page = async ({ params }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${params?.id}`,
    {
      cache: "no-cache",
    }
  );
  const result = await data.json();
  return (
    <div className="my-10 lg:my-20">
      <ProjectDescription result={result} />
    </div>
  );
};

export default page;
