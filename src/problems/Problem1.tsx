import React, { useState } from "react";

const Prbl1 = "Amolya Sharma";

function Problem1() {
  const [count, setcount] = useState<{ [key: string]: number }>({});

  let Checkwords: any = {};
  function onCheckWords() {
    for (let i = 0; i < Prbl1.length; i++) {
      const char = Prbl1[i].toLowerCase();
      if (char !== " ") {
        Checkwords[char] = (Checkwords[char] || 0) + 1;
      }
    }

    setcount(Checkwords);
  }

  return (
    <div>
      <button onClick={onCheckWords}>Check Word Frequencies</button>
      <div>
        {Object.entries(count).map(([char, count]) => (
          <div key={char}>
            {char}: {count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problem1;
