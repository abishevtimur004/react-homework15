import { useTheme } from "../providers/ThemeProvaider";
import classNames from "classnames";

export default function SettingsPage() {
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <>
      <h1 className="page-title1">Настройки</h1>
      <div className="theme">
        <p className="theme-text">Ночная тема</p>
        <div
          className={classNames("toggle", {
            toggle__active: isLightTheme,
          })}
          onClick={toggleTheme}
        >
          <span className="toggle-round"></span>
        </div>
        <p className="theme-text">Светлая тема</p>
      </div>
    </>
  );
}
