import React from "react";

// Import Icon
import { SiReact } from "react-icons/si";

function PreactIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.react ? (
                <SiReact className="text-primary fs-1" />
            ) : (
                <SiReact className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PreactIcon;