export const truncateText =
(str: string) => {
    if(str.length < 21) 
        return str;

    return str.substring(0,21) + "...";
}