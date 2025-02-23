import Navbar from '@/app/components/layout/Navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (    
    <>
        <div className="min-h-[calc(100vh-64px)]  h-full max-h-min">
        <Navbar />
          <div className="grid grid-cols-9 mt-16">
            <div className="col-start-2 col-span-7 mb-16">
              <div>{children}</div>
            </div>
          </div>
        </div>
    </>
  );
}