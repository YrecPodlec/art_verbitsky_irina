export async function WelcomeGet() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/projects/?page=1&limit=999&lang=ru')
        if (!response.ok) {
            return null;
        }
        return await response.json()
    } catch (error){
        console.log(error)
        return null;
    }
}