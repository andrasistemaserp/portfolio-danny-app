import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import { useGetUser } from "actions/user";

const Cv = () => {
  const { data: dataU, loading: loadingU } = useGetUser();
  
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        <h1>I am Cv page</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Cv