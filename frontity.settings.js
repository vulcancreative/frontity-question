const settings = {
  name: "cmc-frontend",
  state: {
    frontity: {
      url: "https://cmc-corp.com",
      title: "CMC",
      description:
        "CMC is a leading IT Solutions Provider servicing the New England area.",
    },
  },
  packages: [
    {
      name: "cmc-frontend-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://backend.cmc-corp.com/",
          homepage: "/home",
          postsPage: "/blog",
        },
      },
    },
    "frontity-share",
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@vulcancreative/frontity-contact-form-7",
    "@frontity/head-tags",
  ],
};

export default settings;
