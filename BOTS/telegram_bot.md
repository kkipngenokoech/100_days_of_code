# TELEGRAM BOT

for telegram web development, there are generally two methods that you can use:

1. polling
2. webhooks.

## polling

this method polls/pulls any messages received by the bot to the server.

for such bots, we need the server running 24/7.

## webhooks

this means that whenever your bot receives a new message, telegram will send that update to your pre-defined webhooks endpoint.

it sends payloads, this payload contains:

1. users username
2. what the message is
3. the time of sending the message

from our custom endpoint then we are free to do whatever you want we it. and we can also respond to it.

this means that we will use serverless functions

### cloudflare

register for an account at [cloudfare](https://cloudflare.com)

## REGISTRATION OF YOUR BOT USERNAME

to create a telegram bot, first you have to register your bot at @BotFather in telegram.

after registration, you will have been given an API you will be using to communicate with the telegram bot.

## CODING THE BOT

create an environment for it: `mkdir kingjulien` and cd into it.

pipenv a telegram python-bot environment. `pipenv install python-telegram-bot`.

this package would help us interact with the telegram API.

from there you can start coding your Bot!

## HOSTING THE BOT
