import React from 'react'
// import Menu from '../MenuData';

const Card = ({ menuData }) => {


    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((curele, idx) => {
                        return (
                            <>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{curele.id}</span>
                                            <span className='card-author subtle'> {curele.category}</span>
                                            <h2 className='card-title'> {curele.name} </h2>
                                            <span className='card-description subtle'> {curele.description} </span>
                                            <div className='card-read'>
                                                Read
                                            </div>
                                            <img src={curele.image} alt="Food Images" className='card-media' />

                                            <span className='card-tag subtle'>Order now</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );

                    })
                }
            </section>
        </>
    )
}

export default Card;
