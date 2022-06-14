import React from "react";

// Import Icon
import { SiBootstrap } from "react-icons/si";

function PbootstrapIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.bootstrap ? (
                <SiBootstrap className="text-primary fs-1" />
            ) : (
                <SiBootstrap className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PbootstrapIcon;