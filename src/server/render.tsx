import { fetchContests } from "../api-client"
import App from "../components/app"
import ReactDOMServer from 'react-dom/server'

const serverRender = async() => {
  const contests = await fetchContests();

  const initialMarkup =  ReactDOMServer.renderToString(<App initialData={{contests}} />)

  return {initialMarkup, initialData: {contests}};
}

export default serverRender
