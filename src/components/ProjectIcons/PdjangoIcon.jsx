import React from "react";

// Import Icon
import { SiDjango } from "react-icons/si";

function PdjangoIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.django ? (
                <SiDjango className="text-primary fs-1" />
            ) : (
                <SiDjango className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PdjangoIcon;