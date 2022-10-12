import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from "../features/NewsSlice"

const ProgrammingPage = () => {
    const dispatch = useDispatch()
    
    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    useEffect(() => {
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q=programming&from=${localDateFrom.toISOString()}&to=${localDateTo.toISOString()}&pageSize=20&sortBy=relevancy&searchIn=description,title&apiKey=c27a9a2133c74b0e93e975795a064a17`))
    }, []);

    return(
        <div>Programming News</div>
    )
}

export default ProgrammingPage