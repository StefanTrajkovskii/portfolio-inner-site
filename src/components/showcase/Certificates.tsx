import React from 'react';

export interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Certificates</h1>
            <h3>Professional & Course Credentials</h3>
            <br />
            <p>
                Add your certificates here. You can include provider, title,
                date, and verification links.
            </p>
        </div>
    );
};

export default Certificates;


