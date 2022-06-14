import React from "react";

// Import Icon
import { SiJquery } from "react-icons/si";

function PjqueryIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.jquery ? (
                <SiJquery className="text-primary fs-1" />
            ) : (
                <SiJquery className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PjqueryIcon;