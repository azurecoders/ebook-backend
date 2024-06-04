// corsMiddleware.js
export default function corsMiddleware(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://ebook-with-admin-panel.sites.com.pk"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
}
