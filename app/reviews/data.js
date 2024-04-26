export async function getData() {
    const res = await fetch('http://localhost:3000/reviews/api');
    if (!res.ok) {
        throw new Error("Failed to Fetch Data");
    }
    return res.json(); // Call res.json() to parse the response body as JSON
}
