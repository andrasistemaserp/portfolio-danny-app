import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import { useGetUser } from "actions/user";
import { Row, Col } from 'reactstrap';
import Masthead from "components/shared/Masthead";
import BlogsApi from "lib/api/blogs";
import BlogItem from "components/BlogItem";

const Blogs = ({ blogs }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout
      navClass="transparent" className="blog-listing-page"
      user={dataU} loading={loadingU}>
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, managing...</span>
      </Masthead>
      <BasePage
        title="Newest Blogs - Danny Andrade"
        className="blog-body">
        <Row>
          {
            blogs && blogs.map((blog) =>
              <Col key={blog._id} md="10" lg="8" className="mx-auto">
                <BlogItem blog={blog} />
                <hr></hr>
              </Col>
            )
          }
        </Row>
      </BasePage>
    </BaseLayout>

  )
}

export async function getStaticProps() {
  const { data } = await new BlogsApi().getAll();
  const blogs = data.map(item => ({ ...item.blog, author: item.author }))
  return { props: { blogs }, revalidate: 60 }
}

export default Blogs