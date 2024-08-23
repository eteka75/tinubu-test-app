import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ProductProps } from "@/src/utils/constants";
import { formatDate } from "@/src/utils/fn";

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  const t = useTranslations("ProductPage");
  const { name, origin, commercial_owner, create_date, updated_date, status } =
    product;

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
          {t("origin")}
        </Typography>
        <Typography variant="body2">{origin ?? "-"}</Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("commercial_owner")}
        </Typography>
        <Typography variant="body2">{commercial_owner ?? "-"}</Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("create_date")}
        </Typography>
        <Typography variant="body2">
          {formatDate(create_date) ?? "-"}
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("updated_date")}
        </Typography>
        <Typography variant="body2">
          {formatDate(updated_date) ?? "-"}
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

export default ProductDetails;
