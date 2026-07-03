import { Skeleton } from "../ui/Skeleton";

export function HomePageSkeleton() {
  return (
    <div className="flex flex-col gap-12 w-full animate-page-enter min-h-screen">
      {/* Hero Skeleton */}
      <div className="w-full h-[500px] bg-slate-100 relative overflow-hidden flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 flex flex-col gap-4">
          <Skeleton className="w-40 h-5" />
          <Skeleton className="w-96 h-14" />
          <Skeleton className="w-[500px] h-6" />
          <Skeleton className="w-36 h-11" />
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-[1400px] w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-32 h-5" />
          <Skeleton className="w-80 h-10" />
          <Skeleton className="w-full h-20" />
          <Skeleton className="w-32 h-10" />
        </div>
        <Skeleton className="w-full aspect-[4/3] rounded-2xl" />
      </div>

      {/* Categories Section */}
      <div className="w-full bg-slate-50 py-12">
        <div className="max-w-[1400px] w-full mx-auto px-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-44 h-5" />
            <Skeleton className="w-64 h-10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <Skeleton className="w-full aspect-square rounded-2xl" />
                <Skeleton className="w-24 h-6 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-[1400px] w-full mx-auto px-4 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-44 h-5" />
          <Skeleton className="w-64 h-10" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="border border-slate-100 rounded-2xl p-4 bg-white flex flex-col gap-4 shadow-sm w-full">
      <Skeleton className="w-full aspect-[4/5] rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-16 h-4" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-24 h-5 mt-2" />
        <div className="flex justify-between items-center mt-3 gap-3">
          <Skeleton className="flex-1 h-10 rounded-xl" />
          <Skeleton className="w-10 h-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function OffersPageSkeleton() {
  return (
    <div className="flex flex-col gap-12 w-full animate-page-enter min-h-screen">
      {/* Hero Skeleton */}
      <div className="w-full h-[360px] bg-slate-100 relative overflow-hidden flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 flex flex-col gap-4">
          <Skeleton className="w-44 h-5" />
          <Skeleton className="w-80 h-12" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1400px] w-full mx-auto px-4 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-36 h-5" />
          <Skeleton className="w-64 h-10" />
          <Skeleton className="w-96 h-5" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CartPageSkeleton() {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 animate-page-enter min-h-screen">
      {/* Left side items list */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-slate-100 pb-6">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-60 h-10" />
          <Skeleton className="w-44 h-5" />
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-white items-center">
              <Skeleton className="w-24 h-24 rounded-xl flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <Skeleton className="w-44 h-6" />
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-20 h-5" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <Skeleton className="w-28 h-9 rounded-lg" />
                <Skeleton className="w-16 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side summary */}
      <div className="flex flex-col gap-4 p-6 border border-slate-100 rounded-2xl bg-white h-fit shadow-sm">
        <Skeleton className="w-40 h-6 mb-4" />
        <div className="flex justify-between">
          <Skeleton className="w-28 h-5" />
          <Skeleton className="w-20 h-5" />
        </div>
        <div className="flex justify-between mt-2">
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-20 h-5" />
        </div>
        <hr className="border-slate-100 my-4" />
        <div className="flex justify-between mb-4">
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-24 h-6" />
        </div>
        <Skeleton className="w-full h-12 rounded-xl mb-2" />
        <Skeleton className="w-full h-12 rounded-xl" />
      </div>
    </div>
  );
}

export function FavoritesPageSkeleton() {
  return (
    <div className="max-w-[1100px] w-full mx-auto px-4 py-12 flex flex-col gap-8 animate-page-enter min-h-screen">
      <div className="flex flex-col gap-2 border-b border-slate-100 pb-6">
        <Skeleton className="w-44 h-10" />
        <Skeleton className="w-32 h-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-white items-center">
            <Skeleton className="w-20 h-24 rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-2">
              <Skeleton className="w-48 h-6" />
              <Skeleton className="w-28 h-4" />
              <Skeleton className="w-20 h-5" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-36 h-10 rounded-xl" />
              <Skeleton className="w-10 h-10 rounded-xl self-end" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProfilePageSkeleton() {
  return (
    <div className="max-w-[1100px] w-full mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-page-enter min-h-screen">
      <div className="md:col-span-1 border border-slate-100 rounded-2xl p-6 bg-white flex flex-col items-center gap-4 h-fit shadow-sm">
        <Skeleton className="w-24 h-24 rounded-full" />
        <Skeleton className="w-40 h-6" />
        <Skeleton className="w-28 h-4" />
        <Skeleton className="w-48 h-5" />
        <Skeleton className="w-full h-10 rounded-xl mt-4" />
      </div>
      <div className="md:col-span-2 flex flex-col gap-6">
        <div className="border border-slate-100 rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-4">
          <Skeleton className="w-48 h-6 mb-2" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50">
              <Skeleton className="w-36 h-5" />
              <Skeleton className="w-48 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CheckoutPageSkeleton() {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 animate-page-enter min-h-screen">
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Skeleton className="w-48 h-5" />
        <Skeleton className="w-64 h-10" />
        <div className="flex flex-col gap-4 border border-slate-100 rounded-2xl p-6 bg-white">
          <Skeleton className="w-48 h-6 mb-4" />
          <Skeleton className="w-full h-12 rounded-xl" />
          <Skeleton className="w-full h-12 rounded-xl" />
        </div>
      </div>
      <div className="border border-slate-100 rounded-2xl p-6 bg-white h-fit shadow-sm flex flex-col gap-4">
        <Skeleton className="w-40 h-6 mb-2" />
        <Skeleton className="w-full h-16 rounded-xl" />
        <Skeleton className="w-full h-16 rounded-xl" />
      </div>
    </div>
  );
}

export function GenericPageSkeleton() {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 py-16 flex flex-col gap-6 animate-page-enter min-h-screen">
      <Skeleton className="w-64 h-10" />
      <Skeleton className="w-[800px] h-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="w-full aspect-[4/3] rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
