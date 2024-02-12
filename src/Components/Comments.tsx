import React, { useEffect, useState } from "react";
import { Users } from "./Users";
import "../index.css";

export function Comments() {
  const [comments, setComments] = useState([] as Users[]);
  const [errorMessage, setErrorMessage] = useState("");

  async function load() {
    try {
      const response = await fetch("http://localhost:3000/api/comments");
      if (!response.ok) {
        setErrorMessage("Hiba a letöltéskor");
        return;
      }
      const content = (await response.json()) as Users[];
      setComments(content);
    } catch {
      setErrorMessage("Hiba a letöltéskor");
    }
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <h2 id="kommentek">Comments</h2>
      {comments.map((a) => (
        <>
          <table>
            <tr id="tabla">
              <td>
                <img src={a.avatar} alt="sex" id="avatar" />
              </td>
              <td>
                <a href="mailto:">{a.email}</a>

                <br />
                <br />
                {a.content}
              </td>
            </tr>
          </table>
        </>
      ))}
      <p>{errorMessage}</p>
    </div>
  );
}
