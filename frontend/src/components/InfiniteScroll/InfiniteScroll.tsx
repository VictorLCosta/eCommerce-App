/* eslint-disable consistent-return */
import { useEffect, useRef } from "react";

export type InfiniteScrollProps = {
  children: React.ReactNode;
  hasNextPage: boolean;
  loader: React.ReactNode;
  loading?: boolean;
  onLoadMore: () => void;
};

export function InfiniteScroll({
  children,
  hasNextPage,
  loader,
  loading,
  onLoadMore,
}: InfiniteScrollProps) {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) return;
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        onLoadMore();
      }
    });

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasNextPage, onLoadMore]);

  return (
    <div>
      {children}
      <div ref={lastItemRef} />
      {loading && loader}
    </div>
  );
}
