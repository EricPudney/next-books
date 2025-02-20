import Navbar from '@/app/components/Navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (    
    <>
        <div className="min-h-screen h-full">
        <Navbar />
          <div className="grid grid-cols-9 mt-32">
            <div className="col-start-2 col-span-7">
              <div>{children}</div>
            </div>
          </div>
        </div>
    </>    
  );
}