const loadBlogData = async () => {
  const res = await fetch("", {
    cache: "force-cache",
  });
  return res.json();
};
export default loadBlogData;
