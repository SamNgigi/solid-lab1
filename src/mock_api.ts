import { createMemo } from "solid-js";

/** START: 5.30 Mutations: Optimistic Stores */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// INFO: A pretend server holding the todo list. Saves take 800;
type Todo = { id: number; text: string; done: boolean };
let serverTodos: Todo[] = [
  { id: 1, text: "Learn actions", done: true },
  { id: 2, text: "Learn optimistic stores", done: false },
];
let nextId = 3;
export const api = {
  failNext: false,
  async list() {
    await sleep(100);
    return structuredClone(serverTodos);
  },
  async toggle(id: number) {
    await sleep(800);
    if (api.failNext) {
      api.failNext = false;
      throw new Error("The server rejected the change.");
    }
    serverTodos = serverTodos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  },
  async add(todo: Todo) {
    await sleep(800);
    serverTodos = [...serverTodos, todo];
  },
};

export const newId = () => nextId++;
export { type Todo };
/** END: 5.30 Mutations: Optimistic Stores */

/** START: 5.26 Async: Reveal Order */
type User = { name: string };
type Post = { id: number; text: string };
type Trivia = { id: number; text: string };

export default function fetchProfileData() {
  const user = createMemo<User>(fetchUser);
  const posts = createMemo<Post[]>(fetchPosts);
  const trivia = createMemo<Trivia[]>(fetchTrivia);
  return { user, posts, trivia };
}

function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Ringo Starr",
      });
    }, 500);
  });
}

let ringoPosts = [
  {
    id: 0,
    text: "I get by with a little help from my friends",
  },
  {
    id: 1,
    text: "I'd like to be under the sea in an octupus's garden",
  },
  {
    id: 2,
    text: "You got the sand all over your feet",
  },
];

function fetchPosts(): Promise<Post[]> {
  let ringoPostsAtTheTime = ringoPosts;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ringoPostsAtTheTime);
    }, 800);
  });
}

function fetchTrivia(): Promise<Trivia[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 0,
          text: "The nickname 'Ringo' came from his habit of wearing numerous rings.",
        },
        {
          id: 1,
          text: "Plays the drum left-handed with a right-handed drum set",
        },
        {
          id: 2,
          text: "Nominated for one Daytime Emmy Award, but did not win",
        },
      ]);
    }, 200);
  });
}

export type { User, Post, Trivia };

/** END: 5.26 Async: Reveal Order */
