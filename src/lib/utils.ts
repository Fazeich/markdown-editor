export const downloadMarkdown = (content: string) => {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "markdown.md";
  link.click();

  URL.revokeObjectURL(url);
};
