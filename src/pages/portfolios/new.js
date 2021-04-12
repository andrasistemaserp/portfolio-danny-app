import BasePage from "components/BasePage"
import BaseLayout from "components/layouts/BaseLayout"
import withAuth from "hoc/withAuth"
import PortfolioForm from "components/PortfolioForm"
import { Col, Row } from "reactstrap"
import { useCreatePortfolio } from "actions/portfolios"
import Redirect from "components/shared/Redirect"
import { toast } from "react-toastify";

const PortfolioNew = ({ user: userU, loading: loadingU }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

  if (data) { return <Redirect to="/portfolios" /> }

  if (error) {
    toast.error(error || error.message)
  }
  
  return (
    <BaseLayout user={userU} loading={loadingU}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm
              onSubmit={createPortfolio}
            />
            {/* {error &&
              <div className="alert alert-danger mt-2">{error}</div>} */}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioNew)('admin')
