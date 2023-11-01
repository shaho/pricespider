import { PropsWithChildren } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Footer, Header } from "../../components";

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Header />
        {children}
        <Footer />
      </Box>
    </Container>
  );
}
