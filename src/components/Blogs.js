// BlogSection.js
import React from "react";
import styled from "styled-components";

const BlogsSection = styled.section`
  background: #f5f5f5;
  padding: 5rem 0;
`;

const BlogsContainer = styled.section`
  text-align: center;
`;

const BlogsTitle = styled.h1`
  margin: 0 0 4rem 0;
  text-decoration: underline;
`;

const BlogsCard = styled.div`
  background: none;
`;

const BlogsSubTitle = styled.h2`
  margin: 0 0 3rem 0;
`;

const BlogsContent = styled.p`
  text-align: justify;
`;

const BlogsDate = styled.span`
  display: block;
  font-size:0.8rem;
  text-align: left;
  font-weight: bold;
  color:#f00
`;

const Blog = () => {
  const sampleBlogData = [
    {
      title: "Blog Post 1",
      content:
        "This is the content of Blog Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "September 10, 2023",
    },
    {
      title: "Blog Post 2",
      content:
        "This is the content of Blog Post 2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "September 5, 2023",
    },
    {
      title: "Blog Post 3",
      content:
        "This is the content of Blog Post 3. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      date: "August 28, 2023",
    },
    {
      title: "Blog Post 4",
      content:
        "This is the content of Blog Post 3. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      date: "August 28, 2023",
    },
    {
      title: "Blog Post 5",
      content:
        "This is the content of Blog Post 3. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      date: "August 28, 2023",
    },
    {
      title: "Blog Post 6",
      content:
        "This is the content of Blog Post 3. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      date: "August 28, 2023",
    },
  ];
  return (
    <BlogsSection id="blogs">
      <BlogsContainer className="container">
        <BlogsTitle>Recent Blog</BlogsTitle>
        <div className="row">
          {sampleBlogData.map((blog, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-5">
              <BlogsCard className="card">
                <div className="card-body">
                  <BlogsSubTitle className="card-title">
                    {blog.title}
                  </BlogsSubTitle>
                  <BlogsContent className="card-text">
                    {blog.content}
                  </BlogsContent>
                  <BlogsDate>{blog.date}</BlogsDate>
                </div>
              </BlogsCard>
            </div>
          ))}
        </div>
      </BlogsContainer>
    </BlogsSection>
  );
};

export default Blog;
