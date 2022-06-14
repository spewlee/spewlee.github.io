import React from "react";

function SkillCard(skillData) {
    const icon = `"${skillData.icon_className} text-primary feature-icon fs-1"`

    return (
        < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
            <i className={icon} />
            <h3>{skillData.title}</h3>
        </div>
    )
}

export default SkillCard;