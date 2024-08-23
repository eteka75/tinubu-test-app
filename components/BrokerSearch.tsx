"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  Dialog,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useBrokers } from "@/src/hooks/useBrokers";
import ManagingBrokerDialog from "./ManagingBrokerDialog";
import BrokerDetails from "./BrokerDetails";
import { useTranslations } from "next-intl";
import { Broker } from "@/src/utils/constants";

const BrokerSearch: React.FC = ({ children }: { children?: ReactNode }) => {
  const { brokers, selectedBroker, addBroker, handleSelectBroker } =
    useBrokers();
  const [openDialog, setOpenDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [newBroker, setNewBroker] = useState<Partial<Broker>>({
    legalName: "",
    address: "",
    city: "",
    country: "",
    commission: undefined,
  });
  const [selectedBrokerId, setSelectedBrokerId] = useState<number | null>(null);

  const t = useTranslations("BrokerPage");

  const handleOpenDialog = () => {
    resetBroker();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  useEffect(() => {
    if (selectedBroker) {
      setInputValue(selectedBroker.legalName);
      setSelectedBrokerId(selectedBroker.id);
      setNewBroker({
        legalName: selectedBroker.legalName,
        address: selectedBroker.address,
        city: selectedBroker.city,
        country: selectedBroker.country,
        commission: selectedBroker.commission ?? undefined,
      });
    }
  }, [selectedBroker]);

  useEffect(() => {
    if (selectedBrokerId !== null) {
      const brokerToSelect = brokers.find(
        (broker) => broker.id === selectedBrokerId
      );
      if (brokerToSelect) {
        setInputValue(brokerToSelect.legalName);
      }
    }
  }, [brokers, selectedBrokerId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBroker({
      ...newBroker,
      [event.target.name]: event.target.value,
    });
  };

  const resetBroker = () => {
    setNewBroker({
      legalName: "",
      address: "",
      city: "",
      country: "",
      commission: undefined,
    });
    setSelectedBrokerId(null);
  };

  const handleSubmit = () => {
    if (
      newBroker.legalName &&
      newBroker.address &&
      newBroker.city &&
      newBroker.country
    ) {
      const newBrokerWithId = {
        ...newBroker,
        id: brokers.length + 1,
      } as Broker;

      addBroker(newBrokerWithId);
      setSelectedBrokerId(newBrokerWithId.id);
      resetBroker();
      handleCloseDialog();
    }
  };

  return (
    <Box>
      <Card>
        <CardHeader
          title={t("title")}
          subheader={t("description")}
          titleTypographyProps={{
            variant: "h2",
            style: { fontSize: "1.25rem", fontWeight: "bold" },
          }}
          subheaderTypographyProps={{
            variant: "body2",
            color: "text.secondary",
          }}
        />
        <CardContent>
          <Autocomplete
            options={brokers}
            getOptionLabel={(option) => option.legalName}
            value={
              brokers.find((broker) => broker.id === selectedBrokerId) || null
            }
            renderInput={(params) => (
              <TextField {...params} label={t("search")} variant="outlined" />
            )}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            onChange={(event, value) => {
              if (value && value.id !== -1) {
                handleSelectBroker(value.id);
              } else {
                handleSelectBroker(-1);
                setInputValue("");
              }
            }}
            filterOptions={(options, state) => {
              const filtered = options
                .filter((option) =>
                  option.legalName
                    .toLowerCase()
                    .includes(state.inputValue.toLowerCase())
                )
                .slice(0, 10);

              if (state.inputValue !== "") {
                filtered.push({
                  legalName: t("or_add_manually"),
                  id: -1,
                  address: "",
                  city: "",
                  country: "",
                } as Broker);
              }

              return filtered;
            }}
            renderOption={(props, option) => (
              <ListItem
                {...props}
                sx={{
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <ListItemText
                  primary={
                    option.id === -1 ? (
                      <Typography
                        variant="body2"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenDialog();
                        }}
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        {t("or_add_manually")}
                      </Typography>
                    ) : (
                      `${option.legalName} - ${option.address}, ${option.city} - ${option.country}`
                    )
                  }
                />
              </ListItem>
            )}
          />

          {selectedBroker && (
            <BrokerDetails
              selectedBroker={selectedBroker}
              onCommissionChange={(newCommission) => {
                setNewBroker((prev) => ({
                  ...prev,
                  commission: newCommission,
                }));
              }}
            />
          )}
        </CardContent>
      </Card>
      <ManagingBrokerDialog
        open={openDialog}
        onClose={handleCloseDialog}
        newBroker={newBroker as Broker}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default BrokerSearch;
