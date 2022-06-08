import React from 'react'

const Nav = ({ filterItem, menulist }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        menulist.map((ele, idx) => {
                            return (<button className="btn-group__item" onClick={() => filterItem(ele)}>{ele}</button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Nav;
