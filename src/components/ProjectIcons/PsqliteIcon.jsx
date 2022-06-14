import React from "react";

// Import Icon
import { SiSqlite } from "react-icons/si";

function PsqliteIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.sqlite ? (
                <SiSqlite className="text-primary fs-1" />
            ) : (
                <SiSqlite className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PsqliteIcon;