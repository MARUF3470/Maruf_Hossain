import ProjectDescription from "./ProjectDescription";
const page = async ({ params: { id } }) => {
  const data = await fetch(`http://localhost:3000/api/projects/${id}`, {
    cache: "no-cache",
  });
  const result = await data.json();
  return (
    <div className="my-10 lg:my-20">
      <ProjectDescription result={result} />
    </div>
  );
};

export default page;
