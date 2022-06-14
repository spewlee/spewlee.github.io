import React from "react";

// Import Icon
import { SiJavascript } from "react-icons/si";

function PjavascriptIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.javascript ? (
                <SiJavascript className="text-primary fs-1" />
            ) : (
                <SiJavascript className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PjavascriptIcon;