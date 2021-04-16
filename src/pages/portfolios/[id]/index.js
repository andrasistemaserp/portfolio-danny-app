// import axios from "axios"
import BasePage from "components/BasePage"
import BaseLayout from "components/layouts/BaseLayout"
// import { useGetPostById } from "actions";
// import { useRouter } from "next/router";
import { useGetUser } from "actions/user";
import PortfoliosApi from "lib/api/portfolios";
import { formatDate } from "helpers/functions";
import { useRouter } from "next/router";

const Portfolio = ({ portfolio }) => {
  // const router = useRouter()
  // const { data: portfolio, error, loading } = useGetPostById(router.query.id);
  //  useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);
  const { data: dataU, loading: loadingU } = useGetUser();

  const router = useRouter();
  if (router.isFallback) {
    <h1>Your page is getting server...</h1>
  }

  return (
    <BaseLayout
      navClass="transparent"
      user={dataU} loading={loadingU}>
      <BasePage
        noWrapper
        indexPage
        title={`${portfolio.title} - Danny Andrade`}
        metaDescription={portfolio.description}>
        {/* {JSON.stringify(portfolio)} */}
        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              {
                router.isFallback &&
                <h1 className="cover-heading">Your page is getting server...</h1>
              }
              {
                !router.isFallback &&
                <>
                  <h1 className="cover-heading">{portfolio.title}</h1>
                  <p className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
                  <p className="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
                  <p className="lead">{portfolio.description}</p>
                  <p className="lead">
                    <a href={portfolio.companyWebsite} target="_" className="btn btn-lg btn-secondary">Visit Company</a>
                  </p>
                </>
              }

            </main>
          </div>
        </div>
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
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const json = await new PortfoliosApi().getById(params.id)
  const portfolio = json.data
  return {
    props: { portfolio }, revalidate: 1
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