import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import links from "./processor/links";
import menuHandler from "./components/handlers/menu-handler";
import state from "./state";

const cmcTheme = {
  name: "cmc-frontend-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: state
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async({ state, actions }) => {
        await Promise.all(
          [
            actions.source.fetch(`/menu/${state.theme.menuUrl}/`),
            actions.source.fetch(`/menu/${state.theme.topmenuUrl}/`),
            actions.source.fetch(`/menu/${state.theme.socialUrl}/`),
            actions.source.fetch(`/menu/${state.theme.infosUrl}/`),
            actions.source.fetch(`/menu/${state.theme.sitemapUrl}/`),
            actions.source.fetch(`/menu/${state.theme.copyrightUrl}/`),
          ]
        );
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe, links],
    },
    source: {
      handlers: [menuHandler]
    }
  },
};

export default cmcTheme;
