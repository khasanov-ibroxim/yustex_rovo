// src/components/SchemaManager.jsx
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { schemas } from "./schema.jsx";

export default function SchemaManager() {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageData = schemas[currentPath];

    if (!pageData) return null; // Agar mos schema topilmasa hech narsa qo‘ymaydi

    return (
        <Helmet>
            <link rel="canonical" href={pageData.canonical} />
            <script type="application/ld+json">
                {JSON.stringify(pageData.schema)}
            </script>
        </Helmet>
    );
}
