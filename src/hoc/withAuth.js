
import { useGetUser } from 'actions/user';
import Redirect from 'components/shared/Redirect';
import { isAuthorized } from 'utils/auth0';

const withAuth = Component => (role) => {

  return props => {

    const { data, loading } = useGetUser();
    
    if (loading) {
      return <p>Loading...</p>
    }

    if (!data) {
      return <Redirect ssr to="/api/v1/login" />
    } else {
      if (role && !isAuthorized(data, role)) {
        return <Redirect ssr to="/api/v1/login" />
      }
      
      return <Component user={data} loading={loading} {...props}/>
    }
  }
}

// HOC = Hight Order Component
// Simple function that takes a component a component and returns new
// compoment with some extended funcionality

export default withAuth;
