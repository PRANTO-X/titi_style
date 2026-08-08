import { PageLoader } from "@/components/ui/page-loader";

export default function Loading() {
  return (
    <main className="bg-white">
      <div className="container-site">
        <PageLoader />
      </div>
    </main>
  );
}
