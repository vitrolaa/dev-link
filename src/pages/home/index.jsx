import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";

import { Sun, Moon, Github, Instagram, Youtube, Linkedin } from "lucide-react";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

import "./styles.css";

export function Home() {
  const { toggleTheme } = useTheme();

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/vitrolaa");

        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuario", error);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <div id="container">
        <img id="image" src={user.avatar_url} alt="" width={112} />

        <h1 className="title">@{user.login}</h1>

        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>

        <div id="botoes">
          <button className="botaoLink">Inscreva-se no NLW</button>
          <button className="botaoLink">Baixe meu e-book</button>
          <button className="botaoLink">Veja meu portifólio</button>
          <button className="botaoLink">Conheça o explorer</button>
        </div>

        <div id="icons">
          <a href="https://github.com/vitrolaa">
            {" "}
            <Github></Github>
          </a>

          <a href="https://www.instagram.com/">
            <Instagram></Instagram>
          </a>

          <a href="https://www.youtube.com/watch?v=RSVcgq9lLVQ&t=66s">
            <Youtube></Youtube>
          </a>

          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
            <Linkedin></Linkedin>
          </a>
        </div>
      </div>
    </>
  );
}
