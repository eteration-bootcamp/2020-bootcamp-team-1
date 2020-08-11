import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import * as data from "./dummy.json";

const Requestor = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const onClick2 = async () => {
    const items = JSON.parse(localStorage.getItem("itemsArray")) || [];
    const namesUnique = [...new Set(items.map(item => item.title))];
    console.log(namesUnique);
  };

  const onClick = async () => {
    try {
      setLoading(true);
      setFailed(false);

      const oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];

      const response = await fetch(
        `https://yummly2.p.rapidapi.com/feeds/list?tag=list.recipe.popular&limit=18&start=${count +
          1}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "yummly2.p.rapidapi.com",
            "x-rapidapi-key":
              "c92cdc6648mshb0dea232c3a695bp184cb1jsn279e6c857a8d"
          }
        }
      );
      const responseJson = await response.json().then(json => json.feed);

      const tidied = responseJson.map(item => {
        const desc =
          item.content.description && !item.content.description.text.trim()
            ? item.display.displayName
            : item.content.description;
        const obj = {
          title: item.display.displayName,
          description: item.content.description
            ? desc.text
              ? desc.text
              : item.display.displayName
            : item.display.displayName,
          prepTime: item.content.details.totalTime,
          serving: item.content.details.numberOfServings,
          chefTips: item.content.details.keywords.join(),
          image: item.display.images[0],
          imageType: "TYPE_URL",
          ingredients: [
            ...item.content.ingredientLines.map(ing => {
              return { name: ing.wholeLine };
            })
          ],
          directions: item.content.preparationSteps
            ? [
                ...item.content.preparationSteps.map((step, index) => {
                  return { stepNumber: index, description: step };
                })
              ]
            : []
        };

        oldItems.push(obj);
        return obj;
      });
      console.log(tidied);

      localStorage.setItem("itemsArray", JSON.stringify(oldItems));
      setCount(count + 1);
    } catch (error) {
      setFailed(true);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button disabled={loading} onClick={onClick} size="lg">
        Magic Button
      </Button>
      {count !== 0 ? (
        loading ? (
          <p>Loading ...</p>
        ) : failed ? (
          <p>Request {count} is failed</p>
        ) : (
          <p>Request {count} is completed.</p>
        )
      ) : (
        undefined
      )}
      <Button onClick={onClick2}> TEST </Button>
    </div>
  );
};

export default Requestor;
