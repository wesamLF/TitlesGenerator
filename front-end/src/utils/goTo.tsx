


export const goTo = (url: string) => {
    console.log("url" , url)
    window.open(`https://www.youtube.com/${url}`, '_blank', 'noopener,noreferrer');

}