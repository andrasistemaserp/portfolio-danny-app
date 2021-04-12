// import axios from "axios"
import BasePage from "components/BasePage"
import BaseLayout from "components/layouts/BaseLayout"
// import { useGetPostById } from "actions";
// import { useRouter } from "next/router";
import { useGetUser } from "actions/user";
import PortfoliosApi from "lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  // const router = useRouter()
  // const { data: portfolio, error, loading } = useGetPostById(router.query.id);
  //  useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header="Portfolio Detail">
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  )
}

// export async function getServerSideProps({ query }) {
//   const json = await new PortfoliosApi().getById(query.id)
//   const portfolio = json.data
//   return {
//     props: { portfolio }
//   }
// }


// This function is executed at the build time
export async function getStaticPaths() {
  const json = await new PortfoliosApi().getAll()
  const portfolios = json.data

  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id }
    }
  })

  // fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const json = await new PortfoliosApi().getById(params.id)
  const portfolio = json.data
  return {
    props: { portfolio }
  }
}


// Portfolio.getInitialProps = async ({ query }) => {
//   let post = {}
//   try {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
//     post = res.data
//   } catch (e) {
//     console.error(e)
//   }

//   return { portfolio: post }
// }

export default Portfolio

// import React from "react"
// import BaseLayout from "../../components/layouts/BaseLayout"
// import { withRouter } from 'next/router'
// import axios from "axios"

// class Portfolio extends React.Component {

//   static async getInitialProps({query}) {
//     let post = {}
//     try {
//       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
//       post = res.data
//     } catch (e) {
//       console.error(e)
//     }

//     return { portfolio: post }
//   }

//   render() {
//     const { portfolio } = this.props
//     return (
//       <BaseLayout>
//         <h1>I am Portfolio page</h1>
//         {/* <h2>{this.props.router.query.id}</h2> */}
//         <h1>{portfolio.title}</h1>
//         <p>BODY: {portfolio.body}</p>
//         <p>ID: {portfolio.id}</p>
//       </BaseLayout>
//     )
//   }

// }

// export default withRouter(Portfolio)