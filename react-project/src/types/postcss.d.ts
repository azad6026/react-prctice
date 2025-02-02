declare module "@tailwindcss/postcss" {
  import { PluginCreator } from "postcss";
  const plugin: PluginCreator<unknown>;
  export default plugin;
}
