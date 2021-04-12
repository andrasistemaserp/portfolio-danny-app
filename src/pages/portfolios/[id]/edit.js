import BasePage from "components/BasePage"
import BaseLayout from "components/layouts/BaseLayout"
import withAuth from "hoc/withAuth"
import { useRouter } from "next/router"
import { useGetPortfolio, useUpdatePortfolio } from "actions/portfolios"
import PortfolioForm from "components/PortfolioForm"
import { Col, Row } from "reactstrap"
import { toast } from 'react-toastify';

const PortfolioEdit = ({ user: userU, loading: loadingU }) => {
  const router = useRouter()
  const [updatePortfolio, { error }] = useUpdatePortfolio();
  const { data: inicialData } = useGetPortfolio(router.query.id)

  const _updatePortfolio = async (data) => {
    // try {
    //   await updatePortfolio(router.query.id, data)
    //   toast.success('Portfolio has been updated!', { autoClose: 2000 })
    // } catch {
    //   toast.error('Ooops some error!', { autoClose: 2000 })
    // }

    // updatePortfolio(router.query.id, data)
    // .then(() => toast.success('Portfolio has been updated!', { autoClose: 2000 }))
    // .catch(() => toast.error('Ooops some error!', { autoClose: 2000 }))

    await updatePortfolio(router.query.id, data)
    toast.success('Portfolio has been updated!', { autoClose: 2000 })

  }

  // if (data) { return <Redirect to="/portfolios" /> }

  return (
    <BaseLayout user={userU} loading={loadingU}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            {inicialData &&
              <PortfolioForm
                onSubmit={_updatePortfolio}
                inicialData={inicialData}
              />
            }
            {error &&
              <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioEdit)('admin')
