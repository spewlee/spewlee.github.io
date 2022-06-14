import React from "react";

// Import Icon
import { SiCss3 } from "react-icons/si";

function PcssIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.css ? (
                <SiCss3 className="text-primary fs-1" />
            ) : (
                <SiCss3 className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PcssIcon;