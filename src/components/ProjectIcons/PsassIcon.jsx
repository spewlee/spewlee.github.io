import React from "react";

// Import Icon
import { SiSass } from "react-icons/si";

function PsassIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.sass ? (
                <SiSass className="text-primary fs-1" />
            ) : (
                <SiSass className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PsassIcon;