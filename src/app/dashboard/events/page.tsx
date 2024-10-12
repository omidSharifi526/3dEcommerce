'use client'
import React from 'react';
import { useGetNews } from './Hooks';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/system';
const page = () => {
    const{data}=useGetNews();
    const [news, setNews] = useState([])



    useEffect(() => {
      
    console.log(data)
    let news=data?.articles;
    setNews(news)
    
    }, [data])


    useEffect(() => {
      
    console.log(news)
     
    }, [news])
    
    
    console.log(data)
  return (
    <Grid container  >{
        news && news?.map((article:any)=>{
            return <Grid size={{xs:12,sm:4}}   >
                 <div className="news-item">
            <h2>{article.title}</h2>
            <p><strong>Published at:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
            {/* {article.urlToImage && (
              <Image
                src={'https://ml.globenewswire.com/Resource/Download/915d2f9c-7dc6-40c7-995c-2ba168208baa'}
                alt={article.title}
                width={600}
                height={400}
              />
            )} */}
            <img 
            style={{width:'200px',height:'200px'}}
            src={article.urlToImage}  />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more on {article.source.name}
            </a>
          </div>
            </Grid>
        })
        
        }</Grid>
  )
}

export default page