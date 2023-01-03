import { Helmet } from "react-helmet-async";

export type HeadProps = {
  title?: string;
  description?: string;
};

export function Head({ title = "", description = "" }: HeadProps = {}) {
  return (
    <Helmet title={title ? `${title} | Aware` : undefined} defaultTitle="Aware">
      <meta name="description" content={description} />
    </Helmet>
  );
}
