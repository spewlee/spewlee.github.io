import React from "react";

// Import Icon
import { SiInsomnia } from "react-icons/si";

function PinsomniaIcon(projectData) {
    return (
        <div className="feature-icon d-inline-flex align-items-center justify-content-center">
            {projectData.insomnia ? (
                <SiInsomnia className="text-primary fs-1" />
            ) : (
                <SiInsomnia className="text-muted fs-1" />
            )}
        </div>
    )
}

export default PinsomniaIcon;