import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { withAuth } from 'utils/auth0';

const SecretSSR = ({ user, title }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret SSR Page - Hello {user.nickname}</h1>
        <h1>{title}</h1>
      </BasePage>
    </BaseLayout>
  )
}

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authorizeUser(req, res)

//   return {
//     props: { user }
//   }
// }

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: "My new title!" })
    }, 500)
  })
}

export const getServerSideProps = withAuth(async ({req, res}, user) => {
  const title = await getTitle()
  return title
})();

export default SecretSSR
