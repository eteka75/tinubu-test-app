import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { BrokerDetailsProps } from "@/src/utils/constants";

const BrokerDetails: React.FC<BrokerDetailsProps> = ({
  selectedBroker,
  onCommissionChange,
}) => {
  const t = useTranslations("BrokerPage");
  const [commission, setCommission] = useState<number | undefined>(
    selectedBroker.commission
  );

  useEffect(() => {
    setCommission(selectedBroker.commission ?? undefined);
  }, [selectedBroker]);

  const handleCommissionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    // traitement taux commision >=0 && taux commision <=100
    if (isNaN(value)) {
      setCommission(undefined);
      onCommissionChange(undefined);
    } else if (value >= 0 && value <= 100) {
      setCommission(value);
      onCommissionChange(value);
    }
  };

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("legal_name")}
        </Typography>
        <Typography variant="body2">{selectedBroker.legalName}</Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("address")}
        </Typography>
        <Typography variant="body2">{selectedBroker.address ?? "-"}</Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("city")}
        </Typography>
        <Typography variant="body2">{selectedBroker.city ?? "-"}</Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t("country")}
        </Typography>
        <Typography variant="body2">{selectedBroker.country ?? "-"}</Typography>
      </Box>

      <TextField
        name="commission"
        label={t("commission")}
        value={commission ?? ""}
        fullWidth
        margin="normal"
        onChange={handleCommissionChange}
        type="number"
        inputProps={{ min: 0, max: 100 }}
      />
    </Box>
  );
};

export default BrokerDetails;
