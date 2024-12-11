import React from "react";
import { Grid, GridItem, Box, Show, Stack } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Grid
    gridTemplateRows={"auto 1fr"}
    templateColumns={"200px 1fr"}
    h="100vh"
    gap="1"
  >
    <GridItem bg="blue.500" colSpan={2}>
      <Box color="white">Navigation</Box>
    </GridItem>
    <Stack hideFrom="lg">
      <GridItem bg="gray.200" colSpan={1} rowSpan={1 / 2} height="">
        <Box>Aside</Box>
      </GridItem>
    </Stack>
    <GridItem bg="gray.50" colSpan={1}>
      <Box>Main {children}</Box>
    </GridItem>
  </Grid>
);

export default Layout;
