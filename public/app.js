document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------
     LOGIN MODAL FUNCTIONS
  -------------------------- */
  const modal = document.getElementById("authModal");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLogin = document.getElementById("tabLogin");
  const tabRegister = document.getElementById("tabRegister");
  const modalCloseBtn = document.querySelector("#authModal .close-btn");

  function openModal(type) {
      modal.style.display = "flex";
      switchTab(type);
  }
  function closeModal() {
      modal.style.display = "none";
  }
  function switchTab(type) {
      if (type === "login") {
          loginForm.style.display = "block";
          registerForm.style.display = "none";
          tabLogin.style.color = "white";
          tabRegister.style.color = "#aaa";
      } else {
          loginForm.style.display = "none";
          registerForm.style.display = "block";
          tabLogin.style.color = "#aaa";
          tabRegister.style.color = "white";
      }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  window.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
  });

  // НЭВТРЭХ / БҮРТГҮҮЛЭХ товчийг ажиллуулна
  document.querySelector(".login-btn").addEventListener("click", function () {
      openModal("login");
  });
  document.querySelector(".signup-btn").addEventListener("click", function () {
      openModal("register");
  });

  /* --------------------------
     QUIZ PANEL CONTROL
  -------------------------- */
  const quizPanel = document.getElementById("quizPanel");
  const quizContent = document.getElementById("quizContent");
  const quizSubmitBtn = document.getElementById("quizSubmitBtn");
  const quizScoreText = document.getElementById("quizScoreText");
  const quizCloseBtn = document.getElementById("quizCloseBtn");

  function openQuizPanel() {
      quizPanel.style.display = "block";
      setTimeout(() => (quizPanel.style.opacity = 1), 20);
  }

  function closeQuizPanelPanel() {
      quizPanel.style.opacity = 0;
      setTimeout(() => (quizPanel.style.display = "none"), 250);
  }

  quizCloseBtn.addEventListener("click", closeQuizPanelPanel);

  /* --------------------------
     DROPDOWN CLICK LOGIC
  -------------------------- */
  document.querySelectorAll(".dropdown").forEach(drop => {
      const btn = drop.querySelector(".dropdown-btn");
      const content = drop.querySelector(".dropdown-content");

      btn.addEventListener("click", (e) => {
          e.stopPropagation();

          document.querySelectorAll(".dropdown-content").forEach(c => {
              if (c !== content) c.style.display = "none";
          });

          content.style.display =
              content.style.display === "block" ? "none" : "block";
      });
  });

  document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-content")
          .forEach(c => c.style.display = "none");
  });

  /* ------------------------------------
     ТАНИН МЭДЭХҮЙН АСУУЛТЫН БАНК (100)
  ------------------------------------ */
  const KNOWLEDGE_BANK = [
  {
    question: "Цэнхэр, шар өнгөний дундаас ямар өнгө гардаг вэ?",
    choices: ["Улаан", "Ногоон", "Ягаан", "Хүрэн"],
    correctIndex: 1
  },
  {
    question: "Монгол Улсын Үндсэн хууль хэдэн бүлэгтэй вэ?",
    choices: ["4", "5", "6", "7"],
    correctIndex: 2
  },
  {
    question: "\"Бачим\" гэж ямар утгыг илэрхийлж байна вэ?",
    choices: ["Удаан", "Гэнэтийн", "Яаралтай", "Түргэн"],
    correctIndex: 3
  },
  {
    question: "Монгол бичигт \"мэнэхэй\" гэж ямар амьтныг бичдэг вэ?",
    choices: ["Загас", "Могой", "Туулай", "Мэлхий"],
    correctIndex: 3
  },
  {
    question: "Хүргэний хүүхдийг юу гэдэг вэ?",
    choices: ["Ач", "Гуч", "Зээ", "Үр"],
    correctIndex: 2
  },
  {
    question: "Үнэгний зулзагыг юу гэж нэрлэдэг вэ?",
    choices: ["Ботго", "Тонгорох", "Гавар", "Зулзага"],
    correctIndex: 2
  },
  {
    question: "Монголын хамгийн сүүлчийн хааны хатан хэн бэ?",
    choices: ["Сүхбаатарын Янжмаа", "Сорхагтани Бэхи", "Дондогдулам", "Мандухай"],
    correctIndex: 2
  },
  {
    question: "Дэлхийн хэдэн хувийг ус эзэлдэг вэ?",
    choices: ["50%", "65%", "71%", "80%"],
    correctIndex: 2
  },
  {
    question: "Хүний биеийн хэдэн хувийг ус эзэлдэг вэ?",
    choices: ["55%", "60%", "70%", "75%"],
    correctIndex: 2
  },
  {
    question: "Монгол Улсын төв цэг аль аймагт байдаг вэ?",
    choices: ["Архангай аймаг", "Төв аймаг", "Дундговь аймаг", "Өвөрхангай аймаг"],
    correctIndex: 3
  },
  {
    question: "Цаглавар гэж юуг хэлдэг вэ?",
    choices: ["Одон орны үзэгдэл", "Цаг агаарын мэдээ", "Цаг тооны бичиг", "Сарны тоолол"],
    correctIndex: 2
  },
  {
    question: "Хүн амьтны дүрстэй хүүхдийн тоглоомын ерөнхий нэр нь юу вэ?",
    choices: ["Бөмбөг", "Наадам", "Хүүхэлдэй", "Хөдөлгөөнт тоглоом"],
    correctIndex: 2
  },
  {
    question: "Маш нарийн зөөлөн ноосыг юу гэж нэрлэдэг вэ?",
    choices: ["Сарлагийн хөөвөр", "Үс", "Ноос", "Ноолуур"],
    correctIndex: 3
  },
  {
    question: "Дэлхийн төв цэгт байдаг улс, түүний нийслэл хот аль нь вэ?",
    choices: [
      "Бразил, Бразилиа хот",
      "Эквадор, Кито хот",
      "Габон, Либревиль хот",
      "Конго, Киншаса хот"
    ],
    correctIndex: 1
  },
  {
    question: "Шатарт хүний дүрстэй хэдэн дүрс байдаг вэ? (Дүрсийн нэрсийг харгалзан)",
    choices: [
      "2 (ноён, бэрс)",
      "3 (ноён, хүү, бэрс)",
      "4 (ноён, бэрс, хүү, морь)",
      "6 (бүх дүрс)"
    ],
    correctIndex: 1
  },
  {
    question: "\"Монголын Нууц Товчоо\"-нд гардаг Улсын Гоо Ван хэн бэ?",
    choices: ["Боорчи", "Зэв", "Борохул", "Мухулай"],
    correctIndex: 3
  },
  {
    question: "Шавьжны нэртэй орд аль нь вэ?",
    choices: ["Хонь", "Үхэр", "Хилэнц", "Мэлхий"],
    correctIndex: 2
  },
  {
    question: "Дэлхийн хамгийн жижиг хот улс аль нь вэ?",
    choices: ["Монако", "Науру", "Сан-Марино", "Ватикан"],
    correctIndex: 3
  },
  {
    question: "\"Монголын Нууц Товчоо\"-нд гардаг Торголжин баяны гэргийг хэн гэдэг вэ?",
    choices: ["Өүлэн эх", "Алунгоо эх", "Бөртэ үжин", "Монголожингуа"],
    correctIndex: 3
  },
  {
    question: "Ван Ханы хөвгүүний нэр хэн бэ?",
    choices: ["Жамүха", "Тоорил", "Билгэ", "Сэнгүм"],
    correctIndex: 3
  },
  {
    question: "Чингис хааны бага хатны нэр хэн бэ?",
    choices: ["Бөртэ", "Есүхэн", "Хулан", "Есүй"],
    correctIndex: 2
  },
  {
    question: "Монголын хамгийн өндөрт оршдог сум аль нь вэ?",
    choices: [
      "Цэцэрлэг (Архангай)",
      "Улаанбаатар (Баян-Өлгий)",
      "Дуут (Ховд)",
      "Баян-Өлгий (Баян-Өлгий)"
    ],
    correctIndex: 2
  },
  {
    question: "Ёлын ам аль аймагт байдаг вэ?",
    choices: ["Ховд", "Хөвсгөл", "Архангай", "Өмнөговь"],
    correctIndex: 3
  },
  {
    question: "Архангай аймгийн төв хот юу гэдэг вэ?",
    choices: ["Эрдэнэбулган", "Хархорин", "Цэцэрлэг", "Өндөр-Улаан"],
    correctIndex: 2
  },
  {
    question: "Хамгийн анхны Монгол кино ямар нэртэйгээр бүтээгдсэн бэ?",
    choices: ["Намрын синдром", "Сэрэлт", "Монгол хүү", "Цогт тайж"],
    correctIndex: 2
  },
  {
    question: "Шилийг юунаас гарган авдаг вэ?",
    choices: ["Элс", "Шавар", "Төмөр", "Чулуу"],
    correctIndex: 0
  },
  {
    question: "Өмнөговь аймгийн төв хот юу гэдэг вэ?",
    choices: ["Мандалговь", "Арвайхээр", "Даланзадгад", "Баруун-Урт"],
    correctIndex: 2
  },
  {
    question: "Чингис хаан хамгийн сүүлд ямар улстай байлдсан бэ?",
    choices: ["Хятад (Сүн)", "Тангуд", "Хорезм", "Алтан улс"],
    correctIndex: 1
  },
  {
    question: "Тэмээ усаа хаанаа нөөцөлдөг вэ?",
    choices: ["Ходоод", "Бөх", "Хөл", "Сүүл"],
    correctIndex: 1
  },
  {
    question: "Тод бичгийг хэн зохиосон бэ?",
    choices: ["Намхайжамц", "Аюуш гүүш", "Зая Бандида", "Хорхог"],
    correctIndex: 2
  },
  {
    question: "Анаашны хэл хэдэн см урттай вэ?",
    choices: ["30 см", "45 см", "75 см", "60 см"],
    correctIndex: 1
  },
  {
    question: "Адууны цөсний уут нь хаанаа байдаг вэ?",
    choices: ["Зүрхнийхээ дэргэд", "Элгэндээ", "Уутгүй", "Сүүлэндээ"],
    correctIndex: 2
  },
  {
    question: "Агаар мандлын хэдэн хувийг Оксиген (O₂) эзэлдэг вэ?",
    choices: ["15%", "20.95%", "25%", "30%"],
    correctIndex: 1
  },
  {
    question: "Анхны зар сурталчилгаа хаана, хэдийд үүссэн бэ?",
    choices: [
      "АНУ, 1776 он",
      "Франц, 1889 он",
      "Англи, 1472 он",
      "Ром, 100 он"
    ],
    correctIndex: 2
  },
  {
    question: "Аалз хэдэн хөлтэй вэ?",
    choices: ["4", "8", "6", "10"],
    correctIndex: 1
  },
  {
    question: "Алуурчин халим нь далайн хамгийн хурдан амьтны нэг ба цагт хэдэн км хурдалдаг вэ?",
    choices: ["300 км/ц", "561 км/ц", "150 км/ц", "80 км/ц"],
    correctIndex: 1
  },
  {
    question: "Богд Хан уул хэдэн амтай вэ?",
    choices: ["12", "20", "32", "40"],
    correctIndex: 2
  },
  {
    question: "Бөднө шувуу нэг удаа өндөглөхдөө хэдийг гаргадаг вэ?",
    choices: ["25", "15", "10", "30"],
    correctIndex: 1
  },
  {
    question: "Бөхөнгийн эрийг юу гэж нэрлэдэг вэ?",
    choices: ["Гурамсаг", "Хяр", "Хонгор", "Гирээ"],
    correctIndex: 1
  },
  {
    question: "Гахайны үр төлийг юу гэдэг вэ?",
    choices: ["Ишиг", "Боодог", "Торой", "Зулзага"],
    correctIndex: 2
  },
  {
    question: "Говьд цэцэглэж ургадаг бэлчээрийн ургамал аль нь вэ?",
    choices: ["Хөмөл", "Таана", "Суль", "Бударгана"],
    correctIndex: 1
  },
  {
    question: "Данзанравжаа \"Саран хөхөө\" дуулалт жүжгээ хэдэн онд бичсэн бэ?",
    choices: ["1770 он", "1830 он", "1900 он", "1880 он"],
    correctIndex: 1
  },
  {
    question: "Да хүрээг 1911 оноос эхлэн юу гэж нэрлэх болсон бэ?",
    choices: ["Улаанбаатар", "Өргөө", "Нийслэл Хүрээ", "Их Хүрээ"],
    correctIndex: 2
  },
  {
    question: "Далайн уур амьсгалаар хүнийг эмчилдэг эмчилгээг юу гэдэг вэ?",
    choices: ["Гидро эмчилгээ", "Усан эмчилгээ", "Талассо эмчилгээ", "Нүүр засал"],
    correctIndex: 2
  },
  {
    question: "Дархан цаазат Богд Хан уулын хамгийн өндөр цэг аль нь вэ?",
    choices: ["Баянзүрх", "Түшээ гүн", "Цэцээ гүн", "Чойжингийн овоо"],
    correctIndex: 2
  },
  {
    question: "Дэлхий дээр 400 жил бороо ороогүй цөл аль нь вэ?",
    choices: ["Сахар", "Говь", "Калахари", "Чилийн Атакама"],
    correctIndex: 3
  },
  {
    question: "Араб бичгийг хаанаасаа эхлэн бичдэг вэ?",
    choices: ["Зүүнээсээ баруун", "Дээрээсээ доош", "Баруунаасаа зүүн", "Доороосоо дээш"],
    correctIndex: 2
  },
  {
    question: "Дэнлүүний баярыг хаана тэмдэглэдэг вэ?",
    choices: ["Япон", "Солонгос", "Хятад", "Вьетнам"],
    correctIndex: 2
  },
  {
    question: "Дэлхий дээр хэдэн жилийн өмнө бичиг үсэг үүссэн бэ?",
    choices: ["1000 жил", "3000 жил", "7000 жил", "5000 жил"],
    correctIndex: 3
  },
  {
    question: "Дэлхийн хамгийн том элсэн цөл аль нь вэ?",
    choices: ["Сахар", "Атакама", "Говь", "Арабын цөл"],
    correctIndex: 0
  },
  {
    question: "Дэлхийн хамгийн чийглэг улс аль нь вэ?",
    choices: ["Индонез", "Бразил", "Филиппин", "Энэтхэг"],
    correctIndex: 3
  },
  {
    question: "Ямаагаараа дэлхийд тэргүүлдэг орон аль нь вэ?",
    choices: ["Монгол", "Энэтхэг", "Хятад", "Нигери"],
    correctIndex: 2
  },
  {
    question: "ДОХ-ын эсрэг компьютерийн тоглоомыг ямар улсад зохиосон бэ?",
    choices: ["Швейцарь", "АНУ", "Япон", "Канад"],
    correctIndex: 0
  },
  {
    question: "Загас яагаад нүдээ аньдаггүй вэ?",
    choices: [
      "Нүдний булчингүй учир",
      "Усны даралтаас болж",
      "Аньсагагүй учир",
      "Харанхуйд харах хэрэгтэй учир"
    ],
    correctIndex: 2
  },
  {
    question: "Зааны ясан сийлбэрээр чимэглэсэн үнэт гутал хаана байдаг вэ?",
    choices: [
      "Үндэсний түүхийн музейд",
      "Угсаатны зүйн музейд",
      "Дүрслэх урлагийн музейд",
      "Богд Хааны Ордон музейд"
    ],
    correctIndex: 3
  },
  {
    question: "Ингэний сүүгээр хийсэн ундааг юу гэдэг вэ?",
    choices: ["Айраг", "Хоормог", "Аарц", "Ээзгий"],
    correctIndex: 1
  },
  {
    question: "Зэрлэг гахайн 2 настайг нь юу гэдэг вэ?",
    choices: ["Торой", "Бодон", "Ховс", "Зулзага"],
    correctIndex: 2
  },
  {
    question: "Манай оронд хэдэн оноос галт тэрэг явж эхэлсэн бэ?",
    choices: ["1924 он", "1938 он", "1955 он", "1949 он"],
    correctIndex: 3
  },
  {
    question: "\"Маамуу нааш ир\" дууны шүлгийн зохиогч хэн бэ?",
    choices: ["Д. Нацагдорж", "Б. Явуухулан", "Ч. Лхамсүрэн", "О. Дашбалбар"],
    correctIndex: 2
  },
  {
    question: "Матар хэд насладаг вэ?",
    choices: ["30–50 жил", "80–100 жил", "60–70 жил", "120–150 жил"],
    correctIndex: 1
  },
  {
    question: "Монгол Улсын хилийн нийт урт хэд вэ?",
    choices: ["5600 км", "6800 км", "8161 км, 895 м", "7545 км"],
    correctIndex: 2
  },
  {
    question: "Монгол Улсын хамгийн өндөр цэг аль нь вэ?",
    choices: ["Сутай хайрхан", "Отгонтэнгэр уул", "Хүйтний оргил", "Мөнххайрхан уул"],
    correctIndex: 2
  },
  {
    question: "Монголд морин өртөө хэдийд үүссэн бэ?",
    choices: [
      "1189 он, Чингис хааны үед",
      "1229 он, Хубилай хааны үед",
      "1320 он, Өгэдэй хааны үед",
      "1206 он, Их Монгол улс байгуулагдсан үед"
    ],
    correctIndex: 2
  },
  {
    question: "Монгол Улс газар нутгаараа дэлхийд хэддүгээрт ордог вэ?",
    choices: ["12", "18", "15", "25"],
    correctIndex: 1
  },
  {
    question: "Москвагийн Кремлийг анх юугаар барьсан бэ?",
    choices: ["Чулуу", "Тоосго", "Мод", "Бетон"],
    correctIndex: 2
  },
  {
    question: "Монголын хамгийн нам дор газар аль нь вэ?",
    choices: ["Хяргас нуурын хотгор", "Увс нуурын хотгор", "Буйр нуур", "Хөх нуурын хотгор"],
    correctIndex: 3
  },
  {
    question: "Монгол Улсын газар нутгийн хэмжээ ямар байна гэж хуулинд заасан байдаг вэ?",
    choices: ["1:1", "1:2", "2:1", "1:3"],
    correctIndex: 1
  },
  {
    question: "Монгол Улсын хамгийн том газар нутагтай аймаг аль нь вэ?",
    choices: ["Дорнод", "Хөвсгөл", "Өмнөговь", "Архангай"],
    correctIndex: 2
  },
  {
    question: "Жирхийн арьсыг яагаад гэрт оруулдаггүй вэ?",
    choices: [
      "Аянга буух аюултай",
      "Үнэр нь таагүй",
      "Муу ёртой гэж үздэг",
      "Өвчин эмгэг дагуулдаг"
    ],
    correctIndex: 0
  },
  {
    question: "Монгол хэл нь ямар хэлний бүлэгт хамаарагддаг вэ?",
    choices: [
      "Энэтхэг-Европ язгуурын",
      "Сино-Төвд язгуурын",
      "Алтай язгуурын",
      "Урал язгуурын"
    ],
    correctIndex: 2
  },
  {
    question: "Могойн чих хаанаа байдаг вэ?",
    choices: ["Могой чихгүй", "Хүзүүн дээрээ", "Толгой дээрээ", "Арьсан доогуураа"],
    correctIndex: 0
  },
  {
    question: "Монголын радио хэдэн онд байгуулагдсан бэ?",
    choices: [
      "1921 оны 07 сар",
      "1934 оны 09 сар",
      "1945 оны 10 сар",
      "1950 оны 01 сар"
    ],
    correctIndex: 1
  },
  {
    question: "Нарийн жалгыг юу гэж нэрлэдэг вэ?",
    choices: ["Гуу", "Хавцал", "Хөндий", "Суваг"],
    correctIndex: 3
  },
  {
    question: "Нэг мөч хэдэн минуттай тэнцэх вэ?",
    choices: ["5", "10", "15", "30"],
    correctIndex: 2
  },
  {
    question: "Таавар: Дуба сохор дундаа ганц нүдтэй, тэр юу вэ?",
    choices: ["Гүц", "Худаг", "Зүү, тэвнэ", "Эмээл"],
    correctIndex: 2
  },
  {
    question: "Туйл аялгуулан уншихыг яах гэдэг вэ?",
    choices: ["Магтах", "Хайлах", "Унших", "Дуулах"],
    correctIndex: 1
  },
  {
    question: "Эрдэнэзуу хийд хэдэн суваргатай вэ?",
    choices: ["64", "81", "128", "108"],
    correctIndex: 3
  },
  {
    question: "Арслангийн эмийг нь юу гэдэг вэ?",
    choices: ["Эм арслан", "Барын зулзага", "Арслан", "Эрслэн"],
    correctIndex: 3
  },
  {
    question: "Далайн хавч ямар цустай вэ?",
    choices: ["Улаан", "Шар", "Цэнхэр", "Тунгалаг"],
    correctIndex: 2
  },
  {
    question: "Монголын хаан ширээнд хамгийн олон жил төр барьсан хаан хэн бэ?",
    choices: ["Батмөнх (Даян хаан)", "Хубилай хаан", "Чингис хаан", "Өгэдэй хаан"],
    correctIndex: 0
  },
  {
    question: "Сая төллөсөн эх малын хөхнөөс гарах шим тэжээлийг юу гэдэг вэ?",
    choices: ["Сүү", "Аарц", "Ээдэм", "Гал уураг"],
    correctIndex: 3
  },
  {
    question: "Монголын \"Зууны шилдэг роман\" аль нь вэ?",
    choices: ["\"Хүний мөр\"", "\"Үүлэн заяа\"", "\"Тунгалаг Тамир\"", "\"Анхны алхам\""],
    correctIndex: 2
  },
  {
    question: "\"Зууны шилдэг роман\"-ы зохиогч нь хэн бэ?",
    choices: ["Д. Нацагдорж", "Б. Ринчен", "С. Эрдэнэ", "Ч. Лодойдамба"],
    correctIndex: 3
  },
  {
    question: "\"Дацан\" гэж юуг хэлдэг вэ?",
    choices: ["Сүм хийд", "Номын сан", "Лам хуврагийн сургууль", "Буддын шашны ном"],
    correctIndex: 2
  },
  {
    question: "Өвчүү гэдэсний их үсийг юу гэдэг вэ?",
    choices: ["Унжлага", "Сүүдэл", "Ноолуур", "Саваг"],
    correctIndex: 3
  },
  {
    question: "Ямар амьтан урагшаа явж чаддаггүй вэ?",
    choices: ["Заан", "Матар", "Имж", "Шоргоолжин арслан"],
    correctIndex: 2
  },
  {
    question: "Ямар амьтан нуруугаараа дээш харан хэвтэж чаддаг вэ?",
    choices: ["Муур", "Нохой", "Хүн", "Сармагчин"],
    correctIndex: 2
  },
  {
    question: "Ямар шувуу усан доогуур нисдэг вэ?",
    choices: ["Оцон шувуу", "Гангараа", "Нугас", "Цахлай"],
    correctIndex: 0
  },
  {
    question: "Монголын анхны доктор хэн бэ?",
    choices: ["Ц. Дамдинсүрэн", "Ж. Самбуу", "Б. Ринчен", "Ш. Лувсанвандан"],
    correctIndex: 2
  },
  {
    question: "\"Хурдан борлог морины эзэн\" зохиолыг хэн бичсэн бэ?",
    choices: ["Д. Нацагдорж", "Ч. Лодойдамба", "Д. Сэнгэ", "С. Эрдэнэ"],
    correctIndex: 1
  },
  {
    question: "Монголын хатад хөсгөө юугаар түүдэг байсан бэ?",
    choices: ["Өтгөн", "Торгомсог", "Утас", "Хөвөн"],
    correctIndex: 2
  },
  {
    question: "Өндрийг юугаар тэмдэглэдэг вэ?",
    choices: ["(урт)", "(өндөр)", "(өргөн)", "(диаметр)"],
    correctIndex: 1
  },
  {
    question: "Хүн хоногт хичнээн хэмжээний агаар амьсгалдаг вэ?",
    choices: ["5 кг", "8 кг", "15 кг", "12 кг"],
    correctIndex: 3
  },
  {
    question: "Айлд орсон хүн яаж суухыг цээрлэдэг вэ?",
    choices: ["Хөлөө жийж", "Сөгдөж", "Цомцойж буюу явган", "Гэмтэж"],
    correctIndex: 2
  },
  {
    question: "Тог руу яагаад шээдэггүй вэ?",
    choices: ["Гал гарах аюултай", "Бохирдох аюултай", "Хориотой учир", "Цахилгаантай учир"],
    correctIndex: 3
  },
  {
    question: "\"Газар шороондоо би хайртай\" шүлгийн зохиогч хэн бэ?",
    choices: ["Ш. Дулмаа", "Р. Чойном", "Б. Явуухулан", "О. Дашбалбар"],
    correctIndex: 3
  },
  {
    question: "Хөвөнг юунаас гаргаж авдаг вэ?",
    choices: ["Ургамал", "Ноос", "Мод", "Синтетик материал"],
    correctIndex: 0
  },
  {
    question: "Олсыг юунаас гаргаж авдаг вэ?",
    choices: ["Үс", "Арьс", "Араг яс", "Ургамал"],
    correctIndex: 3
  }
];

  /* --------------------------
     QUIZ GENERATOR
  -------------------------- */
  function shuffle(arr) {
      return arr.map(a => ({ a, r: Math.random() }))
                .sort((x, y) => x.r - y.r)
                .map(x => x.a);
  }

  let currentQuiz = [];

  // Танин мэдэхүй 10 асуулт
  document.getElementById("knowledgeNav").addEventListener("click", (e) => {
      e.preventDefault();

      openQuizPanel();

      const selected = shuffle(KNOWLEDGE_BANK).slice(0, 10);
      currentQuiz = selected;
      renderQuiz();

      document.querySelector(".quiz-title").textContent = "Танин мэдэхүйн тест";
      document.querySelector(".quiz-subtitle").textContent = "10 асуулт";
  });

  function renderQuiz() {
      quizContent.innerHTML = "";

      currentQuiz.forEach((q, index) => {
          const card = document.createElement("div");
          card.className = "quiz-question";
          card.style.background = "rgba(255,255,255,0.05)";
          card.style.padding = "10px";
          card.style.borderRadius = "10px";
          card.style.marginBottom = "10px";

          const title = document.createElement("div");
          title.textContent = `${index + 1}) ${q.question}`;
          title.style.marginBottom = "6px";

          card.appendChild(title);

          q.choices.forEach((choice, idx) => {
              const label = document.createElement("label");
              label.className = "quiz-option";
              label.style.display = "block";
              label.style.fontSize = "13px";
              label.style.marginBottom = "4px";

              const radio = document.createElement("input");
              radio.type = "radio";
              radio.name = `q${index}`;
              radio.value = idx;
              radio.style.marginRight = "6px";

              label.appendChild(radio);
              label.append(` ${choice}`);

              card.appendChild(label);
          });

          quizContent.appendChild(card);
      });
  }

  // Оноо бодох
  quizSubmitBtn.addEventListener("click", () => {
      let score = 0;

      currentQuiz.forEach((q, i) => {
          const selected = document.querySelector(
              `input[name="q${i}"]:checked`
          );
          if (selected && Number(selected.value) === q.correctIndex) {
              score++;
          }
      });

      quizScoreText.textContent = `Оноо: ${score} / ${currentQuiz.length}`;
  });

  /* --------------------------
     АНГИ + ХИЧЭЭЛ
  -------------------------- */
  let selectedGrade = null;
  let selectedSubject = null;

  document.querySelectorAll(".grade-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
          e.preventDefault();
          selectedGrade = btn.dataset.value;
          alert("Сонгосон анги: " + selectedGrade);
      });
  });

  document.querySelectorAll(".subject-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
          e.preventDefault();
          selectedSubject = btn.dataset.value;
          alert("Сонгосон хичээл: " + selectedSubject);
      });
  });
  /* --------------------------
     Хичээлээр тест зохиох
  -------------------------- */
  const SUBJECT_LABELS = {
      math: "Математик",
      mongol: "Монгол хэл",
      literature: "Уран зохиол",
      english: "Англи хэл",
      physics: "Физик",
      chemistry: "Хими",
      biology: "Биологи",
      geography: "Газарзүй",
      history: "Түүх",
      cs: "Мэдээлэл зүй",
  };

  /* --- English Level Test ELEMENTARY 1A – 40 questions --- */
  const ENGLISH_TEST_1A = [
  {
    question: "1. We ___ American.",
    choices: ["not", "not are", "aren’t", "isn’t"],
    correctIndex: 2
  },
  {
    question: "2. ___ this magazine before?",
    choices: ["Do you read", "Are you going to read", "Are you reading", "Have you read"],
    correctIndex: 3
  },
  {
    question: "3. This is our new teacher. ___ name is Mark.",
    choices: ["His", "Her", "Its", "He"],
    correctIndex: 0
  },
  {
    question: "4. He ___ the newspaper every day.",
    choices: ["read", "reads", "doesn’t reads", "don’t reads"],
    correctIndex: 1
  },
  {
    question: "5. Is Mont Blanc ___ mountain in Europe?",
    choices: ["the higher", "the most highest", "the more high", "the highest"],
    correctIndex: 3
  },
  {
    question: "6. British people ___ tea with milk.",
    choices: ["to drink", "drink", "drinks", "are drink"],
    correctIndex: 1
  },
  {
    question: "7. ___ you like Chinese food?",
    choices: ["Do", "Does", "Are", "Is"],
    correctIndex: 0
  },
  {
    question: "8. It’s my ___ computer.",
    choices: ["parents", "parents’", "parent", "parent’s"],
    correctIndex: 1
  },
  {
    question: "9. Could we ___ the bill, please?",
    choices: ["take", "want", "have", "ask"],
    correctIndex: 2
  },
  {
    question: "10. The people ___ in room 12.",
    choices: ["is", "am", "are", "be"],
    correctIndex: 2
  },
  {
    question: "11. It’s ten ___ seven.",
    choices: ["to", "for", "at", "in"],
    correctIndex: 0
  },
  {
    question: "12. I ___ to classical music.",
    choices: ["never to listen", "listen never", "never listen", "don’t never listen"],
    correctIndex: 2
  },
  {
    question: "13. Would you like ___ coffee?",
    choices: ["other", "another", "some other", "more one"],
    correctIndex: 1
  },
  {
    question: "14. I haven’t ___ this photo before.",
    choices: ["see", "saw", "to see", "seen"],
    correctIndex: 3
  },
  {
    question: "15. I can’t see. Where are my ___?",
    choices: ["glasses", "stamps", "keys", "lipsticks"],
    correctIndex: 0
  },
  {
    question: "16. I like ___ in the morning.",
    choices: ["that I work", "working", "work", "to be work"],
    correctIndex: 1
  },
  {
    question: "17. Thanks for ___.",
    choices: ["all", "the all", "everything", "all things"],
    correctIndex: 2
  },
  {
    question: "18. ‘Was Debussy from France?’ ‘Yes, ___.’",
    choices: ["he were", "was", "there were", "he was"],
    correctIndex: 3
  },
  {
    question: "19. I’m Italian. ___ family are from Venice.",
    choices: ["Our", "My", "Her", "Me"],
    correctIndex: 1
  },
  {
    question: "20. What ___ do tomorrow?",
    choices: ["are you going", "you going", "are you going to", "do you go to"],
    correctIndex: 2
  },
  {
    question: "21. Can I pay ___ credit card?",
    choices: ["by", "in", "on", "with"],
    correctIndex: 0
  },
  {
    question: "22. This isn’t my money. It’s ___.",
    choices: ["to you", "the yours", "your", "yours"],
    correctIndex: 3
  },
  {
    question: "23. Tonight’s dinner is ___ than last night’s.",
    choices: ["more good", "gooder", "better", "more better"],
    correctIndex: 2
  },
  {
    question: "24. They’re ___.",
    choices: ["bigs cars", "cars bigs", "big cars", "bigs car"],
    correctIndex: 2
  },
  {
    question: "25. They didn’t ___ the tickets.",
    choices: ["booking", "booked", "to book", "book"],
    correctIndex: 3
  },
  {
    question: "26. ___ the time?",
    choices: ["What’s", "What is it", "What", "What it is"],
    correctIndex: 0
  },
  {
    question: "27. She ___ to the gym every day.",
    choices: ["gets", "goes", "has", "does"],
    correctIndex: 1
  },
  {
    question: "28. I ___ do my homework last night.",
    choices: ["not could", "didn’t can", "couldn’t", "can’t"],
    correctIndex: 2
  },
  {
    question: "29. There ___ telephone in my hotel room.",
    choices: ["wasn’t a", "weren’t a", "weren’t any", "wasn’t some"],
    correctIndex: 0
  },
  {
    question: "30. He ___ playing the piano.",
    choices: ["are", "does", "is", "has"],
    correctIndex: 2
  },
  {
    question: "31. He ___ jeans.",
    choices: ["doesn’t usually wear", "isn’t usually wearing", "wears usually", "doesn’t wear usually"],
    correctIndex: 0
  },
  {
    question: "32. I ___ my new job last week.",
    choices: ["have begun", "began", "am begin", "begin"],
    correctIndex: 1
  },
  {
    question: "33. There isn’t ___ pasta in the kitchen.",
    choices: ["some", "many", "a", "any"],
    correctIndex: 3
  },
  {
    question: "34. She ___ to cook for her boyfriend.",
    choices: ["isn’t going", "isn’t go", "aren’t going", "doesn’t go"],
    correctIndex: 0
  },
  {
    question: "35. The elephant is ___ land animal in the world.",
    choices: ["the bigger", "the most big", "biggest", "the biggest"],
    correctIndex: 3
  },
  {
    question: "36. ___ yesterday?",
    choices: ["You studied", "Did you studied", "Did you study", "Studied you"],
    correctIndex: 2
  },
  {
    question: "37. James would like ___ basketball.",
    choices: ["playing", "to play", "play", "to playing"],
    correctIndex: 1
  },
  {
    question: "38. I always ___.",
    choices: ["work hard", "hard work", "hardly work", "work hardly"],
    correctIndex: 0
  },
  {
    question: "39. We ___ to Canada.",
    choices: ["haven’t be", "hasn’t been", "hasn’t be", "haven’t been"],
    correctIndex: 3
  },
  {
    question: "40. He ___ follow instructions.",
    choices: ["doesn’t can", "not can", "isn’t can", "can’t"],
    correctIndex: 3
  }
];

  const ENGLISH_QUESTIONS = {};
  for (let g = 6; g <= 12; g++) {
      ENGLISH_QUESTIONS[g] = ENGLISH_TEST_1A;
  }

  const SUBJECT_QUESTIONS = {};

  function generateSubjectBank(grade, subjectKey) {
      const label = SUBJECT_LABELS[subjectKey] || subjectKey;
      const bank = [];
      for (let i = 1; i <= 20; i++) {
          bank.push({
              question: `${grade}-р анги ${label} – Асуулт ${i}?`,
              choices: ["Зөв хариулт", "Буруу хариулт 1", "Буруу 2", "Буруу 3"],
              correctIndex: 0
          });
      }
      return bank;
  }

  function getSubjectQuestions(grade, subjectKey) {
      if (!SUBJECT_QUESTIONS[grade]) SUBJECT_QUESTIONS[grade] = {};
      if (!SUBJECT_QUESTIONS[grade][subjectKey]) {
          SUBJECT_QUESTIONS[grade][subjectKey] =
              generateSubjectBank(grade, subjectKey);
      }
      return SUBJECT_QUESTIONS[grade][subjectKey];
  }

  document.getElementById("generateTestBtn").addEventListener("click", (e) => {
      e.preventDefault();

      if (!selectedGrade || !selectedSubject) {
          alert("Эхлээд анги болон хичээлийг сонгоно уу.");
          return;
      }

      const gradeNum = Number(selectedGrade);

      if (selectedSubject === "english") {
          const bank = ENGLISH_QUESTIONS[gradeNum];
          if (!bank || bank.length === 0) {
              alert("Энэ ангийн англи хэлний асуултыг хараахан оруулаагүй байна.");
              return;
          }
          currentQuiz = bank;
      } else {
          currentQuiz = getSubjectQuestions(selectedGrade, selectedSubject);
      }

      openQuizPanel();
      renderQuiz();

      document.querySelector(".quiz-title").textContent =
          `${selectedGrade}-р анги ${SUBJECT_LABELS[selectedSubject]}`;
      document.querySelector(".quiz-subtitle").textContent =
          `${currentQuiz.length} асуулт`;
  });

}); // DOMContentLoaded төгсгөл
