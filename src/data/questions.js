export const QUESTIONS = {
  // ===================== FRONTEND =====================
  frontend: [
    // === FACILE (5) ===
    { id: 1, level: "easy", q: "Quelle balise HTML définit un paragraphe ?", choices: ["<p>", "<div>", "<span>", "<h1>"], answer: "<p>" },
    { id: 2, level: "easy", q: "Quelle propriété CSS change la couleur du texte ?", choices: ["font-size", "color", "background", "text-align"], answer: "color" },
    { id: 3, level: "easy", q: "Quel attribut HTML lie un fichier CSS ?", choices: ["rel", "href", "src", "link"], answer: "href" },
    { id: 4, level: "easy", q: "Quel sélecteur cible une classe CSS ?", choices: [".", "#", ":", "*"], answer: "." },
    { id: 5, level: "easy", q: "Quel langage rend une page interactive ?", choices: ["HTML", "CSS", "JavaScript", "Python"], answer: "JavaScript" },

    // === MOYEN (5) ===
    { id: 6, level: "medium", q: "Quelle méthode JavaScript ajoute un élément à un tableau ?", choices: ["push()", "add()", "insert()", "append()"], answer: "push()" },
    { id: 7, level: "medium", q: "Quelle unité CSS est relative à la taille de la police ?", choices: ["px", "%", "em", "vh"], answer: "em" },
    { id: 8, level: "medium", q: "Quelle balise permet d’intégrer un script JS ?", choices: ["<script>", "<js>", "<code>", "<javascript>"], answer: "<script>" },
    { id: 9, level: "medium", q: "Quelle fonction JS affiche un message dans la console ?", choices: ["print()", "console.log()", "alert()", "msg()"], answer: "console.log()" },
    { id: 10, level: "medium", q: "Quelle propriété CSS rend un conteneur flexible ?", choices: ["grid", "flex", "float", "block"], answer: "flex" },

    // === DIFFICILE (5) ===
    { id: 11, level: "hard", q: "Que fait la méthode map() en JavaScript ?", choices: ["Filtre un tableau", "Crée un nouveau tableau", "Trie un tableau", "Supprime un élément"], answer: "Crée un nouveau tableau" },
    { id: 12, level: "hard", q: "Quelle pseudo-classe CSS sélectionne le premier enfant ?", choices: [":first", ":first-child", ":child(1)", ":nth(1)"], answer: ":first-child" },
    { id: 13, level: "hard", q: "React est une bibliothèque de ?", choices: ["Back-end", "Front-end", "Base de données", "Serveur"], answer: "Front-end" },
    { id: 14, level: "hard", q: "Quelle méthode React permet de gérer un état ?", choices: ["useState()", "setState()", "useEffect()", "getState()"], answer: "useState()" },
    { id: 15, level: "hard", q: "CSS signifie ?", choices: ["Creative Style Script", "Cascading Style Sheets", "Colorful Simple Styles", "Custom Style Setup"], answer: "Cascading Style Sheets" },

    // === EXPERT (5) ===
    { id: 16, level: "expert", q: "Quel hook React gère les effets de bord ?", choices: ["useEffect", "useState", "useReducer", "useMemo"], answer: "useEffect" },
    { id: 17, level: "expert", q: "Quelle est la différence entre == et === en JavaScript ?", choices: ["Aucune", "=== compare aussi le type", "== compare le type", "=== compare la valeur uniquement"], answer: "=== compare aussi le type" },
    { id: 18, level: "expert", q: "Quel outil compile JSX en JS natif ?", choices: ["Babel", "Webpack", "Vite", "ReactDOM"], answer: "Babel" },
    { id: 19, level: "expert", q: "React utilise un DOM ?", choices: ["Réel", "Virtuel", "Physique", "Statique"], answer: "Virtuel" },
    { id: 20, level: "expert", q: "Quel mot-clé déclare une constante en JS ?", choices: ["let", "var", "const", "final"], answer: "const" },
  ],

  // ===================== BACKEND =====================
  backend: [
    // === FACILE (5) ===
    { id: 1, level: "easy", q: "Quel langage est souvent utilisé côté serveur ?", choices: ["PHP", "CSS", "HTML", "JavaScript"], answer: "PHP" },
    { id: 2, level: "easy", q: "Quel SGBD est relationnel ?", choices: ["MySQL", "MongoDB", "Firebase", "Redis"], answer: "MySQL" },
    { id: 3, level: "easy", q: "Que signifie SQL ?", choices: ["Structured Query Language", "Simple Query Language", "Server Query Language", "System Query Language"], answer: "Structured Query Language" },
    { id: 4, level: "easy", q: "Quelle extension pour les fichiers PHP ?", choices: [".ph", ".php", ".html", ".js"], answer: ".php" },
    { id: 5, level: "easy", q: "Quel port par défaut pour MySQL ?", choices: ["3306", "8080", "443", "22"], answer: "3306" },

    // === MOYEN (5) ===
    { id: 6, level: "medium", q: "Quel mot-clé déclare une fonction en PHP ?", choices: ["func", "function", "def", "declare"], answer: "function" },
    { id: 7, level: "medium", q: "Quelle commande affiche du texte en PHP ?", choices: ["echo", "print()", "say()", "display"], answer: "echo" },
    { id: 8, level: "medium", q: "Comment se nomme le fichier principal de configuration MySQL ?", choices: ["my.cnf", "config.sql", "mysql.conf", "server.ini"], answer: "my.cnf" },
    { id: 9, level: "medium", q: "Quelle commande démarre un serveur PHP local ?", choices: ["php -run", "php start", "php -S localhost:8000", "php server"], answer: "php -S localhost:8000" },
    { id: 10, level: "medium", q: "Quelle fonction PHP récupère une variable d’un formulaire (méthode POST) ?", choices: ["$_GET", "$POST", "$_POST", "getPost()"], answer: "$_POST" },

    // === DIFFICILE (5) ===
    { id: 11, level: "hard", q: "Que signifie CRUD ?", choices: ["Create Read Update Delete", "Connect Run Upload Download", "Code Run Update Deploy", "Create Rewrite Undo Debug"], answer: "Create Read Update Delete" },
    { id: 12, level: "hard", q: "Quelle commande MySQL insère des données ?", choices: ["ADD INTO", "INSERT INTO", "PUT INTO", "SAVE INTO"], answer: "INSERT INTO" },
    { id: 13, level: "hard", q: "Quel mot-clé PHP définit une classe ?", choices: ["define", "class", "struct", "new"], answer: "class" },
    { id: 14, level: "hard", q: "En PHP, que signifie PDO ?", choices: ["PHP Database Object", "PHP Data Object", "Program Database Object", "Public Data Output"], answer: "PHP Data Object" },
    { id: 15, level: "hard", q: "Quelle commande MySQL sélectionne toutes les lignes d'une table ?", choices: ["SELECT * FROM table", "GET ALL table", "FETCH table", "SHOW table"], answer: "SELECT * FROM table" },

    // === EXPERT (5) ===
    { id: 16, level: "expert", q: "Quel langage exécute Node.js ?", choices: ["Python", "C++", "JavaScript", "Ruby"], answer: "JavaScript" },
    { id: 17, level: "expert", q: "Quelle commande installe un package Node.js globalement ?", choices: ["npm add", "npm install -g", "node install", "npm setup"], answer: "npm install -g" },
    { id: 18, level: "expert", q: "Quelle est la différence entre MySQL et MongoDB ?", choices: ["MySQL est SQL, MongoDB est NoSQL", "MySQL est plus lent", "MongoDB utilise PHP", "Aucune différence"], answer: "MySQL est SQL, MongoDB est NoSQL" },
    { id: 19, level: "expert", q: "Quel framework Node.js est souvent utilisé pour créer des APIs ?", choices: ["React", "Laravel", "Express", "Flask"], answer: "Express" },
    { id: 20, level: "expert", q: "Quelle commande initialise un projet Node.js ?", choices: ["npm start", "npm init", "node init", "npm setup"], answer: "npm init" },
  ]
};
