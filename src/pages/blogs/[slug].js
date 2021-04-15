import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import { useGetUser } from "actions/user";
import BlogsApi from "lib/api/blogs";
import { Col, Row } from "reactstrap";
import { SlateView } from "slate-simple-editor";
import Avatar from "components/shared/Avatar";

const BlogDetail = ({ blog, author }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        title={`${blog.title} - Danny Andrade`}
        metaDescription={blog.subTitle}
        className="slate-container">
        <Row>
          <Col md={{ size: 60, offset: 0 }}>
            <Avatar
              image={author.picture}
              title={author.name}
              date={blog.createAt}
            />
            <hr />
            <SlateView initialContent={blog.content} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const { data } = await new BlogsApi().getAll()
  const paths = data.map(({ blog }) => ({ params: { slug: blog.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { data: { blog, author } } = await new BlogsApi().getBySlug(params.slug)

  return {
    props: { blog, author }
  }
}

export default BlogDetail