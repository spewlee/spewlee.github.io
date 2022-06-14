import React from "react";

// Import Icon
import { SiPostgresql } from "react-icons/si";

function PpostgresqlIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.postgresql ? (
                <SiPostgresql className="text-primary fs-1" />
            ) : (
                <SiPostgresql className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PpostgresqlIcon;