import React from "react";

// Import Icon
import { SiRuby } from "react-icons/si";

function PrubyIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.ruby ? (
                <SiRuby className="text-primary fs-1" />
            ) : (
                <SiRuby className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PrubyIcon;