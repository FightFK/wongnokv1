export async function getData(id){

    const res = await fetch(`http://localhost:3000/reviews/${id}/api`);
    if (!res.ok) {
        throw new Error("Failed to Fetch Data");
    }
    return res.json(); 
}