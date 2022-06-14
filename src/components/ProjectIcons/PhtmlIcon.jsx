import React from "react";

// Import Icon
import { SiHtml5 } from "react-icons/si";

function PhtmlIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.html ? (
                <SiHtml5 className="text-primary fs-1" />
            ) : (
                <SiHtml5 className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PhtmlIcon;