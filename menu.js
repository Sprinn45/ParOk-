let lang = "ua";

const menuContainer = document.getElementById("menu");
const langButtons = document.querySelectorAll(".lang-btn");
const searchInput = document.getElementById("search");

// Вставляємо menuData тут повністю (ua, en, de) — твій об’єкт з 219 позиціями
const menuData = { /*let lang = "ua";

const menuData = {
  ua: {
    "Закуски": [
      { name: "Оселедець", desc: "Маринована цибуля, грінки · 250 г", price: "14€" },
      { name: "Сальна тарілка", desc: "Три види сала, гірчиця, часник, цибуля · 250 г", price: "20€" },
      { name: "Риба тарань", desc: "100 г", price: "8€" },
      { name: "Снеки", desc: "В асортименті · 100 г", price: "8€" }
    ],
    "Основні страви": [
      { name: "Котлети", desc: "Свинина, яловичина, індичка, курка · 2 шт", price: "18€" },
      { name: "Котлетки рублені (курячі)", desc: "2 шт · 200 г", price: "16€" },
      { name: "Пельмені", desc: "Три види м’яса · зі сметаною · 250 г", price: "12€" },
      { name: "Вареники", desc: "Начинки на вибір · 250 г", price: "11€" },
      { name: "Курка гриль", desc: "100 г", price: "30/35€" },
      { name: "Відбивна (свинина)", desc: "", price: "20€" },
      { name: "М'ясо по-французьки", desc: "", price: "19€" },
      { name: "Хліб", desc: "", price: "2.50€" }
    ],
    "Гарніри": [
      { name: "Картопля по-селянськи", desc: "З соусами · 200 г", price: "10€" },
      { name: "Картопля смажена", desc: "З грибами · 200 г", price: "10€" },
      { name: "Картопляне пюре", desc: "200 г", price: "8€" },
      { name: "Гречка", desc: "200 г", price: "8€" },
      { name: "Овочі гриль", desc: "350 г", price: "8€" }
    ],
    "Гаряче": [
      { name: "Борщ (яловичина)", desc: "Зі сметаною · 350 г", price: "15€" },
      { name: "Грибна юшка", desc: "Мікс грибів · 300 г", price: "17€" }
    ],
    "Салати": [
      { name: "Квашена капуста", desc: "250 г", price: "10€" },
      { name: "Овочевий", desc: "250 г", price: "10€" },
      { name: "Грецький", desc: "Фета, маслини · 250 г", price: "11€" },
      { name: "Вітамінний", desc: "250 г", price: "10€" },
      { name: "Олів'є (курка)", desc: "200 г", price: "14€" },
      { name: "Цезар", desc: "250 г", price: "16€" }
    ],
    "Напої": [
      {
        type: "Алкогольні",
        items: [
          { name: "Corona", desc: "Пиво 0.3 л", price: "5€" },
          { name: "Wezelnburger", desc: "Пиво 0.5 л", price: "5€" },
          { name: "Weizenburger alcoholfrei", desc: "Пиво 0.5 л", price: "5€" },
          { name: "Goldbraun", desc: "Пиво 0.5 л", price: "5€" },
          { name: "Nemiroff", desc: "Горілка шот 3.5€ · 0.7 л", price: "45€" },
          { name: "Stolichnaya", desc: "Горілка шот 4€ · 0.7 л", price: "50€" },
          { name: "Finlandia", desc: "Горілка шот 4€ · 0.7 л", price: "50€" },
          { name: "Grey Goose", desc: "Горілка шот 8.5€ · 0.7 л", price: "120€" },
          { name: "Schnaps", desc: "Горілка шот 3.8€ · 1 л", price: "38€" },
          { name: "Jack Daniel’s", desc: "Віскі шот 5.5€ · 0.7 л", price: "75€" },
          { name: "Chivas Regal", desc: "Віскі шот 5.5€ · 0.7 л", price: "75€" },
          { name: "La Gioiosa", desc: "Просекко бокал 0.2 л · пляшка 0.7 л", price: "8€ / 30€" },
          { name: "Mionetto", desc: "Просекко бокал 0.2 л · пляшка 0.7 л", price: "10€ / 35€" }
        ]
      },
      {
        type: "Безалкогольні",
        items: [
          { name: "Квас (чорний / білий)", desc: "0.5 л", price: "5€" },
          { name: "Borjomi", desc: "0.5 л", price: "5€" },
          { name: "Соки (томатний / яблучний / апельсиновий)", desc: "0.3 л", price: "4€" },
          { name: "Coca-Cola / Zero", desc: "0.3 л", price: "4.50€" },
          { name: "Fanta / Sprite", desc: "0.3 л", price: "4.50€" },
          { name: "Чай (чорний / зелений)", desc: "0.3 л", price: "3€" },
          { name: "Кава (еспресо / американо)", desc: "", price: "3€" }
        ]
      }
    ]
  },

  en: {
    "Starters": [
      { name: "Herring", desc: "Pickled onion, croutons · 250 g", price: "14€" },
      { name: "Lard platter", desc: "Three types of cured lard · 250 g", price: "20€" },
      { name: "Snacks", desc: "Assortment · 100 g", price: "8€" },
      { name: "Dried fish", desc: "100 g", price: "8€" }
    ],
    "Main dishes": [
      { name: "Cutlets", desc: "Mixed meat · 2 pcs", price: "18€" },
      { name: "Chopped chicken cutlets", desc: "2 pcs · 200 g", price: "16€" },
      { name: "Dumplings", desc: "Three kinds of meat · 250 g", price: "12€" },
      { name: "Varenyky", desc: "Choice of fillings · 250 g", price: "11€" },
      { name: "Grilled chicken", desc: "100 g", price: "30/35€" },
      { name: "Pork schnitzel", desc: "", price: "20€" },
      { name: "French-style meat", desc: "", price: "19€" },
      { name: "Bread", desc: "", price: "2.50€" }
    ],
    "Side dishes": [
      { name: "Country-style potatoes", desc: "With sauces · 200 g", price: "10€" },
      { name: "Fried potatoes", desc: "With mushrooms · 200 g", price: "10€" },
      { name: "Mashed potatoes", desc: "200 g", price: "8€" },
      { name: "Buckwheat", desc: "200 g", price: "8€" },
      { name: "Grilled vegetables", desc: "350 g", price: "8€" }
    ],
    "Hot dishes": [
      { name: "Borscht (beef)", desc: "Served with sour cream · 350 g", price: "15€" },
      { name: "Mushroom soup", desc: "Mixed mushrooms · 300 g", price: "17€" }
    ],
    "Salads": [
      { name: "Sauerkraut", desc: "250 g", price: "10€" },
      { name: "Fresh vegetable salad", desc: "250 g", price: "10€" },
      { name: "Greek salad", desc: "Feta, olives · 250 g", price: "11€" },
      { name: "Vitamin salad", desc: "Cabbage, cucumber, greens · 250 g", price: "10€" },
      { name: "Olivier salad (chicken)", desc: "200 g", price: "14€" },
      { name: "Caesar salad", desc: "250 g", price: "16€" }
    ],
    "Drinks": [
      {
        type: "Alcohol",
        items: [
          { name: "Corona", desc: "Beer 0.3 l", price: "5€" },
          { name: "Wezelnburger", desc: "Beer 0.5 l", price: "5€" },
          { name: "Weizenburger alcohol-free", desc: "Beer 0.5 l", price: "5€" },
          { name: "Goldbraun", desc: "Beer 0.5 l", price: "5€" },
          { name: "Nemiroff", desc: "Vodka shot 3.5€ · bottle 0.7 l", price: "45€" },
          { name: "Stolichnaya", desc: "Vodka shot 4€ · bottle 0.7 l", price: "50€" },
          { name: "Finlandia", desc: "Vodka shot 4€ · bottle 0.7 l", price: "50€" },
          { name: "Grey Goose", desc: "Vodka shot 8.5€ · bottle 0.7 l", price: "120€" },
          { name: "Schnaps", desc: "Vodka shot 3.8€ · 1 l", price: "38€" },
          { name: "Jack Daniel’s", desc: "Whisky shot 5.5€ · bottle 0.7 l", price: "75€" },
          { name: "Chivas Regal", desc: "Whisky shot 5.5€ · bottle 0.7 l", price: "75€" },
          { name: "La Gioiosa", desc: "Prosecco glass 0.2 l · bottle 0.7 l", price: "8€ / 30€" },
          { name: "Mionetto", desc: "Prosecco glass 0.2 l · bottle 0.7 l", price: "10€ / 35€" }
        ]
      },
      {
        type: "Non-alcoholic",
        items: [
          { name: "Kvass (dark / light)", desc: "0.5 l", price: "5€" },
          { name: "Borjomi", desc: "0.5 l", price: "4.50€" },
          { name: "Juices (tomato / apple / orange)", desc: "0.3 l", price: "4€" },
          { name: "Coca-Cola / Zero", desc: "0.3 l", price: "4.50€" },
          { name: "Fanta / Sprite", desc: "0.3 l", price: "4.50€" },
          { name: "Tea (black / green)", desc: "0.3 l", price: "3€" },
          { name: "Coffee (espresso / americano)", desc: "", price: "3€" }
        ]
      }
    ]
  },

  de: {
    "Vorspeisen": [
      { name: "Hering", desc: "Eingelegte Zwiebeln, Croutons · 250 g", price: "14€" },
      { name: "Speckplatte", desc: "Drei Sorten Speck · 250 g", price: "20€" },
      { name: "Getrockneter Fisch", desc: "100 g", price: "8€" },
      { name: "Snacks", desc: "Sortiment · 100 g", price: "8€" }
    ],
    "Hauptgerichte": [
      { name: "Frikadellen", desc: "Gemischtes Fleisch · 2 Stk", price: "18€" },
      { name: "Gehackte Hähnchenkoteletts", desc: "2 Stk · 200 g", price: "16€" },
      { name: "Pelmeni", desc: "Drei Fleischsorten · 250 g", price: "12€" },
      { name: "Wareniki", desc: "Füllung nach Wahl · 250 g", price: "11€" },
      { name: "Gegrilltes Hähnchen", desc: "100 g", price: "30/35€" },
      { name: "Schweineschnitzel", desc: "", price: "20€" },
      { name: "Fleisch nach französischer Art", desc: "", price: "19€" },
      { name: "Brot", desc: "", price: "2.50€" }
    ],
    "Beilagen": [
      { name: "Bratkartoffeln nach Bauernart", desc: "Mit Soßen · 200 g", price: "10€" },
      { name: "Gebratene Kartoffeln", desc: "Mit Pilzen · 200 g", price: "10€" },
      { name: "Kartoffelpüree", desc: "200 g", price: "8€" },
      { name: "Buchweizen", desc: "200 g", price: "8€" },
      { name: "Gegrilltes Gemüse", desc: "350 g", price: "8€" }
    ],
    "Warme Speisen": [
      { name: "Borschtsch (Rind)", desc: "Mit Sauerrahm · 350 g", price: "15€" },
      { name: "Pilzsuppe", desc: "Pilzmischung · 300 g", price: "17€" }
    ],
    "Salate": [
      { name: "Sauerkraut", desc: "250 g", price: "10€" },
      { name: "Frischer Gemüsesalat", desc: "250 g", price: "10€" },
      { name: "Griechischer Salat", desc: "Feta, Oliven · 250 g", price: "11€" },
      { name: "Vitaminsalat", desc: "Kohl, Gurke, Kräuter · 250 g", price: "10€" },
      { name: "Olivier-Salat (Huhn)", desc: "200 g", price: "14€" },
      { name: "Caesar Salat", desc: "250 g", price: "16€" }
    ],
    "Getränke": [
      {
        type: "Alkoholische",
        items: [
          { name: "Corona", desc: "Bier 0.3 l", price: "5€" },
          { name: "Wezelnburger", desc: "Bier 0.5 l", price: "5€" },
          { name: "Weizenburger alkoholfrei", desc: "Bier 0.5 l", price: "5€" },
          { name: "Goldbraun", desc: "Bier 0.5 l", price: "5€" },
          { name: "Nemiroff", desc: "Wodka Shot 3.5€ · Flasche 0.7 l", price: "45€" },
          { name: "Stolichnaya", desc: "Wodka Shot 4€ · Flasche 0.7 l", price: "50€" },
          { name: "Finlandia", desc: "Wodka Shot 4€ · Flasche 0.7 l", price: "50€" },
          { name: "Grey Goose", desc: "Wodka Shot 8.5€ · Flasche 0.7 l", price: "120€" },
          { name: "Schnaps", desc: "Wodka Shot 3.8€ · 1 l", price: "38€" },
          { name: "Jack Daniel’s", desc: "Whisky Shot 5.5€ · Flasche 0.7 l", price: "75€" },
          { name: "Chivas Regal", desc: "Whisky Shot 5.5€ · Flasche 0.7 l", price: "75€" },
          { name: "La Gioiosa", desc: "Prosecco Glas 0.2 l · Flasche 0.7 l", price: "8€ / 30€" },
          { name: "Mionetto", desc: "Prosecco Glas 0.2 l · Flasche 0.7 l", price: "10€ / 35€" }
        ]
      },
      {
        type: "Alkoholfreie",
        items: [
          { name: "Kvass (dunkel / hell)", desc: "0.5 l", price: "5€" },
          { name: "Borjomi", desc: "0.5 l", price: "4.50€" },
          { name: "Säfte (Tomate / Apfel / Orange)", desc: "0.3 l", price: "4€" },
          { name: "Coca-Cola / Zero", desc: "0.3 l", price: "4.50€" },
          { name: "Fanta / Sprite", desc: "0.3 l", price: "4.50€" },
          { name: "Tee (schwarz / grün)", desc: "0.3 l", price: "3€" },
          { name: "Kaffee (Espresso / Americano)", desc: "", price: "3€" }
        ]
      }
    ]
  }
};
*/ };

// Перемикання мови
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    searchInput.value = "";
    renderMenu();
  });
});

// Пошук страви
searchInput.addEventListener("input", () => {
  renderMenu(searchInput.value.toLowerCase());
});

function renderMenu(search = "") {
  menuContainer.innerHTML = "";
  const data = menuData[lang];

  for (const category in data) {
    const catTitle = document.createElement("h2");
    catTitle.textContent = category;
    menuContainer.appendChild(catTitle);

    const catItems = data[category];

    if (category === "Напої" || category === "Drinks" || category === "Getränke") {
      catItems.forEach(subCat => {
        const subTitle = document.createElement("h3");
        subTitle.textContent = subCat.type;
        menuContainer.appendChild(subTitle);

        subCat.items.forEach(item => {
          if (item.name.toLowerCase().includes(search)) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");
            itemDiv.innerHTML = `<strong>${item.name}</strong> - ${item.price}<br><small>${item.desc}</small>`;
            menuContainer.appendChild(itemDiv);
          }
        });
      });
    } else {
      catItems.forEach(item => {
        if (item.name.toLowerCase().includes(search)) {
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("menu-item");
          itemDiv.innerHTML = `<strong>${item.name}</strong> - ${item.price}<br><small>${item.desc}</small>`;
          menuContainer.appendChild(itemDiv);
        }
      });
    }
  }
}

renderMenu();
