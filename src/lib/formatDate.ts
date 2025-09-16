export const formatDate = (
  dateString: Date,
  options?: {
    year?: "numeric";
    month?: "short" | "long";
    day?: "numeric";
  },
) => {
  return new Date(dateString).toLocaleDateString("en-US", options);
};
