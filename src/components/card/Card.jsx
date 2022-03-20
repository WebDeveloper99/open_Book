import React from 'react'
import './style.css'

const Card = ({booksData}) => {

    console.log(booksData);
  return (
    <>
        {
            booksData.map((book)=>{

                const thumbnail = book.volumeInfo?.imageLinks?.smallThumbnail;
                const name = book.volumeInfo?.title;
                const price = book.saleInfo?.listPrice?.amount;

                if(thumbnail != undefined && price != undefined){
                    return(
                        <>
                           <div className="card">
                                <div className="card__body">
                                   <img src={thumbnail} />
                                </div>
                                <div className="card__footer">
                                   <div className="title">{name}</div>
                                   <div className="price">{price}$</div>
                                </div>
                            </div>
                        </>
                    )
                }
                
            })
        }
    </>
  )
}

export default Card