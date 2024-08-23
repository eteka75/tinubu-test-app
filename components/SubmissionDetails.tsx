import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ProductProps, SubmissionProps } from "@/src/utils/constants";
import { formatDate } from "@/src/utils/fn";

const SubmissionDetails: React.FC<SubmissionProps> = ({ submission }) => {
  const t = useTranslations("SubmissionPage");
  const { name, creation, status } = submission;

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("name")}
        </Typography>
        <Typography variant="body2">{name}</Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("creation")}
        </Typography>
        <Typography variant="body2">
          {formatDate(creation ?? "") ?? "-"}
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("status")}
        </Typography>
        {status && (
          <Chip
            label={status}
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default SubmissionDetails;
