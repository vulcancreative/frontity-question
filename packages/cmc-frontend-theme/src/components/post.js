import React, { useEffect } from "react";
import { connect, styled } from "frontity";
// import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import Image from "@frontity/components/image";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  // Get hero image from Featured Image
  const featuredImg = post.featured_image_urls.full;

  // Get Category name
  const category = state.source.category[post.categories[0]].name;

  const SharingButtons = libraries.fills.share.SharingButtons;
  console.log(libraries.fills.share);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <ArticleContainer>
      {featuredImg && <Hero src={featuredImg[0]}></Hero>}

      <PostTitle>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Only display author and date on posts */}
        {data.isPost && (
          <TwoCol>
            <AuthorWrapper>
              {author && (
                <StyledLink href={author.link}>
                  <Author>{author.name}</Author>
                </StyledLink>
              )}
              <Dot />
              <DateWrapper> {date.toDateString()}</DateWrapper>
              <Dot />
              <Category>{category}</Category>
            </AuthorWrapper>
            <Share>
              <SharingButtons />
            </Share>
          </TwoCol>
        )}
      </PostTitle>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </ArticleContainer>
  ) : null;
};

export default connect(Post);

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

const PostTitle = styled.div`
  text-align: left;
  margin-bottom: 48px;
  max-width: 800px;
  margin: 0 auto;
`;

const Dot = styled.div`
  display: inline-flex;
  width: 4px;
  height: 4px;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 50%;
  background: #333333;
`;

const Hero = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  margin-bottom: 1.2rem;
  font-weight: bold;
  font-size: 48px;
  line-height: 1.2;
`;

const StyledLink = styled.a`
  /* padding: 15px 0; */
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 16px;
  display: inline;
  font-weight: 500;
`;

const Category = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 16px;
  display: inline;
  font-weight: 500;
  margin-bottom: 0;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-weight: 500;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
`;

const TwoCol = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: left;
  }
`;

const Share = styled.div`
  > div {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }
  a {
    display: inline-flex !important;
    align-items: center;
    color: #35747b;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  margin-bottom: 170px;
  word-break: break-word;
  max-width: 800px;
  margin: 48px auto 150px;
  font-size: 20px;
  line-height: 30px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 48px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 30px;
  }

  ol,
  ul {
    line-height: 30px;
    li {
      margin-bottom: 16px;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    object-position: left;
    padding-top: 32px;
    padding-bottom: 32px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  figure {
    margin: 24px auto;
    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
    }
    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }
  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--brand);
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
