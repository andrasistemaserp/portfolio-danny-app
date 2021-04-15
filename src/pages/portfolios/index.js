// import Link from "next/link";
// import { Link } from "../../../server/routers"
import { useRouter } from "next/router";
import { Row, Col, Button } from 'reactstrap';
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
// import { useGetPosts } from "actions";
import { useGetUser } from "actions/user";
import PortfoliosApi from "lib/api/portfolios";
import PortfoliosCard from "components/PortfolioCard";
import { isAuthorized } from 'utils/auth0';
import { useDeletePortfolio } from "actions/portfolios"
import Swal from "sweetalert2";
import { useState } from "react";

const Portfolios = ({ portfolios: initialPortfolios }) => {
  // const { data, error, loading } = useGetPosts(); 
  const [portfolios, setPortfolios] = useState(initialPortfolios)
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const router = useRouter()
  const { data: dataU, loading: loadingU } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation()

    const { value: formValues } = await Swal.fire({
      title: 'Are you sure you want to delete this portfolio?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    // .then((result) => {
    //   if (result.isConfirmed) {
    //     await useDeletePortfolio(portfolioId);
    //   }
    // })    

    if (formValues) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter(p => p._id !== portfolioId))
    }

    // const isConfirm = confirm('Are you sure you want to delete this portfolio?')
    // if (isConfirm) {
    //   await deletePortfolio(portfolioId);
    // }
    
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        title="Newest Portfolios - Danny Andrade"   
        header="Portfolios"
        className="portfolio-page">
        <Row>
          {portfolios.map(portfolio =>
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
              }}
              md="4">
              <PortfoliosCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, 'admin') &&
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                      }}
                      className="mr-2"
                      color="warning">Edit</Button>
                    <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color="danger">Delete</Button>
                  </>
                }
              </PortfoliosCard>
            </Col>
          )
          }
        </Row>

      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const json = await new PortfoliosApi().getAll()
  const portfolios = json.data
  return {
    props: { portfolios }, revalidate: 1 //error on the build,
    // we will attempt to re-generate the page:
    // - when a request comes in
    // - at most once every second
    //error on the build unstable_revalidate: 1
  }
}

export default Portfolios