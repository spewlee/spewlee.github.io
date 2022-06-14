import React from "react";

// Import Icon
import { SiPython } from "react-icons/si";

function PpythonIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.python ? (
                <SiPython className="text-primary fs-1" />
            ) : (
                <SiPython className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PpythonIcon;