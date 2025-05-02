import { MetadataRoute } from "next";


export default function rebots():MetadataRoute.Robots{
    return {
        rules:[
            {userAgent:'*',
             
            }
        ],sitemap:`${process.env.DOMAIN_NAME}/sitemap.xml`
    }
}