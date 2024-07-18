addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    if (request.method === 'POST') {
      const data = await request.json();
      const id = `form-${Date.now()}`;
      await FORM_DATA.put(id, JSON.stringify(data));
      return new Response('Data stored successfully', { status: 200 });
    }
    return new Response('Method not allowed', { status: 405 });
  }
  