import { Outlet } from "react-router-dom";
import { Header } from "@components/Header";
import { Analytics } from "@vercel/analytics/react";
import { Loading } from "@components/Loading";
import { Suspense } from "react";
export const RootLayout = () => {
  return (
    <div className="bg-overview">
      <Header />
      <div className="relative mx-auto min-h-svh max-w-screen-2xl bg-black shadow-md">
        <Suspense fallback={<div className='absolute inset-0 flex items-center justify-center'><Loading /></div>}>
          <Outlet />
        </Suspense>
      </div>
      <Analytics />
    </div>
  );
};
