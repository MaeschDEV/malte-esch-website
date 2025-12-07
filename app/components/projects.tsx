import ProjectCard from "./projectCard";
import ProjectCardSceleton from "./projectCardSceleton";

const projects = () => {
  return (
    <div className="p-10">
      <h1 className="mb-5 text-2xl font-semibold text-left">Projects</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ProjectCard
          imgSource="/website_preview.webp"
          imgAlt="Website Preview"
          title="Website"
          description="A small personal website to showcase my resume and projects. It is the
          website you are currently visiting!"
          linkHref="/projects/website"
          linkText="See more"
        ></ProjectCard>
        <ProjectCardSceleton></ProjectCardSceleton>
      </div>
    </div>
  );
};

export default projects;
