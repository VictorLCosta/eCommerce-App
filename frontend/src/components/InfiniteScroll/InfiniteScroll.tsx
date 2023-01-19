/* eslint-disable consistent-return */
import { useEffect, useRef } from "react";

export type InfiniteScrollProps = {
  children: React.ReactNode;
  className?: string;
  hasNextPage?: boolean;
  loader?: React.ReactNode;
  loading?: boolean;
  onLoadMore: () => void;
};

export function InfiniteScroll({
  children,
  className,
  hasNextPage,
  loader,
  loading,
  onLoadMore,
}: InfiniteScrollProps) {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          onLoadMore();
        }
      },
      { threshold: 0 },
    );

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current?.disconnect();
      }
    };
  }, [hasNextPage, onLoadMore]);

  return (
    <div className={className}>
      {children}
      <div ref={lastItemRef} />
      {loading && loader}
    </div>
  );
}
