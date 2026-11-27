const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * INFO:
 * A Pretend chat server. Sending returns quickly, but the message only
 * shows up in the live feed a second later, once the server has stored it.
 * */
type Message = { id: string; text: string };
let messages: Message[] = [{ id: "welcome", text: "Welcome to the chat!" }];
type Listener = (list: Message[]) => void;
const listeners = new Set<Listener>();

export const server = {
  async send(message: Message): Promise<void> {
    await sleep(150);
    setTimeout(() => {
      messages = [...messages, message];
      for (const listener of listeners) {
        return listener(messages);
      }
    }, 1000);
  },

  // INFO: The live feed: yields the full list now, then again after every change.
  async *watch(): AsyncGenerator<Message[], never, void> {
    yield messages;
    while (true) {
      yield await new Promise<Message[]>((resolve) => {
        const listener: Listener = (list) => {
          listeners.delete(listener);
          resolve(list);
        };
        listeners.add(listener);
      });
    }
  },
};

export { type Message };
