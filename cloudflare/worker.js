export default {
    async fetch(request, env, ctx) {
      try {
        const CHANNEL_ID = env.CHANNEL_ID;
        const API_URL = env.API_URL;
        const BOT_TOKEN = env.BOT_TOKEN;
  
        const fetchOptions = {
          method: 'PATCH',
          headers: {
            'Authorization': `Bot ${BOT_TOKEN}`,
            'Content-Type': 'application/json',
          },
        };
  
        const updatePrice = async () => {
          try {
            const response = await fetch(API_URL);
  
            if (!response.ok) {
              throw new Error(`Error fetching price: ${response.statusText}`);
            }
  
            const data = await response.json();
            const currentPrice = data.dexkit?.usd;
  
            if (currentPrice === undefined) {
              throw new Error("Invalid data received");
            }
  
            const discordAPIEndpoint = `https://discord.com/api/v9/channels/${CHANNEL_ID}`;
            const body = JSON.stringify({ name: `KIT Price: $${currentPrice}` });
            const res = await fetch(discordAPIEndpoint, { ...fetchOptions, body });
  
            if (!res.ok) {
              throw new Error(`Error updating channel name: ${res.statusText}`);
            }
  
            console.log(`Price updated: KIT Price: $${currentPrice}`);
          } catch (error) {
            console.error('Error updating price:', error);
            throw new Error('Error: An error occurred while updating the price.');
          }
        };
  
        await updatePrice();
  
        setInterval(async () => {
          await updatePrice();
        }, 60 * 1000);
  
        return new Response('Price update process initiated.', { status: 200 });
      } catch (error) {
        console.error('Error processing request:', error);
        return new Response('Error: An error occurred while processing the request.', { status: 500 });
      }
    },
  };
  