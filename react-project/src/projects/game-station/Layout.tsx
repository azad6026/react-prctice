import React from "react";
import { Grid, GridItem, Box, Show, Stack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Grid
    gridTemplateRows={"auto 1fr"}
    templateColumns={"150px 1fr"}
    h="100vh"
    gap="1"
  >
    <GridItem colSpan={2}>
      <NavBar />
    </GridItem>
    <Stack hideFrom="lg">
      <GridItem bg="gray.200" colSpan={1} rowSpan={1 / 2} height="">
        <GenresList />
      </GridItem>
    </Stack>
    <GridItem bg="gray.50" colSpan={1}>
      <GamesGrid />
    </GridItem>
  </Grid>
);

export default Layout;
