"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorsStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorsStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
