import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "processImage": "Process",
      "processing": "Processing...",
      "uploadImages": "Upload Images",
      "dragDrop": "Drag and drop images here, or click to select files",
      "processAll": "Process All Images",
      "downloadAll": "Download All",
      "downloadSeparately": "Download Separately",
      "reset": "Reset All",
      "watermarkSettings": "Watermark Settings",
      "socialMediaImageProcessor": "Social Media Image Processor",
      "resetAll": "Reset Frame",
      "watermarkSettingsButton": "Frame Settings",
      "textConfiguration": "Text Configuration",
      "imageDescription": "Image Description",
      "enterImageDescription": "Enter image description",
      "textDirection": "Text Direction",
      "leftToRight": "Left to Right",
      "rightToLeft": "Right to Left",
      "preview": "Preview",
      "enterTextToPreview": "Enter text to preview",
      "uploadDescription": "Upload your images to process them for social media - includes square cropping, background blur for portrait images, and watermarking.",
      "frameConfiguration": "Configure your Frame",
      "frameConfigDescription": "Upload your logo, bottom (footer), watermark to configure",
      "logoTopLeft": "Logo (Top Left)",
      "logoDescription": "Logo will be placed in the top-left corner (10% of frame size)",
      "bottomImage": "Bottom Image",
      "bottomImageDescription": "Upload a PNG image of 1080X100 to be placed at the bottom of the frame",
      "watermarkImage": "Watermark Image",
      "watermarkDescription": "Add a PNG watermark with customizable opacity, size, and position",
      "saveFrameConfiguration": "Save Frame Configuration",
      "opacity": "Opacity",
      "size": "Size (%)",
      "positionX": "Position X (%)",
      "positionY": "Position Y (%)",
      "noImageSelected": "No image selected",
      "backToHome": "Back to Home",
      "watermarkConfigTitle": "Frame Configuration",
      "watermarkConfigDescription": "Configure your 1080x1080 frame layout with logo and bottom images",
      "sampleFrameImages": "Sample Frame Images",
      "customFontUpload": "Upload Custom Font (Thaana Support)",
      "privacyStatement": "✨ Privacy Statement: Uploaded images will not be stored in any database or storage; they will only be processed through your browser. ✨"
    }
  },
  dv: {
    translation: {
      "processImage": "ޕްރޮސެސް",
      "processing": "ޕްރޮސެސް ކުރަނީ...",
      "uploadImages": "ފޮޓޯ އަޕްލޯޑް ކުރުން",
      "dragDrop": "ފޮޓޯ މިތަނަށް ދެމާލާ ނުވަތަ ފޮޓޯ ހޮވުމަށް ފިތާލާ",
      "processAll": "ފޮޓޯތައް ޕްރޮސެސް ކުރޭ",
      "downloadAll": "ފޮޓޯތައް ޑައުންލޯޑް ކުރޭ",
      "downloadSeparately": "ވަކިވަކިން ޑައުންލޯޑް ކުރުން",
      "reset": "އަލުން ފަށާ",
      "watermarkSettings": "ވޯޓަރމާކް ސެޓިންގްސް",
      "socialMediaImageProcessor": "ސޯޝަލް މީޑިއާ އިމޭޖް ޕްރޮސެސަރ",
      "resetAll": "ފްރޭމް ފުހެލާ",
      "watermarkSettingsButton": "ފްރޭމު ސެޓިންގްސް",
      "textConfiguration": "ޓެކްސްޓް ކޮންފިގަރޭޝަން",
      "imageDescription": "ފޮޓޯގެ ތަފްސީލް",
      "enterImageDescription": "ފޮޓޯގެ ތަފްސީލް ލިޔުއްވާ",
      "textDirection": "ޓެކްސްޓްގެ ދިމާލުން",
      "leftToRight": "ވައަތުން ކަނާތަށް",
      "rightToLeft": "ކަނާތުން ވައަތަށް",
      "preview": "ޕްރިވިއު",
      "enterTextToPreview": "ޕްރިވިއު ކުރުމަށް ޓެކްސްޓް ލިޔުއްވާ",
      "uploadDescription": "ސޯޝަލް މީޑިއާއަށް ފޮޓޯ ޕްރޮސެސް ކުރުމަށް ފޮޓޯ އަޕްލޯޑް ކުރައްވާ - ހިމެނެނީ ހަތަރެސްކަން ކްރޮޕިންގ، ޕޯޓްރެއިޓް ފޮޓޯތަކަށް ބެކްގްރައުންޑް ބްލަރ، އަދި ވޯޓަރމާކް",
      "frameConfiguration": "ފްރޭމް ކޮންފިގަރޭޝަން",
      "frameConfigDescription": "ފްރޭމެއް ހެދުމަށް ލޯގޯ އަދި ތިރީގެ ފޮޓޯތައް އަޕްލޯޑް ކުރައްވާ",
      "logoTopLeft": "ލޯގޯ (މަތީ ވައަތު ކަނުގައި)",
      "logoDescription": "ލޯގޯ ބެހެއްޓޭނީ މަތީ ވައަތު ކަނުގައި (ފްރޭމްގެ 15%)",
      "bottomImage": "ތިރީގެ ފޮޓޯ",
      "bottomImageDescription": "1080X100 PNG ފޮޓޯއެއް ތިރިއަށް ލުމަށް އަޕްލޯޑް ކުރައްވާ",
      "watermarkImage": "ވޯޓަރމާކް ފޮޓޯ",
      "watermarkDescription": "އޯޕަސިޓީ، ސައިޒް، އަދި ޕޮޒިޝަން ބަދަލުކުރެވޭ PNG ވޯޓަރމާކެއް އިތުރުކުރައްވާ",
      "saveFrameConfiguration": "ފްރޭމް ކޮންފިގަރޭޝަން ސޭވްކުރައްވާ",
      "opacity": "އޯޕަސިޓީ",
      "size": "ސައިޒް (%)",
      "positionX": "ޕޮޒިޝަން X (%)",
      "positionY": "ޕޮޒިޝަން Y (%)",
      "noImageSelected": "ފޮޓޯއެއް ހޮވިފައެއް ނުވޭ",
      "backToHome": "މައި ޞަފްޙާއަށް",
      "watermarkConfigTitle": "ފްރޭމު ކޮންފިގަރޭޝަން",
      "watermarkConfigDescription": "ލޯގޯ އަދި ތިރީގެ ފޮޓޯތަކާއެކު 1080x1080 ފްރޭމް ލޭއައުޓް ކޮންފިގަރ ކުރައްވާ",
      "sampleFrameImages": "ނަމޫނާ ފައިލްތައް",
      "customFontUpload":"ބޭނުންފުޅު ފޮންޓެއް އަޕްލޯޑްކުރުމަށް - ތާނަ ފޮންޓު ބޭނުންކުރެވޭނެ",
      "privacyStatement": "✨ އަޕްލޯޑްކުރެވޭ އެއްވެސް ފޮތޯއެއް މިއެޕްގެ އެއްވެސްތާކު ރައްކައުކުރެވިގެން ނުދާނެ. ހުރިހާ ހަރަކާތެއް ކުރިޔަށްދާނީ ތިޔަފަރާތުގެ ބްރޯޒާ ތެރޭގަ ✨"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;