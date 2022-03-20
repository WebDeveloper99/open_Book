import React, { useState } from 'react'
import './style.css'

import bg from '../../assets/imgs/bg-header.jpg'
import Card from '../card/Card'
import axios from 'axios'

const Header = () => {
  const [search, setSearch] = useState('')
  const [booksData, setBooksData] = useState([])

  const searchBook = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDqIywxWRcsHiWXILuV_OIChfKQ_KFVhgs&maxResults=40`,
      )
      .then((res) => setBooksData(res.data.items))
      .catch((err) => console.log(err))
      .finally((fin) => console.log(fin))
  }

  return (
    <div className="header__container">
      <div className="row_1__wrapper">
        <div className="col_1__wrapper">
          <h1>
            A room with out books is like <br /> a body without a soul
          </h1>
        </div>
        <div className="col_2__wrapper">
          <h2>Find your book</h2>
          <input
            type="text"
            placeholder="enter your book name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchBook}
          />
          <img src={bg} />
        </div>
      </div>
      <div className="row_2__wrapper">
        <Card booksData={booksData} />
      </div>
    </div>
  )
}

export default Header
