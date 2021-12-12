import { FC, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const LoadAsync: FC = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback="loading....">{children}</Suspense>
  </ErrorBoundary>
);

export default LoadAsync;
