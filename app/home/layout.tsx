import Navbar from '@/app/components/layout/Navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (    
    <>
        <div className="min-h-[100vh] h-full max-h-min bg-gray-50">
        <Navbar />
              <div>{children}</div>
          </div>
    </>
  );
}