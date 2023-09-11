import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProjectCard({ title, resume, description, imgUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imglang1, imglang2, imglang3, lang1, lang2, lang3, setSelectedProject, setShowDialog }) {

  const [t] = useTranslation("global");

  const handleClick = () => {
    setSelectedProject({ title, description, imgUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imglang1, imglang2, imglang3, lang1, lang2, lang3 });
    setShowDialog(true);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <h4>{title}</h4>
        <span>{resume}</span>
        <span className="ClickMe">{t("projects.projectcard.info")}</span>
      </div>
    </Col>
  )
}

export default ProjectCard;
