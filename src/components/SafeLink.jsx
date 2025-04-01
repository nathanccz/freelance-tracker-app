export default function SafeExternalLink({ url, children }) {
  const isSafe = (url) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:"
        ? url
        : "#";
    } catch {
      return "#";
    }
  };
  if (!isSafe) {
    alert();
  }
}
