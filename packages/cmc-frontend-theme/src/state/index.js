const state = {
  userName: "",
  userPass: "",
  templateSlug: ["header", "footer"],
  colors: {
    frontity: "#1f38c5",
    primary: "#0f1c64",
    voidblu: "#0c112b",
    grass: "#82c315",
    wall: "#f6f6f9",
    purple: "#936af4",
    orange: "#f4c053",
    red: "#f76d64",
    turqoise: "#6ac8c9",
    lightgreen: "#8ACB88",
    white: "#ffffff",
  },
  autoPrefetch: "in-view",
  menu: [],
  menuUrl: "all-pages",
  topmenuUrl: "top-menu",
  socialUrl: "social-menu",
  infosUrl: "infos",
  sitemapUrl: "sitemap",
  copyrightUrl: "copyright-menu",
  isMobileMenuOpen: false,
  featured: {
    showOnList: false,
    showOnPost: false,
  },
}

export default state;