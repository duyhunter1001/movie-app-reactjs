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
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Analytics />
    </div>
  );
};
