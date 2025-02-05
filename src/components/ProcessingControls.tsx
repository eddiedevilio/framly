import { Button } from "./ui/button";
import { Play, Archive, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProcessingControlsProps {
  onProcessAll: () => void;
  onDownloadAll: () => void;
  onDownloadAllIndividually: () => void;
  hasImages: boolean;
  hasProcessedImages: boolean;
  isProcessing: boolean;
}

export const ProcessingControls = ({
  onProcessAll,
  onDownloadAll,
  onDownloadAllIndividually,
  hasImages,
  hasProcessedImages,
  isProcessing,
}: ProcessingControlsProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full">
      <Button
        onClick={onProcessAll}
        className="w-full"
        disabled={!hasImages || isProcessing}
      >
        <Play className="mr-2 h-4 w-4" />
        {t("processAll")}
      </Button>
      {hasProcessedImages && (
        <>
          <Button
            onClick={onDownloadAll}
            variant="secondary"
            className="w-full"
          >
            <Archive className="mr-2 h-4 w-4" />
            Download as ZIP
          </Button>
          <Button
            onClick={onDownloadAllIndividually}
            variant="outline"
            className="w-full"
          >
            <Download className="mr-2 h-4 w-4" />
            {t("downloadAll")}
          </Button>
        </>
      )}
    </div>
  );
};