import Column from "../column/column";
import React from "react";
import './style.css'


function AllColumns() {
    const columnTypes = ['To do', 'In progress', 'Done']
    const printColumnCards = columnTypes.map(column => {
        return <Column type={column}></Column>
    })

    return(
        <main className="columns__container">
            {printColumnCards}
        </main>
        
    )
}

export default AllColumns;