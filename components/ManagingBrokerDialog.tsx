import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { ManagingBrokerDialogProps } from "@/src/utils/constants";

const ManagingBrokerDialog: React.FC<ManagingBrokerDialogProps> = ({
  open,
  onClose,
  newBroker,
  handleInputChange,
  handleSubmit,
}) => {
  const t = useTranslations("BrokerPage");

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t("add_managing_broker")}</DialogTitle>
      <DialogContent>
        <TextField
          name="legalName"
          label={t("legal_name")}
          value={newBroker.legalName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          label={t("address")}
          value={newBroker.address}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="city"
          label={t("city")}
          value={newBroker.city}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="country"
          label={t("country")}
          value={newBroker.country}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <DialogActions>
          <Button onClick={onClose}>{t("close")}</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {t("save")}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ManagingBrokerDialog;
