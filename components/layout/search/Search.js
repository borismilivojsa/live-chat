import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter()
    const [term, setTerm] = useState('')

    const searchHandler = (e) => {
        setTerm(e.target.value)

        router.replace({
            query: { ...router.query, term: e.target.value },
        });
    }

    return (
        <div className="d-flex border bg-light rounded-5 mx-2 my-2">
            <input
                className="form-control rounded-4 mx-1 my-1"
                value={term}
                placeholder="Search here"
                type="text"
                onChange={(e) => searchHandler(e)}
            />
        </div>
    )
}

export default Search