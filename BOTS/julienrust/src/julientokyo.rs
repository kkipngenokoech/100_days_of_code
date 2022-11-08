extern crate futures;
extern crate telegram_bot;
extern crate tokio_core;

use std::env

use futures::{Future, Stream}
use tokio_core::reactor::{Handle, Core}
use telegram_bot::*;

fn where_is_tokyo(api: Api, message: Message, handle: Handle){
    let api_future = || Ok(api.clone());
    let future = api.send(message.Location_reply(35.652832,139.839478).live_period(60)).join(api_future());
    handle.spawn(future.then(|_| Ok(())))
}

fn main () {
    let token = env::var("5788128485:AAE3ESKH9sefinFFCVroKZdMtfMC4RoruAw").unwrap();
    let mut core = Core::new().unwrap();
    let handle = core.handle();
    let api = Api::configure(token).build(core.handle()).unwrap();
    let future = api.stream().for_each(|update|{
        if let UpdateKind::Message(message) = update.kind {
            where_is_tokyo(api.clone(), message.clone(), handle.clone())
        }
        Ok(())
    });
    core.run(future).unwrap();
}