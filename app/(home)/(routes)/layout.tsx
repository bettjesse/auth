import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth()
  return (
    <SessionProvider session={session}>

   
    <div className="h-full">
      <div className="h-[80px]  fixed w-full inset-y-0 z-50">
        <Navbar />
      </div>
   <div className="pt-[80px]">
   {children}
   </div>
     
    </div>
    </SessionProvider>
  );
}
