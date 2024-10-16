

function ListItems({items}){
    return(
        <div>
            <ul>
                {items.map((items) =>(
                    <li>
                        {items}
                    </li>
                )
                )}

            </ul>
        </div>
    )
}
export default ListItems;