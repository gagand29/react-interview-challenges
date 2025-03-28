import { useState } from "react";

const items = ['Apple', 'Banana', 'Cherry', 'Orange', 'Watermelon', 'Blueberry', 'Mango']

export default function SearchList() {
    const [query, setQuery] =  useState('');

    const filteredItems = items.filter(item=>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <div style={{padding: '1rem'}}>
            <h2>search filter</h2>
            <input
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            style={{ padding: '0.5rem', width: '100%' }}
            />
            <ul>
                {filteredItems.length>0?(

                    filteredItems.map(item=>
                        <li key={item}>{item}</li>
                    )
                ):(
                        <li>No items found</li>
                    )
                }
            </ul>

        </div>
    )
}
