import ProjectDescription from "./ProjectDescription";
export const metadata = {
  title: "PROJECT",
};
const page = async ({ params: { id } }) => {
  return (
    <div className="my-10 lg:my-20">
      <ProjectDescription id={id} />
    </div>
  );
};

export default page;
