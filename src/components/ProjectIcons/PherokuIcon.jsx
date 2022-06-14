import React from "react";

// Import Icon
import { SiHeroku } from "react-icons/si";

function PherokuIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.heroku ? (
                <SiHeroku className="text-primary fs-1" />
            ) : (
                <SiHeroku className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PherokuIcon;