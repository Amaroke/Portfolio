import logoPython from "../../../assets/img/logo-python.png";
import logonumpy from "../../../assets/img/logo-numpy.png";
import logoReact from "../../../assets/img/logo-react.png";
import logonodejs from "../../../assets/img/logo-nodejs.png";
import logojavascript from "../../../assets/img/logo-js.png";
import logojava from "../../../assets/img/logo-java.png";
import logolibgdx from "../../../assets/img/logo-libgdx.png";
import logoPHP from "../../../assets/img/logo-php.png";
import logocomposer from "../../../assets/img/logo-composer.png";
import logohtmlcss from "../../../assets/img/logo-html-css.png";
import logoAndroidStudio from "../../../assets/img/logo-android-studio.png";
import logovercel from "../../../assets/img/logo-vercel.png";
import logospring from "../../../assets/img/logo-spring-boot.png";
import logoangular from "../../../assets/img/logo-angular.png";
import logotypescript from "../../../assets/img/logo-typescript.png";
import logonestjs from "../../../assets/img/logo-nestjs.png";
import logoKotlin from "../../../assets/img/logo-kotlin.png";
import projImg from "../../../assets/img/project.jpg";
import charadle1 from "../../../assets/img/charadle1.png";
import charadle2 from "../../../assets/img/charadle2.png";
import charadle3 from "../../../assets/img/charadle3.png";
import charadle4 from "../../../assets/img/charadle4.png";

export const projects = [
    {
        title: "Georges",
        resumeen: "Archive cleaning tool",
        resumefr: "Nettoyage d'archives",
        descriptionen: "\"Georges\" enables the cleaning of archives through case-based reasoning. This project was carried out as part of the Introduction to Research course in my Computer Science Master's program at the University of Lorraine. It was developed in collaboration with Persée, a Support and Research Unit at ENS Lyon and CNRS. Entirely written in Python, the tool developed yielded very satisfactory results across all provided documents. These efforts led to the publication of a <a href=\"https://delegate.iccbr2023.org/res/paper_18.pdf\">paper</a> at the 2023 International Conference on Case-Based Reasoning.<br>For more information, you can visit the project's <a href=\"github.com/Amaroke/Georges\">GitHub repository</a>.",
        descriptionfr: "\"Georges\" permet grâce au raisonnement à partir de cas de nettoyer des archives. Ce projet a été réalisé, dans le cadre de l'UE Initiation à la Recherche de mon Master Informatique à l'Université de Lorraine. Il a été réalisé en collaboration avec Persée, une Unité de Support et de Recherche de l'ENS de Lyon et du CNRS. Entièrement écris en Python l'outil développé à permis d'obtenir des résultats très satisfaisants sur l'ensemble des documents fournis. Ces travaux ont menés à la publication d'un <a href=\"https://delegate.iccbr2023.org/res/paper_18.pdf\">article</a> à l'occasion de l'International Conference on Case-Based Reasoning de 2023.<br>Pour plus d'informations, vous pouvez consulter le <a href=\"github.com/Amaroke/Georges\">dépôt GitHub</a> du projet.",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imglang1: logoPython,
        imglang2: logonumpy,
        lang1: "Python",
        lang2: "NumPy"
    },
    {
        title: "DPiscine",
        resumeen: "Agenda management website",
        resumefr: "Site de gestion d'agenda",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
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
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
        imglang1: logojava,
        imglang2: logolibgdx,
        lang1: "Java",
        lang2: "LibGDX"
    },
    {
        title: "Golden-PPIT",
        resumeen: "Event organization website",
        resumefr: "Site web d'organisation d'évènements",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
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
        descriptionen: "Charadle is a web application developed in React, inspired by Wordle, that offers a game where players have to guess a character from manga or anime based on an image. Several hint systems are available. The site uses the MyAnimeList API and performs some automated data collection to obtain information about the characters. Additionally, users can personalize their experience by connecting their own MyAnimeList list by entering their username. The backend is hosted on the Vercel platform.<br/>I completely developed this project on my own in 2023.<br/><br/>You can access the application by following this link:<br/><a href=\"https://amaroke.github.io/Charadle\">https://amaroke.github.io/Charadle</a><br/>And the GitHub repository by following this one:<br/><a href=\"https://github.com/Amaroke/Charadle\">https://github.com/Amaroke/Charadle</a>",
        descriptionfr: "Charadle est une application web développée en React, s'inspirant de Wordle, qui propose un jeu où l'on doit deviner un personnage de manga ou d'animé à partir d'une image. Plusieurs systèmes d'indices sont disponibles. Le site utilise l'API de MyAnimeList et effectue un peu de collecte de données automatisée pour obtenir des informations sur les personnages. De plus, il est possible d'utiliser sa propre liste MyAnimeList en renseignant son pseudonyme. Le backend est hébergé sur la plateforme Vercel.<br/>J'ai entièrement réalisé ce projet seul en 2023.<br/><br/>Vous pouvez accéder à l'application en suivant ce lien :<br/><a href=\"https://amaroke.github.io/Charadle\">https://amaroke.github.io/Charadle</a><br/>Et au dépôt github en suivant celui-ci :<br/><a href=\"https://github.com/Amaroke/Charadle\">https://github.com/Amaroke/Charadle</a>",
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
        title: "Ideology",
        resumeen: "Personality test web application",
        resumefr: "Application web de test de personalité",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
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
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
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
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
        imglang1: logoKotlin,
        imglang2: logoAndroidStudio,
        lang1: "Kotlin",
        lang2: "Android Studio"
    },
    {
        title: "PiscineTime",
        resumeen: "Widget for swimming pool hours",
        resumefr: "Widget pour les horaires de la piscine",
        descriptionen: "TODO",
        descriptionfr: "TODO",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
        imglang1: logoKotlin,
        imglang2: logoAndroidStudio,
        lang1: "Kotlin",
        lang2: "Android Studio"
    }
];