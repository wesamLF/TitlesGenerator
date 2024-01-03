


export const FilterYouTubeEmbedURL =(url:string)=>{
    const embedId = url.slice(9, 20);
    return `https://www.youtube.com/embed/${embedId}`
}