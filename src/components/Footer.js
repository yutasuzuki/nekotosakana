import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-inner">
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/" className="navbar-item">
                  トップページ
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/blog">
                  記事一覧
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/tags">
                  タグ一覧
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about">
                  このサイトについて
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/contact">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-copyright">
          <small>© 2020 ネコとサカナ</small>
        </div>
      </footer>
    )
  }
}

export default Footer
