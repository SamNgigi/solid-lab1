import { Loading } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { mainContainer } from "@/components/recipes/layout.recipe";

import fetchProfileData from "./mock_api";
import ProfilePage from "@/components/ui/other";

function App() {
  const { user, posts, trivia } = fetchProfileData();
  return (
    <div class={mainContainer}>
      <Loading>
        <ProfilePage user={user()} posts={posts()} trivia={trivia()} />
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
