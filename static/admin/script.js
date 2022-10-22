import CMS from "netlify-cms-app";
import { ko } from "netlify-cms-locales";

CMS.registerLocale("ko", ko);

// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate);
