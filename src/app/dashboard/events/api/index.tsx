
// import { NEWS_API_KEY } from "@/env";
import { NEWS_API_KEY } from "@/env";


// export default async function handler(req, res) {


//   try {
//     const response = await axios.get(
//       `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
//     );
//     const articles = response.data.articles;

//     res.status(200).json(articles);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch events' });
//   }
// }


  const  getNews=async()=>{
    const query = 'قالب' ; // جستجوی اخبار مرتبط با صنعت چاپ و بسته‌بندی
    return await  fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`).then((res) => res.json());
    }

    export{
        getNews
    }