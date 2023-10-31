import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ marginTop: 2 }}
    >
      {"Copyright © PriceSpider "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
