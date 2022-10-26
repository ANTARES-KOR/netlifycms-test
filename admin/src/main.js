import CMS from "netlify-cms-app";
import { ko } from "netlify-cms-locales";
import cloudinary from "netlify-cms-media-library-cloudinary";
import { YoutubeEmbedEditor } from "./youtube";

CMS.registerLocale("ko", ko);

CMS.registerEditorComponent(YoutubeEmbedEditor);

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewStyle("./preview.css");

// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
