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
import projImg from "../../../assets/img/project.jpg";

export const projects = [
    {
        title: "Georges",
        resumeen: "Archive cleaning tool",
        resumefr: "Nettoyage d'archives",
        description: "\"Georges\" permet grâce au raisonnement à partir de cas de nettoyer des archives. Ce projet a été réalisé, dans le cadre de l'UE Initiation à la Recherche de mon Master Informatique à l'Université de Lorraine. Il a été réalisé en collaboration avec Persée, une Unité de Support et de Recherche de l'ENS de Lyon et du CNRS. Entièrement écris en Python l'outil développé à permis d'obtenir des résultats très satisfaisants sur l'ensemble des documents fournis. Ces travaux ont menés à la publication d'un <a href=\"https://delegate.iccbr2023.org/res/paper_18.pdf\">article</a> à l'occasion de l'International Conference on Case-Based Reasoning de 2023.<br>Pour plus d'informations, vous pouvez consulter le <a href=\"github.com/Amaroke/Georges\">dépôt GitHub</a> du projet.",
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
        description: "ProjetDPiscine est un projet de site web développé durant mon master. Il inclut une gestion côté serveur avec Node.js et propose un site de gestion d'agenda. L'objectif est de permettre aux utilisateurs de créer des comptes et de planifier des évènements avec plusieurs autres utilisateurs via un calendrier partagé.",
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
        description: "ObstACL-Tower est un jeu de type rogue-like qui offre une progression à travers plusieurs niveaux, permettant aux joueurs d'affronter divers monstres. Des collectibles sont également présents, ainsi qu'une gestion du score, des sons et des musiques. Ce projet a été développé en appliquant la méthode Scrum et en utilisant libGDX.",
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
        description: "Golden-PPIT est un site web d'organisation d'événements qui permet à plusieurs utilisateurs de s'inviter et de planifier leurs activités via la plateforme. Il a été développé en utilisant la méthode Scrum, et comprend une base de données complète pour assurer son bon fonctionnement.",
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
        description: "Platventure est un jeu de plateforme offrant une expérience de jeu à travers plusieurs niveaux. Il est disponible sur PC ainsi que sur mobile, grâce à l'utilisation de libGDX. Le jeu propose des collectibles, un système de score et des effets sonores.",
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
        description: "PuissanceQuatre est un jeu de puissance 4 avec une IA développée en utilisant l'algorithme Alpha-Beta. Cette IA offre plusieurs niveaux de difficulté, avec des degrés de profondeur différents pour simuler ses coups. Elle devient ainsi pratiquement imbattable pour l'humain une fois qu'elle atteint un certain seuil de prédictions.",
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
        description: "Charadle est un site web développé en React, inspiré de Wordle, qui propose un jeu où le joueur doit deviner un personnage issu d'un manga/anime à partir d'une image, ou deviner le titre de l'œuvre associée. Le site inclut une gestion de base de données pour les utilisateurs, ainsi qu'un lien vers l'API de MyAnimeList pour accéder aux informations nécessaires.",
        imgUrl1: projImg,
        imgUrl2: projImg,
        imgUrl3: projImg,
        imgUrl4: projImg,
        imgUrl5: projImg,
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
        resumeen: "Personality test web app",
        resumefr: "Application web de test de personalité",
        description: "Ideology est une application web réalisé à l'aide de Spring Boot et Angular. Elle permet aux utilisateurs de répondre à un questionnaire et de recevoir un résultat indiquant leur personnalité. L'application inclut une gestion de base de données pour les utilisateurs, ainsi qu'une gestion des sessions et des cookies.",
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
        title: "Yurei Esports",
        resumeen: "Esport team website",
        resumefr: "Site web d'une équipe d'esport",
        description: "Yurei Esport est un site web développé en React pour une équipe d'esport allemande. Le site agit comme une vitrine de l'équipe, présentant des informations et des détails pertinents sur eux.",
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
    }
];