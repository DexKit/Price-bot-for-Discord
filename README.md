# Discord Price Bot (KIT token)

This Discord bot provides real-time updates on the price of a specific asset (KIT) using data from a provided API (using CoinGecko actually). The bot fetches the current price at regular intervals and updates the name of a designated channel in your Discord server.

## Features

- **Real-Time Price Updates**: The bot fetches the current price of the specified asset from the provided API and updates the Discord channel's name accordingly.

- **Easy Setup**: Minimal configuration required. Just set up a channel in your server, copy the channel ID, and configure the bot using environment variables.

- **Error Handling**: Includes basic error handling to capture exceptions during the price fetching process.

## Getting Started

### Prerequisites

- Python 3.x
- Discord.py library
- Requests library
- Bot token for this service. Get yours at [Discord Developers Site](discordapp.com/developers/applications)

### Installation

1. **Clone the repository or download the code**

2. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3. **Configure the bot:**

    Create a `.env` file in the root directory of the project. You can use the provided `.env.example` as a template:

    ```bash
    CHANNEL_ID=your_channel_id_here
    API_URL=your_api_url_here
    BOT_TOKEN=your_bot_token_here
    ```

    Replace `your_channel_id_here`, `your_api_url_here`, and `your_bot_token_here` with your actual channel ID, API URL, and bot token.

4. **Run the bot:**

    ```bash
    python3 KIT_price_bot.py
    ```

    The bot will now update the designated channel with the latest price information.

### Additional Notes

- Ensure the bot has the necessary permissions to read messages, manage channels, and perform other actions in your server.

- Adjust the update interval (`seconds=60`) in the script according to your preferences, considering rate limits and API usage policies.

- Monitor the console output for error messages or debugging information.

### Contributing

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.
