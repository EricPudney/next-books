/** @type {import('next').NextConfig} */
const nextConfig = {

images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: "www.dropbox.com",
      pathname: '**',
    },
    {
      protocol: 'https',
      hostname: 'efphkakmf7zk6mhn.public.blob.vercel-storage.com',
      port: '',
    },
  ],
}};

export default nextConfig;