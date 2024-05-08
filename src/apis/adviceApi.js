export const fetchAdvice = async () => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}