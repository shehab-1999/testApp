import { MetadataRoute } from "next";






export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 
  const sitemap = [
    {
      url: `https://test-app-bay-gamma.vercel.app/`,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
   
  ];

  return sitemap;
}



// import { MetadataRoute } from "next";
// import { News } from "./[locale]/types/types";
// import { Doctor } from "@prisma/client";
// import { Languages } from "lucide-react";

// const baseUrl = process.env.DOMAIN_NAME || "http://localhost:3000";
// const getNews = async (): Promise<News[]> => {
//   const response = await fetch(`${baseUrl}/api/News`, { method: "GET" });

//   const data: News[] = await response.json();

//   return data;
// };
// const getDoctor = async (): Promise<Doctor[]> => {
//   const response = await fetch(`${baseUrl}/api/Doctor`, { method: "GET" });

//   const data = await response.json();

//   return data;
// };
// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
//   const sitemap = [];
//   const language = [{language:"ar",pariority:0.8}, {language:"en",pariority:0.5}];
//   const languageMain = [{language:"ar",pariority:0.9}, {language:"en",pariority:0.5}];
// const mainPages=['blogSection','doctor','news','department']
// sitemap.push({
//   url: `${baseUrl}/`,
//   lastModified: new Date(),
 
//   priority: 1,
// },
//   {
//     url: `${baseUrl}/ar`,
//     lastModified: new Date(),
   
//     priority: 1,
//   },
  
//   {
//     url: `${baseUrl}/en`,
//     lastModified: new Date(),
   
//     priority: 0.5,
//   },
  
// );
// mainPages.map((page)=>  languageMain.map((language)=> sitemap.push(
//   {
//     url: `${baseUrl}/${language?.language}/main/${page}`,
//     lastModified: new Date(),
   
//     priority:language?.pariority,
//   },
  
// )));
  
//   const Doctors = await getDoctor();
//   const News: News[] = await getNews();

  
//   const DoctorsUrls = Doctors.map((doctor) =>
//     language.map((language) =>
//       sitemap.push({
//         url: `${baseUrl}/${language.language}/main/doctor/${doctor?.doctorName}`,
//         lastModified: new Date(doctor?.updatedAt),
       
//         priority: language?.pariority,

//       })
//     )
//   );
//   const NewstUrls = News.map((news) =>
//     language.map((language) =>
//       sitemap.push({
//         url: `${baseUrl}/${language.language}/main/news/${news?.headline}`,
//         lastModified: new Date(news?.createdAt),
//         priority: language?.pariority,
//       })
//     )
//   );



//   return sitemap;
// }
