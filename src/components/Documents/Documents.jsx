import React from "react";
import styles from "./Documents.module.css";

export default function Documents() {
    // DOWNLOAD_NAME is the name of the file when it gets downloaded by client
    // FILENAME is the name of the file on the server side
    const BASE_PATH_TO_DOCUMENT = `${process.env.PUBLIC_URL}/documents/`;
    const RESUME_FILENAME = "resume.pdf";
    const RESUME_DOWNLOAD_NAME = "Resume-AungKhant (Derrick)";
    const TRANSCRIPT_FILENAME = "academic_trascript.pdf";
    const TRANSCRIPT_DOWNLOAD_NAME = "Transcript-AungKhant (Derrick)";

    return (
        <div className={styles.container}>
            <a
                href={`${BASE_PATH_TO_DOCUMENT}${RESUME_FILENAME}`}
                download={RESUME_DOWNLOAD_NAME}
            >
                <i class="mr-4 fas fa-file-download fa-2x"></i>
                Resume
            </a>
            <a
                href={`${BASE_PATH_TO_DOCUMENT}${TRANSCRIPT_FILENAME}`}
                download={TRANSCRIPT_DOWNLOAD_NAME}
            >
                <i class="mr-4 fas fa-file-alt fa-2x"></i>
                Academic Transcript
            </a>
        </div>
    );
}
