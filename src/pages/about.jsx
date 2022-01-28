import React from 'react'
import api from "../services/api";

class Page extends React.Component {
  static async getInitialProps(ctx) {
    const res = await api.get('/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return <div>Next stars: {this.props.stars}</div>
  }
}

export default Page