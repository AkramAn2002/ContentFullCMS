import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "2liin4gc2qps",
  environment: "master",
  // accessToken: "UyXitwyuZSadFOSYJLEiZMYORukk19iES7KUN0jHOBY",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, id, img, url };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { isLoading, projects };
};

// client
//   .getEntries({
//     content_type: "projects",
//   })
//   .then(
//     (response) => console.log()
//     //response.items[0].fields.image.fields.file.url
//   );
export default useFetchProjects;
