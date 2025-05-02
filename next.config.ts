import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
           
            {
                source: '/Main', // أي مسار غير موجود
                destination: '/main2', // الصفحة المخصصة
                permanent: false,
              },{
                source: '/', // أي مسار غير موجود
                destination: '/main1', // الصفحة المخصصة
                permanent: false,
              },
         
        ];
      },
};

export default nextConfig;
