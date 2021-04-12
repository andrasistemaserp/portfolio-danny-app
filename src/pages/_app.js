import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import 'slate-simple-editor/dist/index.css';
// import 'sweetalert2/src/sweetalert2.scss'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

// static async getInitialProps({ Component, ctx }) {
//   let pageProps = {}

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }

//   return { pageProps }
// }

export default MyApp
