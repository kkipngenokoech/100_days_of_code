# JulienReply

## [julien.rb](julien.rb)

1. require('telegram_bot') - makes the telegram gem we installed available in our ruby file.
2. get_updates() - this gets our bot instance instantiated, to listen for incoming messages, it also outputs the message to our console.

### message

there's a message object returned by telegram API

1. message_id = the unique identifier for this specific message.
2. from = this is the user who sent the message.
3. chat = the chat/channel information
4. date = when the message was sent
5. text = the text of the message
6. reply_to_message = the message that this message will reply to.

## reply()

this method we are going to send a reply back to the user.
