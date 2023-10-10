import logoPython from "../../../assets/img/logos/logo-python.png";
import logonumpy from "../../../assets/img/logos/logo-numpy.png";
import logoReact from "../../../assets/img/logos/logo-react.png";
import logonodejs from "../../../assets/img/logos/logo-nodejs.png";
import logojavascript from "../../../assets/img/logos/logo-js.png";
import logojava from "../../../assets/img/logos/logo-java.png";
import logolibgdx from "../../../assets/img/logos/logo-libgdx.png";
import logoPHP from "../../../assets/img/logos/logo-php.png";
import logocomposer from "../../../assets/img/logos/logo-composer.png";
import logohtmlcss from "../../../assets/img/logos/logo-html-css.png";
import logoAndroidStudio from "../../../assets/img/logos/logo-android-studio.png";
import logovercel from "../../../assets/img/logos/logo-vercel.png";
import logospring from "../../../assets/img/logos/logo-spring-boot.png";
import logoangular from "../../../assets/img/logos/logo-angular.png";
import logotypescript from "../../../assets/img/logos/logo-typescript.png";
import logonestjs from "../../../assets/img/logos/logo-nestjs.png";
import logoKotlin from "../../../assets/img/logos/logo-kotlin.png";
import projImg from "../../../assets/img/projects-images/project-no-preview.jpg";
import projAbandonned from "../../../assets/img/projects-images/project-abandonned.jpg";
import projInProgImg from "../../../assets/img/projects-images/project-in-progress.jpg";
import charadle1 from "../../../assets/img/projects-images/charadle1.png";
import charadle2 from "../../../assets/img/projects-images/charadle2.png";
import charadle3 from "../../../assets/img/projects-images/charadle3.png";
import charadle4 from "../../../assets/img/projects-images/charadle4.png";
import dpiscine1 from "../../../assets/img/projects-images/dpiscine1.png";
import dpiscine2 from "../../../assets/img/projects-images/dpiscine2.png";
import dpiscine3 from "../../../assets/img/projects-images/dpiscine3.png";
import obstacl1 from "../../../assets/img/projects-images/obstacl1.png";
import obstacl2 from "../../../assets/img/projects-images/obstacl2.png";
import obstacl3 from "../../../assets/img/projects-images/obstacl3.png";
import ppit1 from "../../../assets/img/projects-images/ppit1.png";
import ppit2 from "../../../assets/img/projects-images/ppit2.png";
import ppit3 from "../../../assets/img/projects-images/ppit3.png";
import ppit4 from "../../../assets/img/projects-images/ppit4.png";

export const projects = [
    {
        title: "Georges",
        resumeen: "Archive cleaning tool",
        resumefr: "Nettoyage d'archives",
        descriptionen: "\"Georges\" enables the cleaning of archives through case-based reasoning. This project was carried out as part of the Introduction to Research course in my Computer Science Master's program at the University of Lorraine. It was developed in collaboration with Persée, a Support and Research Unit at ENS Lyon and CNRS. Entirely written in Python, the tool developed yielded very satisfactory results across all provided documents. These efforts led to the publication of a <a href=\"https://delegate.iccbr2023.org/res/paper_18.pdf\">paper</a> at the 2023 International Conference on Case-Based Reasoning.<br>For more information, you can visit the project's <a href=\"github.com/Amaroke/Georges\">GitHub repository</a>.",
        descriptionfr: "\"Georges\" permet grâce au raisonnement à partir de cas de nettoyer des archives. Ce projet a été réalisé, dans le cadre de l'UE Initiation à la Recherche de mon Master Informatique à l'Université de Lorraine. Il a été réalisé en collaboration avec Persée, une Unité de Support et de Recherche de l'ENS de Lyon et du CNRS. Entièrement écris en Python l'outil développé à permis d'obtenir des résultats très satisfaisants sur l'ensemble des documents fournis. Ces travaux ont menés à la publication d'un <a href=\"https://delegate.iccbr2023.org/res/paper_18.pdf\">article</a> à l'occasion de l'International Conference on Case-Based Reasoning de 2023.<br>Pour plus d'informations, vous pouvez consulter le <a href=\"github.com/Amaroke/Georges\">dépôt GitHub</a> du projet.",
        imgUrl1: projImg,
        imglang1: logoPython,
        imglang2: logonumpy,
        lang1: "Python",
        lang2: "NumPy"
    },
    {
        title: "DPiscine",
        resumeen: "Agenda management website",
        resumefr: "Site de gestion d'agenda",
        descriptionen: "DPiscine is a web application using Node.js, implementing an API, managing a user account system, and featuring a calendar interface for planning multi-user events. It was developed during my first year of master's with two other friends.<br/><br/>You can access the GitHub repository by following this link:<br/><a href=\"https://github.com/Amaroke/ProjetDPiscine\">GitHub Repository</a>",
        descriptionfr: "DPiscine est une application web utilisant node.js, et implémentant une API, gérant un système de gestion de comptes d'utilisateurs et une interface présentant un calendrier, utilisé pour planifier des évènements à plusieurs. Il a été développé lors de ma première année de master avec deux autres amis.<br/><br/>Vous pouvez accéder au dépôt github en suivant ce lien :<br/><a href=\"https://github.com/Amaroke/ProjetDPiscine\">https://github.com/Amaroke/ProjetDPiscine</a>",
        imgUrl1: dpiscine1,
        imgUrl2: dpiscine2,
        imgUrl3: dpiscine3,
        imglang1: logonodejs,
        imglang2: logojavascript,
        imglang3: logohtmlcss,
        lang1: "NodeJS",
        lang2: "Javascript",
        lang3: "Html/Css"
    },
    {
        title: "ObstACL-Tower",
        resumeen: "Roguelike game",
        resumefr: "Jeu de type roguelike",
        descriptionen: "ObstACL-Tower is a video game developed by a team of four during my first year of master's studies. For its development, we applied an agile development method, similar to Scrum, involving multiple sprints. The game evolves gradually over the sprints, transitioning from a text-based version to a graphical one, and eventually incorporating features like a labyrinth, exits, monsters, and more. This project provided an opportunity to apply software analysis and design principles and collaborate as a team to develop an interactive game with a graphical user interface using LibGDX and Java.<br/><br/>You can access the GitHub repository by following this link:<br/><a href=\"https://github.com/Amaroke/ObstACL-Tower\">https://github.com/Amaroke/ObstACL-Tower</a>",
        descriptionfr: "ObstACL-Tower est un jeu vidéo développé en équipe de quatre pendant ma première année de master, pour son développement nous avons appliqué une méthode de développement agile, similaire à scrum, incluant plusieurs sprints. Le jeu évolue progressivement au fil des sprints, passant de la version texte à une version graphique, puis à une version incluant un labyrinthe, des sorties, des monstres, et d'autres fonctionnalités. Ce projet était donc une opportunité d'appliquer les principes de l'analyse et de la conception de logiciels, ainsi que de travailler en équipe pour développer un jeu interactif avec une interface utilisateur graphique, utilisant LibGDX et Java.<br/><br/>Vous pouvez accéder au dépôt github en suivant ce lien :<br/><a href=\"https://github.com/Amaroke/ObstACL-Tower\">https://github.com/Amaroke/ObstACL-Tower</a>",
        imgUrl1: obstacl1,
        imgUrl2: obstacl2,
        imgUrl3: obstacl3,
        imglang1: logojava,
        imglang2: logolibgdx,
        lang1: "Java",
        lang2: "LibGDX"
    },
    {
        title: "Golden-PPIT",
        resumeen: "Event organization website",
        resumefr: "Site web d'organisation d'évènements",
        descriptionen: "Golden-PPIT is a web application developed in PHP as part of the \"Introduction to Software Engineering\" course by a group of 8 individuals. This application provides a comprehensive range of features focused on user and event management. With a user-friendly interface and flexible functionalities, Golden-PPIT aims to simplify the management of events, requirements, and users, while offering advanced options for super-users. This achievement demonstrates the commitment and skills of the group in creating a robust and functional web application.<br/><br/>You can access the GitHub repository by following this link:<br/><a href=\"https://github.com/Amaroke/Golden-PPIT\">https://github.com/Amaroke/Golden-PPIT</a>",
        descriptionfr: "Golden-PPIT est une application développée en PHP, dans le cadre du cours de \"Premier Pas en Ingénierie Logiciel\" (PPIL) par un groupe de 8 personnes. Cette application offre une gamme complète de fonctionnalités axées sur la gestion des utilisateurs et des événements. Avec une interface conviviale et des fonctionnalités flexibles, Golden-PPIT vise à simplifier la gestion d'événements, de besoins et d'utilisateurs, tout en offrant des options avancées pour les super-utilisateurs. Cette réalisation démontre l'engagement et les compétences du groupe dans la création d'une application web robuste et fonctionnelle.<br/><br/>Vous pouvez accéder au dépôt github en suivant ce lien :<br/><a href=\"https://github.com/Amaroke/Golden-PPIT\">https://github.com/Amaroke/Golden-PPIT</a>",
        imgUrl1: ppit1,
        imgUrl2: ppit2,
        imgUrl3: ppit3,
        imgUrl4: ppit4,
        imglang1: logoPHP,
        imglang2: logohtmlcss,
        imglang3: logocomposer,
        lang1: "PHP",
        lang2: "Html/Css",
        lang3: "Composer"
    },
    {
        title: "PlatVenture",
        resumeen: "Platformer game",
        resumefr: "Jeu de plateforme",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
        imglang1: logojava,
        imglang2: logolibgdx,
        imglang3: logoAndroidStudio,
        lang1: "Java",
        lang2: "LibGDX",
        lang3: "Android Studio"
    },
    {
        title: "PuissanceQuatre",
        resumeen: "Connect Four game AI",
        resumefr: "IA d'un jeu de puissance 4",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
        imglang1: logojava,
        lang1: "Java"
    },
];

export const perso_projects = [
    {
        title: "Charadle",
        resumeen: "Character guessing web game",
        resumefr: "Jeu web de devinettes de personnages",
        descriptionen: "Charadle is a web application developed in React, that offers a game where players have to guess a character from manga or anime based on an image. Several hint systems are available. The site uses the MyAnimeList API and performs some automated data collection to obtain information about the characters. Additionally, users can personalize their experience by connecting their own MyAnimeList list by entering their username. The backend is hosted on the Vercel platform.<br/>I completely developed this project on my own in end of summer 2023.<br/><br/>You can access the application by following this link:<br/><a href=\"https://amaroke.github.io/Charadle\">https://amaroke.github.io/Charadle</a><br/>And the GitHub repository by following this one:<br/><a href=\"https://github.com/Amaroke/Charadle\">https://github.com/Amaroke/Charadle</a>",
        descriptionfr: "Charadle est une application web développée en React qui propose un jeu où l'on doit deviner un personnage de manga ou d'animé à partir d'une image. Plusieurs systèmes d'indices sont disponibles. Le site utilise l'API de MyAnimeList et effectue un peu de collecte de données automatisée pour obtenir des informations sur les personnages. De plus, il est possible d'utiliser sa propre liste MyAnimeList en renseignant son pseudonyme. Le backend est hébergé sur la plateforme Vercel.<br/>J'ai entièrement réalisé ce projet seul lors de la fin de l'été 2023.<br/><br/>Vous pouvez accéder à l'application en suivant ce lien :<br/><a href=\"https://amaroke.github.io/Charadle\">https://amaroke.github.io/Charadle</a><br/>Et au dépôt github en suivant celui-ci :<br/><a href=\"https://github.com/Amaroke/Charadle\">https://github.com/Amaroke/Charadle</a>",
        imgUrl1: charadle1,
        imgUrl2: charadle2,
        imgUrl3: charadle3,
        imgUrl4: charadle4,
        imglang1: logoReact,
        imglang2: logohtmlcss,
        imglang3: logojavascript,
        imglang4: logovercel,
        lang1: "ReactJS",
        lang2: "Html/Css",
        lang3: "Javascript",
        lang4: "Vercel"
    },
    {
        title: "Quantify",
        resumeen: "Web application for a estimation-based game",
        resumefr: "Application web pour un jeu basé sur le principe d'estimation",
        descriptionen: "XXX",
        descriptionfr: "XXX",
        imgUrl1: projInProgImg,
        imglang1: logospring,
        imglang2: logoangular,
        imglang3: logohtmlcss,
        imglang4: logotypescript,
        lang1: "Spring Boot",
        lang2: "Angular",
        lang3: "Html/Css",
        lang4: "Typescript"
    },
    {
        title: "Achievo",
        resumeen: "Common objectives web application",
        resumefr: "Application web d'objectifs en commun",
        descriptionen: "\"Achievo\" is a web application currently in development, with the aim for me to experimente with the Angular framework for the front-end and the Nest.js framework for the back-end. The application allows users to create shared goals (for example: \"Read 5 books in one week\"), offers progress tracking, and includes a reward system.<br/><br/>You can track the progress of this application by visiting this link:<br/><a href=\"https://amaroke.github.io/Achievo\">https://amaroke.github.io/Achievo</a><br/>And access the GitHub repository by following this link:<br/><a href=\"https://github.com/Amaroke/Achievo\">https://github.com/Amaroke/Achievo<a>",
        descriptionfr: "\"Achievo\" est une application web en cours de développement que je développe seul dans le but d'expérimenter le framework Angular pour le front-end et le framework Nest.js pour le back-end. L'application permet à des utilisateurs de créer des objectifs en commun (exemple : Lire 5 livres en une semaine), propose un suivi de la progression, et un système de récompense.<br/><br/>Vous pouvez suivre la progression de cette application en suivant ce lien :<br/><a href=\"https://amaroke.github.io/Achievo\">https://amaroke.github.io/Achievo</a><br/>Et au dépôt github en suivant celui-ci :<br/><a href=\"https://github.com/Amaroke/Achievo\">https://github.com/Amaroke/Achievo</a>",
        imgUrl1: projInProgImg,
        imglang1: logonestjs,
        imglang2: logoangular,
        imglang3: logotypescript,
        imglang4: logohtmlcss,
        lang1: "NestJS",
        lang2: "Angular",
        lang3: "Typescript",
        lang4: "Html/Css"
    },
    {
        title: "BibliAuxLivres",
        resumeen: "Library web application",
        resumefr: "Application web de bibliotèque",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projInProgImg,
        imglang1: logospring,
        imglang2: logoReact,
        imglang3: logonodejs,
        lang1: "Spring Boot",
        lang2: "ReactJS",
        lang3: "NodeJS"
    },
    {
        title: "Yurei Esports",
        resumeen: "Esport team website",
        resumefr: "Site web d'une équipe d'esport",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
        imglang1: logoReact,
        imglang2: logojavascript,
        imglang3: logohtmlcss,
        lang1: "ReactJS",
        lang2: "Javascript",
        lang3: "Html/Css"
    },
    {
        title: "MakeMoreMeat",
        resumeen: "Incremental Android game",
        resumefr: "Application Android d'un jeu incrémental",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projAbandonned,
        imglang1: logoKotlin,
        imglang2: logoAndroidStudio,
        lang1: "Kotlin",
        lang2: "Android Studio"
    }
];