import axios from 'axios'
import { useEffect, useState } from 'react'

const Quote = () => {
    const [quote, setQuote] = useState('')

    const fetchQuote = async () => {
        const response = await axios.get('https://api.quotable.io/random')
        setQuote(response.data.content)
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <div>
            {quote && (
                <div>
                    <div>
                        <span>{quote}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quote
