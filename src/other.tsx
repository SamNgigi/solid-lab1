import { css } from "../styled-system/css";

export type AvatarProps = { name: string; size?: number | null };

export default function Avatar(props: AvatarProps) {
  const size = () => props.size ?? 48;
  const initials = () =>
    props.name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0].toUpperCase())
      .join("");

  return (
    <div
      class={avatar}
      style={{
        "--avatar-size": `${size()}px`,
        "--avatar-font-size": `${size() / 2.5}px`,
      }}
    >
      {initials()}
    </div>
  );
}

const avatar = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "[0.5rem]", // '2' in panda-css
  borderRadius: "[50%]",
  background: "[#446b9e]",
  color: "white",
  fontFamily: "[sans-serif]",
  fontWeight: "bold",
  width: "var(--avatar-size)",
  height: "var(--avatar-size)",
  fontSize: "var(--avatar-font-size)",
});
