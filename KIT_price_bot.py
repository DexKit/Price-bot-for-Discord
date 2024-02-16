import discord
from discord.ext import tasks
import requests
from dotenv import load_dotenv
import os

load_dotenv()

intents = discord.Intents.all()
bot = discord.Client(intents=intents)

CHANNEL_ID = int(os.getenv('CHANNEL_ID'))
API_URL = os.getenv('API_URL')

@bot.event
async def on_ready():
    print(f'{bot.user} connected to Discord!')
    update_channel.start()

@tasks.loop(seconds=60)
async def update_channel():
    try:
        print("Updating price...")

        response = requests.get(API_URL)
        print(f'HTTP status: {response.status_code}')
        print(f'Content: {response.text}')
        
        data = response.json()
        current_price = data.get('dexkit', {}).get('usd')

        if current_price is not None:
            channel = bot.get_channel(CHANNEL_ID)
            if channel is not None:
                await channel.edit(name=f'KIT Price: ${current_price}')
                print(f'Price updated: KIT Price: ${current_price}')
            else:
                print("Can't find the channel")
        else:
            print("Answer contains invalid data")
    except Exception as e:
        print(f'Error fetching price: {e}')

bot.run(os.getenv('BOT_TOKEN'))
