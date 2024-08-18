addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    try {
        if (request.method === 'POST') {
            const formData = await request.json(); // Parse JSON data from the request body

            // Here you can process the formData object as needed (e.g., store in a database, send via email, etc.)
            console.log('Form Data Received:', formData);

            // Example: Store data in a database or perform other processing

            return new Response('Form submitted successfully!', {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*', // Adjust as necessary for CORS
                    'Content-Type': 'text/plain',
                },
            });
        } else {
            return new Response('Method not allowed', {
                status: 405,
            });
        }
    } catch (err) {
        console.error('Error processing form submission:', err);
        return new Response('Error processing form submission', {
            status: 500,
        });
    }
}
