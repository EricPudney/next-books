import Navbar from '@/app/components/layout/Navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (    
    <>
        <div className="min-h-[calc(100vh-64px)]  h-full max-h-min">
        <Navbar />
              <div>{children}</div>
          </div>
    </>
  );
}