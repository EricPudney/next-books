import Navbar from '@/app/components/Navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (    
    <>
        <Navbar />
        <main className="min-h-screen">
          <div className="grid grid-cols-5">
            <div className="col-start-2 col-span-3">
              <div>{children}</div>
            </div>
          </div>
        </main>
    </>    
  );
}